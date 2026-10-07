import type { MetadataRoute } from "next";
import axios from "axios";
import { fetchCatalog } from "@/hooks/catalog";
import { industryDetails } from "@/constant/industries_data";
import { MenuResponse } from "@/types/menu.types";
import { BlogData, BlogResponse } from "@/types/blog.types";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.novasac.es";

// Re-generate this sitemap in the background at most once per hour.
// A redeploy isn't needed for a new product, category or blog post to show up here —
// it just needs to be live on the backend and for this window to have passed.
export const revalidate = 3600;

// Every static, public route in the app. Add or remove a line here when a page is
// added or removed — this is the one place that needs a manual edit for static routes.
// (Intentionally excluded: /search — needs a query to be a real page; /profile/[user_id] —
// private per-user content, never indexable.)
const STATIC_PATHS: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1.0, changeFrequency: "daily" },
    { path: "/about", priority: 0.7, changeFrequency: "monthly" },
    { path: "/company-information", priority: 0.3, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
    { path: "/cookies", priority: 0.2, changeFrequency: "yearly" },
    { path: "/custom-made-bags", priority: 0.8, changeFrequency: "monthly" },
    { path: "/industries", priority: 0.7, changeFrequency: "monthly" },
    { path: "/novasac-recycling", priority: 0.6, changeFrequency: "monthly" },
    { path: "/popular-products", priority: 0.8, changeFrequency: "daily" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
    { path: "/recycled-bags", priority: 0.8, changeFrequency: "weekly" },
    { path: "/technical-textiles", priority: 0.8, changeFrequency: "monthly" },
    { path: "/terms", priority: 0.2, changeFrequency: "yearly" },
];

type SitemapEntry = MetadataRoute.Sitemap[number];

function abs(path: string): string {
    return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

async function getIndustryEntries(): Promise<SitemapEntry[]> {
    // Local, build-time data — same file the industry pages themselves use, so this
    // can never drift out of sync and needs no network call.
    return industryDetails.map((industry) => ({
        url: abs(`/industries/${industry.slug}`),
        changeFrequency: "monthly",
        priority: 0.6,
    }));
}

async function getBlogEntries(): Promise<SitemapEntry[]> {
    try {
        const res = await axios.get<BlogResponse>("https://admin.novasac.es/api/home/blog");
        return (res.data.data ?? []).map((post: BlogData) => ({
            url: abs(`/blog/${post.slug}`),
            lastModified: post.published_at ? new Date(post.published_at) : undefined,
            changeFrequency: "monthly",
            priority: 0.5,
        }));
    } catch (err) {
        // A flaky blog endpoint shouldn't take down the whole sitemap — log and move on.
        console.error("sitemap: failed to fetch blog posts", err);
        return [];
    }
}

async function getCategoryAndProductEntries(): Promise<SitemapEntry[]> {
    let menu: MenuResponse["data"] = [];
    try {
        const res = await axios.get<MenuResponse>("https://admin.novasac.es/api/menu");
        menu = res.data.data ?? [];
    } catch (err) {
        console.error("sitemap: failed to fetch menu/categories", err);
        return [];
    }

    const entries: SitemapEntry[] = [];

    for (const category of menu) {
        // Top-level category page.
        entries.push({
            url: abs(`/category/${category.category_slug}`),
            changeFrequency: "weekly",
            priority: 0.7,
        });

        // Category + attribute-value sub-pages (same URL shape the nav dropdown links to).
        for (const attribute of category.attributes ?? []) {
            for (const value of attribute.values ?? []) {
                entries.push({
                    url: abs(`/category/${category.category_slug}/${value.slug}/${attribute.slug}`),
                    changeFrequency: "weekly",
                    priority: 0.6,
                });
            }
        }
    }

    // Individual product pages: walk every page of every top-level category via the
    // same fetchCatalog() the category listing pages already use, so this is guaranteed
    // to match what's actually live rather than a separate guess at the data shape.
    const seen = new Set<string>();
    const productResults = await Promise.all(
        menu.map(async (category) => {
            const productEntries: SitemapEntry[] = [];
            let page = 1;
            const MAX_PAGES = 100; // safety cap against a pagination bug causing an infinite loop

            while (page <= MAX_PAGES) {
                try {
                    const res = await fetchCatalog({ slug: [category.category_slug], page });
                    const { products, pagination } = res.data;

                    for (const product of products) {
                        if (!product.slug || !product.attributes_value_slug) continue;
                        const url = `/products/${product.slug}/${product.attributes_value_slug}`;
                        if (seen.has(url)) continue;
                        seen.add(url);
                        productEntries.push({ url: abs(url), changeFrequency: "weekly", priority: 0.9 });
                    }

                    if (!pagination.has_next_page) break;
                    page++;
                } catch (err) {
                    console.error(`sitemap: failed fetching ${category.category_slug} page ${page}`, err);
                    break;
                }
            }

            return productEntries;
        })
    );

    entries.push(...productResults.flat());
    return entries;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const staticEntries: SitemapEntry[] = STATIC_PATHS.map(({ path, priority, changeFrequency }) => ({
        url: abs(path),
        changeFrequency,
        priority,
    }));

    const [industryEntries, blogEntries, categoryAndProductEntries] = await Promise.all([
        getIndustryEntries(),
        getBlogEntries(),
        getCategoryAndProductEntries(),
    ]);

    return [...staticEntries, ...industryEntries, ...blogEntries, ...categoryAndProductEntries];
}
