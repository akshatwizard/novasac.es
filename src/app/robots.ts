import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.novasac.es";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // Logged-in user's own profile — never indexable.
            // Bare /search — only meaningful with a query string, not a standalone page.
            disallow: ["/profile/", "/search"],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
