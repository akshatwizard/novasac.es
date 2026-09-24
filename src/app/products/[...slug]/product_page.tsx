"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import {
  OtherRelatedItem,
  ProductDetailApiResponse,
  RelatedProduct,
} from "@/types/single_product.types";
import { fetchProductDetail, productKeys } from "@/hooks/fetch_product";
import { ChevronDown, FileText, Settings2, Sparkles } from "lucide-react";
import ProductModals from "@/components/product_modal";

interface Props {
  slug: string[];
  initialData: ProductDetailApiResponse;
}
const NO_IMAGE = "/images/no-image.svg";
const eurFormatter = new Intl.NumberFormat("es-ES", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});
const formatEUR = (n: number | string | null | undefined) => {
  const value = Number(n);
  return Number.isFinite(value) ? eurFormatter.format(value) : "";
};

export default function ProductDetailClient({ slug, initialData }: Props) {
  const { data } = useQuery({
    queryKey: productKeys.detail(slug),
    queryFn: () => fetchProductDetail(slug),
    initialData,
  });

  const {
    product_details: p,
    related_products = [],
    other_related_products = {},
  } = data.data;

  const largeImages = p.image_larges?.length
    ? p.image_larges.map((i) => i.image_large)
    : [NO_IMAGE];
  const thumbImages = largeImages.map(
    (large, i) => p.image_thumbs?.[i]?.image_thumb ?? large,
  );

  const [mainRef, mainApi] = useEmblaCarousel({ loop: largeImages.length > 1 });
  const [thumbRef, thumbApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onThumbClick = useCallback(
    (index: number) => {
      mainApi?.scrollTo(index);
    },
    [mainApi],
  );

  const onSelect = useCallback(() => {
    if (!mainApi) return;
    const idx = mainApi.selectedScrollSnap();
    setSelectedIndex(idx);
    thumbApi?.scrollTo(idx);
  }, [mainApi, thumbApi]);

  useEffect(() => {
    if (!mainApi) return;
    onSelect();
    mainApi.on("select", onSelect);
    mainApi.on("reInit", onSelect);
    return () => {
      mainApi.off("select", onSelect);
      mainApi.off("reInit", onSelect);
    };
  }, [mainApi, onSelect]);

  const breadcrumb = [
    { label: "Inicio", href: "/" },
    ...(p.category
      ? [{ label: p.category.title, href: `/category/${p.category.slug}` }]
      : []),
    { label: p.title, href: "" },
  ];
  const currentPath = slug.join("/");

  return (
    <div className="py-6 lg:py-10">
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-[11px] text-stone-400 tracking-wide mb-8 flex-wrap"
      >
        {breadcrumb.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && <span className="text-stone-300">/</span>}
            {i === breadcrumb.length - 1 ? (
              <span
                aria-current="page"
                className="text-stone-600 line-clamp-1 max-w-50"
              >
                {crumb.label}
              </span>
            ) : (
              <Link
                href={crumb.href}
                className="hover:text-stone-600 transition-colors"
              >
                {crumb.label}
              </Link>
            )}
          </span>
        ))}
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
        {/* Left: image carousel */}
        <div className="space-y-3">
          <div
            className="overflow-hidden rounded-2xl bg-stone-50 border border-stone-100"
            ref={mainRef}
          >
            <div className="flex">
              {largeImages.map((src, i) => (
                <div key={i} className="relative flex-[0_0_100%] aspect-square">
                  <Image
                    src={src}
                    alt={`${p.title} — imagen ${i + 1}`}
                    fill
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-contain p-4"
                  />
                </div>
              ))}
            </div>
          </div>

          {largeImages.length > 1 && (
            <div className="flex justify-center gap-2">
              <button
                type="button"
                aria-label="Imagen anterior"
                onClick={() => mainApi?.scrollPrev()}
                className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-stone-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Imagen siguiente"
                onClick={() => mainApi?.scrollNext()}
                className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
              >
                <svg
                  className="w-4 h-4 text-stone-500"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}

          {thumbImages.length > 1 && (
            <div className="overflow-hidden" ref={thumbRef}>
              <div className="flex gap-2">
                {thumbImages.map((src, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Ver imagen ${i + 1}`}
                    aria-current={selectedIndex === i}
                    onClick={() => onThumbClick(i)}
                    className={`relative flex-[0_0_72px] h-18 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      selectedIndex === i
                        ? "border-stone-800 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-75"
                    }`}
                  >
                    <Image
                      src={src}
                      alt={`Miniatura ${i + 1}`}
                      fill
                      sizes="72px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right: product info */}
        <div className="flex flex-col gap-6">
          {p.category && (
            <div>
              <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-semibold text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full">
                {p.category.title}
              </span>
            </div>
          )}

          <h1 className="font-serif text-2xl sm:text-3xl xl:text-4xl text-stone-900 leading-tight tracking-tight">
            {p.title}
          </h1>

          {p.product_short_description && (
            <p className="text-sm font-medium text-stone-500">
              {p.product_short_description}
            </p>
          )}

          {/* Price row */}
          <div className="flex items-baseline gap-3">
            {p.mrp != null ? (
              <span className="text-2xl font-semibold text-primary-500">
                {formatEUR(p.mrp)}
              </span>
            ) : (
              <span className="text-sm text-stone-400 italic">
                Precio bajo consulta — contáctanos para un presupuesto
              </span>
            )}
          </div>

          <div className="h-px bg-stone-100" />
          {p.attributes?.length > 0 && (
            <div className="space-y-4">
              {p.attributes.map((attr) => (
                <div key={attr.id} className="flex items-center gap-2">
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-stone-400">
                    {attr.attribute.title}:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {attr.values.map((v) => (
                      <span
                        key={v.id}
                        className="px-2.5 py-1 text-xs rounded-full bg-stone-100 border border-stone-200 text-stone-700 font-medium"
                      >
                        {v.attribute_value.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {Object.keys(other_related_products).length > 0 && (
            <>
              <div className="h-px bg-stone-100" />
              <div className="space-y-4">
                {Object.entries(other_related_products).map(
                  ([groupTitle, items]) => (
                    <div key={groupTitle}>
                      <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-stone-400 mb-2">
                        {groupTitle}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {(items as OtherRelatedItem[]).map((item) => {
                          const itemPath = `${item.product_slug}/${item.attribute_value_slug}`;
                          const isCurrent = itemPath === currentPath;
                          return (
                            <Link
                              key={itemPath}
                              href={`/products/${itemPath}`}
                              aria-current={isCurrent ? "page" : undefined}
                              className={`px-3 py-1.5 text-[13px] rounded-full border transition-all duration-200 ${
                                isCurrent
                                  ? "bg-stone-900 text-stone-50 border-stone-900"
                                  : "bg-white text-stone-600 border-stone-200 hover:border-stone-500 hover:text-stone-900"
                              }`}
                            >
                              {item.group_name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  ),
                )}
              </div>
            </>
          )}

          <div className="h-px bg-stone-100" />
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] text-stone-400">
            {p.sku && (
              <span>
                SKU: <span className="text-stone-600 font-medium">{p.sku}</span>
              </span>
            )}
            {p.stock_quantity != null && (
              <span>
                Stock:{" "}
                <span
                  className={
                    p.stock_quantity > 0
                      ? "text-emerald-600 font-medium"
                      : "text-red-500 font-medium"
                  }
                >
                  {p.stock_quantity > 0
                    ? `${p.stock_quantity} disponibles`
                    : "Agotado"}
                </span>
              </span>
            )}
          </div>
          <ProductModals
            product={{
              id: p.id,
              title: p.title,
              category: p.category?.title ?? "",
              sku: p.sku,
              attributes: (p.attributes ?? []).flatMap((attr) =>
                attr.values.map((v) => ({
                  label: attr.attribute.title,
                  value: v.attribute_value.name,
                })),
              ),
            }}
          />
        </div>
      </div>

      {p.product_description ||
      p.product_specification ||
      p.additional_features?.length ? (
        <ProductTabs
          key={currentPath}
          description={p.product_description}
          specification={p.product_specification}
          additionalFeatures={p.additional_features}
        />
      ) : null}

      {related_products.length > 0 && (
        <RelatedProductsSection products={related_products} />
      )}
    </div>
  );
}
const COLLAPSED_HEIGHT = 420;
type Feature = { id: number; title: string; value: string };
type ProductTabsProps = {
  description: string | null;
  specification: string | null;
  additionalFeatures: Feature[] | null;
};
type Tab =
  | { label: string; icon: typeof FileText; kind: "html"; content: string }
  | { label: string; icon: typeof FileText; kind: "list"; content: Feature[] };

function ProductTabs({
  description,
  specification,
  additionalFeatures,
}: ProductTabsProps) {
  const tabs: Tab[] = [];
  if (description)
    tabs.push({
      label: "Descripción",
      icon: FileText,
      kind: "html",
      content: description,
    });
  if (specification)
    tabs.push({
      label: "Especificación",
      icon: Settings2,
      kind: "html",
      content: specification,
    });
  if (additionalFeatures?.length)
    tabs.push({
      label: "Características",
      icon: Sparkles,
      kind: "list",
      content: additionalFeatures,
    });

  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [needsClamp, setNeedsClamp] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const safeActive = Math.min(active, Math.max(tabs.length - 1, 0));
  const current = tabs[safeActive];
  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const measure = () => setNeedsClamp(el.scrollHeight > COLLAPSED_HEIGHT);
    measure();
    setExpanded(false);
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [safeActive]);
  if (!current) return null;
  return (
    <div className="mt-16">
      <div
        role="tablist"
        className="flex gap-1 border-b border-stone-200 overflow-x-auto"
      >
        {tabs.map((tab, i) => {
          const Icon = tab.icon;
          const isActive = safeActive === i;
          return (
            <button
              key={tab.label}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(i)}
              className={`relative flex items-center gap-2 px-5 py-3.5 text-sm font-medium whitespace-nowrap transition-all duration-200 -mb-px border-b-2 ${
                isActive
                  ? "border-primary-500 text-stone-900"
                  : "border-transparent text-stone-400 hover:text-stone-600 hover:border-stone-300"
              }`}
            >
              <Icon
                className={`w-3.5 h-3.5 transition-colors duration-200 ${isActive ? "text-primary-500" : "text-stone-300"}`}
                strokeWidth={isActive ? 2 : 1.5}
              />
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="mt-8" role="tabpanel">
        <div className="relative bg-stone-50/60 border border-stone-100 rounded-2xl px-6 py-7 md:px-10 md:py-9 overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-primary-100/30 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full bg-primary-50/60 pointer-events-none" />
          <div className="absolute left-0 top-8 bottom-8 w-0.75 rounded-full bg-linear-to-b from-primary-400/80 via-primary-300/50 to-transparent" />

          <div
            className="relative z-10 transition-[max-height] duration-500 ease-in-out overflow-hidden"
            style={{
              maxHeight:
                expanded || !needsClamp ? "9999px" : `${COLLAPSED_HEIGHT}px`,
            }}
          >
            <div ref={contentRef}>
              {current.kind === "list" ? (
                <dl className="divide-y divide-stone-100">
                  {current.content.map((feat) => (
                    <div
                      key={feat.id}
                      className="flex gap-4 py-3 first:pt-0 last:pb-0"
                    >
                      <dt className="w-2/5 shrink-0 text-sm font-semibold text-stone-500">
                        {feat.title}
                      </dt>
                      <dd className="text-sm text-stone-700">{feat.value}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <div
                  className="ws-prose"
                  dangerouslySetInnerHTML={{ __html: current.content }}
                />
              )}
            </div>
          </div>

          {needsClamp && !expanded && (
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-stone-50 via-stone-50/80 to-transparent pointer-events-none rounded-b-2xl z-20" />
          )}
        </div>

        {needsClamp && (
          <div className="flex justify-center mt-4">
            <button
              type="button"
              aria-expanded={expanded}
              onClick={() => setExpanded((v) => !v)}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary-600 bg-primary-50 hover:bg-primary-100 border border-primary-200 hover:border-primary-300 px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow"
            >
              {expanded ? "Ver menos" : "Ver más"}
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
                strokeWidth={2.5}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function RelatedProductsSection({ products }: { products: RelatedProduct[] }) {
  const [ref, api] = useEmblaCarousel({ dragFree: true, align: "start" });
  return (
    <div className="mt-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="md:text-3xl text-2xl text-stone-900 font-semibold">
          También te puede interesar
        </h2>
        <div className="flex gap-2">
          <button
            type="button"
            aria-label="Anterior"
            onClick={() => api?.scrollPrev()}
            className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-stone-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Siguiente"
            onClick={() => api?.scrollNext()}
            className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
          >
            <svg
              className="w-3.5 h-3.5 text-stone-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-hidden" ref={ref}>
        <div className="flex gap-4">
          {products.map((product) => {
            const mrp = product.mrp != null ? Number(product.mrp) : null;
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}/${product.attribute_value_slug}`}
                className="group flex-[0_0_200px] sm:flex-[0_0_220px]"
              >
                <div className="rounded-xl overflow-hidden bg-stone-50 border border-stone-100 group-hover:border-stone-300 group-hover:shadow-lg transition-all duration-300">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={product.image || NO_IMAGE}
                      alt={product.title}
                      fill
                      sizes="220px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-3">
                    {product.category_title && (
                      <p className="text-[10px] text-stone-400 tracking-wide uppercase mb-1">
                        {product.category_title}
                      </p>
                    )}
                    <p className="text-[13px] text-stone-700 font-medium leading-snug line-clamp-2 group-hover:text-primary-800 transition-colors">
                      {product.title}
                    </p>
                    {mrp !== null && Number.isFinite(mrp) && (
                      <span className="mt-1 block text-[18px] font-semibold text-primary-500">
                        {formatEUR(mrp)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
