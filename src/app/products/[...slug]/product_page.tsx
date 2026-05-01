'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { OtherRelatedItem, ProductDetailApiResponse, RelatedProduct } from '@/types/single_product.types'
import { fetchProductDetail, productKeys } from '@/hooks/fetch_product'
import { ChevronDown, FileText, Settings2, Sparkles } from 'lucide-react'

interface Props {
    slug: string[]
    initialData: ProductDetailApiResponse
}

export default function ProductDetailClient({ slug, initialData }: Props) {
    const { data } = useQuery({
        queryKey: productKeys.detail(slug),
        queryFn: () => fetchProductDetail(slug),
        initialData,
    })

    const { product_details: p, related_products, other_related_products } = data.data

    const largeImages = p.image_larges.length > 0
        ? p.image_larges.map((i) => i.image_large)
        : ["/images/no-image.svg"]

    const thumbImages = p.image_thumbs.length > 0
        ? p.image_thumbs.map((i) => i.image_thumb)
        : ["/images/no-image.svg"]

    const [mainRef, mainApi] = useEmblaCarousel({ loop: largeImages.length > 1 })
    const [thumbRef, thumbApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true,
    })
    const [selectedIndex, setSelectedIndex] = useState(0)

    const onThumbClick = useCallback(
        (index: number) => {
            if (!mainApi || !thumbApi) return
            mainApi.scrollTo(index)
        },
        [mainApi, thumbApi]
    )

    const onSelect = useCallback(() => {
        if (!mainApi || !thumbApi) return
        const idx = mainApi.selectedScrollSnap()
        setSelectedIndex(idx)
        thumbApi.scrollTo(idx)
    }, [mainApi, thumbApi])

    useEffect(() => {
        if (!mainApi) return
        onSelect()
        mainApi.on('select', onSelect)
        mainApi.on('reInit', onSelect)
        return () => {
            mainApi.off('select', onSelect)
            mainApi.off('reInit', onSelect)
        }
    }, [mainApi, onSelect])

    const breadcrumb = [
        { label: 'Home', href: '/' },
        { label: p.category.title, href: `/category/${p.category.slug}` },
        { label: p.title, href: '#' },
    ]

    return (
        <div className="py-6 lg:py-10">

            <nav className="flex items-center gap-1.5 text-[11px] text-stone-400 tracking-wide mb-8 flex-wrap">
                {breadcrumb.map((crumb, i) => (
                    <span key={i} className="flex items-center gap-1.5">
                        {i > 0 && <span className="text-stone-300">/</span>}
                        {i === breadcrumb.length - 1 ? (
                            <span className="text-stone-600 line-clamp-1 max-w-50">{crumb.label}</span>
                        ) : (
                            <Link href={crumb.href} className="hover:text-stone-600 transition-colors">
                                {crumb.label}
                            </Link>
                        )}
                    </span>
                ))}
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">

                {/* Left: image carousel */}
                <div className="space-y-3">
                    {/* Main slide */}
                    <div className="overflow-hidden rounded-2xl bg-stone-50 border border-stone-100" ref={mainRef}>
                        <div className="flex">
                            {largeImages.map((src, i) => (
                                <div key={i} className="relative flex-[0_0_100%] aspect-square">
                                    <Image
                                        src={src}
                                        alt={`${p.title} — image ${i + 1}`}
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
                                onClick={() => mainApi?.scrollPrev()}
                                className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
                            >
                                <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => mainApi?.scrollNext()}
                                className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
                            >
                                <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
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
                                        onClick={() => onThumbClick(i)}
                                        className={`relative flex-[0_0_72px] h-18 rounded-xl overflow-hidden border-2 transition-all duration-200 ${selectedIndex === i
                                            ? 'border-stone-800 opacity-100'
                                            : 'border-transparent opacity-50 hover:opacity-75'
                                            }`}
                                    >
                                        <Image
                                            src={src}
                                            alt={`Thumbnail ${i + 1}`}
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

                    {/* Category tag */}
                    <div>
                        <span className="inline-block text-[10px] tracking-[0.2em] uppercase font-semibold text-primary-700 bg-primary-50 border border-primary-200 px-3 py-1 rounded-full">
                            {p.category.title}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-serif text-2xl sm:text-3xl xl:text-4xl text-stone-900 leading-tight tracking-tight">
                        {p.title}
                    </h1>

                    {/* short descriptions */}
                    <span className='text-sm font-medium text-stone-500'>
                        {p.product_short_description}
                    </span>

                    {/* Price row */}
                    <div className="flex items-baseline gap-3">
                        {p.offer_rate != null ? (
                            <>
                                <span className="text-2xl font-semibold text-stone-900">
                                    ₹{p.offer_rate.toLocaleString('en-IN')}
                                </span>
                                {p.mrp != null && (
                                    <span className="text-base text-stone-400 line-through">
                                        ₹{p.mrp.toLocaleString('en-IN')}
                                    </span>
                                )}
                                {p.mrp != null && p.offer_rate != null && (
                                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                                        {Math.round(((p.mrp - p.offer_rate) / p.mrp) * 100)}% off
                                    </span>
                                )}
                            </>
                        ) : (
                            <span className="text-sm text-stone-400 italic">Price on request — contact us for quote</span>
                        )}
                    </div>

                    {/* Divider */}
                    <div className="h-px bg-stone-100" />

                    {/* Attributes */}
                    {p.attributes.length > 0 && (
                        <div className="space-y-4">
                            {p.attributes.map((attr) => (
                                <div key={attr.id} className='flex items-center gap-2'>
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
                                {Object.entries(other_related_products).map(([groupTitle, items]) => (
                                    <div key={groupTitle}>
                                        <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-stone-400 mb-2">
                                            {groupTitle}
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {(items as OtherRelatedItem[]).map((item) => {
                                                const isCurrent = item.product_slug === slug[slug.length - 1]
                                                return (
                                                    <Link
                                                        key={item.product_slug}
                                                        href={`/products/${item.product_slug}/${item.attribute_value_slug}`}
                                                        className={`px-3 py-1.5 text-[13px] rounded-full border transition-all duration-200 ${isCurrent
                                                            ? 'bg-stone-900 text-stone-50 border-stone-900'
                                                            : 'bg-white text-stone-600 border-stone-200 hover:border-stone-500 hover:text-stone-900'
                                                            }`}
                                                    >
                                                        {item.group_name}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}

                    {/* Divider */}
                    <div className="h-px bg-stone-100" />

                    {/* SKU / Stock */}
                    <div className="flex flex-wrap gap-x-8 gap-y-2 text-[12px] text-stone-400">
                        {p.sku && (
                            <span>
                                SKU: <span className="text-stone-600 font-medium">{p.sku}</span>
                            </span>
                        )}
                        {p.stock_quantity != null && (
                            <span>
                                Stock:{' '}
                                <span className={p.stock_quantity > 0 ? 'text-emerald-600 font-medium' : 'text-red-500 font-medium'}>
                                    {p.stock_quantity > 0 ? `${p.stock_quantity} available` : 'Out of stock'}
                                </span>
                            </span>
                        )}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <a
                            href={`https://wa.me/?text=Hi, I'm interested in ${encodeURIComponent(p.title)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 text-stone-50 text-sm font-medium hover:bg-stone-800 active:scale-[0.98] transition-all"
                        >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.113.549 4.1 1.508 5.83L.057 23.285a.75.75 0 0 0 .921.921l5.455-1.451A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.896 0-3.68-.497-5.228-1.368l-.374-.215-3.882 1.033 1.033-3.775-.23-.386A9.955 9.955 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                            </svg>
                            Enquire on WhatsApp
                        </a>
                        <button className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-stone-200 text-stone-700 text-sm font-medium hover:border-stone-400 active:scale-[0.98] transition-all">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 1 1 0-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 1 0 5.367-2.684 3 3 0 0 0-5.367 2.684zm0 9.316a3 3 0 1 0 5.368 2.684 3 3 0 0 0-5.368-2.684z" />
                            </svg>
                            Share
                        </button>
                    </div>
                </div>
            </div>

            {/* ── Description / Specification tabs ───────────────────────── */}
            {(p.product_description || p.product_specification || p.additional_features) && (
                <ProductTabs
                    description={p.product_description}
                    specification={p.product_specification}
                    additionalFeatures={p.additional_features}
                />
            )}

            {/* ── Related products ────────────────────────────────────────── */}
            {related_products.length > 0 && (
                <RelatedProductsSection products={related_products} />
            )}
        </div>
    )
}

const COLLAPSED_HEIGHT = 420
const TAB_META = [
    { label: 'Description', icon: FileText },
    { label: 'Specification', icon: Settings2 },
    { label: 'Features', icon: Sparkles },
]

type ProductTabsProps = {
    description: string | null
    specification: string | null
    additionalFeatures: {
        id: number;
        title: string,
        value: string;
    }[] | null
}

function ProductTabs({ description, specification, additionalFeatures }: ProductTabsProps) {
    const raw_tabs = [
        { label: 'Description', content: description },
        { label: 'Specification', content: specification },
        { label: 'Features', content: additionalFeatures },
    ].filter((t) => t.content && (!Array.isArray(t.content) || t.content.length > 0))  // ← fix empty array

    const tabs = raw_tabs.map((t) => ({
        ...t,
        icon: TAB_META.find((m) => m.label === t.label)?.icon ?? FileText,
    }))

    const [active, setActive] = useState(0)
    const [expanded, setExpanded] = useState(false)
    const [needsClamp, setNeedsClamp] = useState(false)
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = contentRef.current
        if (!el) return
        setNeedsClamp(el.scrollHeight > COLLAPSED_HEIGHT)
        setExpanded(false)
    }, [active])

    if (tabs.length === 0) return null

    return (
        <div className="mt-16">
            {/* ── Tab bar ── */}
            <div className="flex gap-1 border-b border-stone-200">
                {tabs.map((tab, i) => {
                    const Icon = tab.icon
                    const isActive = active === i
                    return (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            className={`
                                    relative flex items-center gap-2 px-5 py-3.5 text-sm font-medium
                                    whitespace-nowrap transition-all duration-200 -mb-px border-b-2
                                    ${isActive
                                    ? 'border-primary-500 text-stone-900'
                                    : 'border-transparent text-stone-400 hover:text-stone-600 hover:border-stone-300'
                                }
                                `}
                        >
                            <Icon
                                className={`w-3.5 h-3.5 transition-colors duration-200 ${isActive ? 'text-primary-500' : 'text-stone-300'}`}
                                strokeWidth={isActive ? 2 : 1.5}
                            />
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            {/* ── Content panel ── */}
            <div className="mt-8">
                <div className="relative bg-stone-50/60 border border-stone-100 rounded-2xl px-6 py-7 md:px-10 md:py-9 overflow-hidden">
                    {/* Decorative blobs */}
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-bl-full bg-primary-100/30 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-full bg-primary-50/60 pointer-events-none" />
                    <div className="absolute left-0 top-8 bottom-8 w-0.75 rounded-full bg-linear-to-b from-primary-400/80 via-primary-300/50 to-transparent" />

                    {/* Collapsible wrapper */}
                    <div
                        className="relative z-10 transition-[max-height] duration-500 ease-in-out overflow-hidden"
                        style={{ maxHeight: expanded || !needsClamp ? '9999px' : `${COLLAPSED_HEIGHT}px` }}
                    >
                        <div ref={contentRef} >
                            {Array.isArray(tabs[active].content) ? (
                                <dl className="divide-y divide-stone-100">
                                    {(tabs[active].content as { id: number; title: string; value: string }[]).map((feat) => (
                                        <div key={feat.id} className="flex gap-4 py-3 first:pt-0 last:pb-0">
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
                                    dangerouslySetInnerHTML={{ __html: tabs[active].content as string }}
                                />
                            )}
                        </div>
                    </div>

                    {/* Fade + See More */}
                    {needsClamp && !expanded && (
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-stone-50 via-stone-50/80 to-transparent pointer-events-none rounded-b-2xl z-20" />
                    )}
                </div>

                {/* See more / See less button — outside the card so it sits below */}
                {needsClamp && (
                    <div className="flex justify-center mt-4">
                        <button
                            onClick={() => setExpanded((v) => !v)}
                            className="
                                    group inline-flex items-center gap-2
                                    text-sm font-semibold text-primary-600
                                    bg-primary-50 hover:bg-primary-100
                                    border border-primary-200 hover:border-primary-300
                                    px-5 py-2.5 rounded-full
                                    transition-all duration-200
                                    shadow-sm hover:shadow
                                "
                        >
                            {expanded ? 'See less' : 'See more'}
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
                                strokeWidth={2.5}
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

function RelatedProductsSection({ products }: { products: RelatedProduct[] }) {
    const [ref, api] = useEmblaCarousel({ dragFree: true, align: 'start' })

    return (
        <div className="mt-16">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="md:text-3xl text-2xl text-stone-900 font-semibold">
                    You may also like
                </h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => api?.scrollPrev()}
                        className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
                    >
                        <svg className="w-3.5 h-3.5 text-stone-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => api?.scrollNext()}
                        className="w-8 h-8 rounded-full border border-stone-200 bg-white flex items-center justify-center hover:bg-stone-50 transition-colors"
                    >
                        <svg className="w-3.5 h-3.5 text-stone-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="overflow-hidden" ref={ref}>
                <div className="flex gap-4">
                    {products.map((product) => (
                        <Link
                            key={product.id}
                            href={`/products/${product.slug}/${product.attribute_value_slug}`}
                            className="group flex-[0_0_200px] sm:flex-[0_0_220px]"
                        >
                            <div className="rounded-xl overflow-hidden bg-stone-50 border border-stone-100 group-hover:border-stone-300 group-hover:shadow-lg transition-all duration-300">
                                {/* Image */}
                                <div className="relative aspect-square overflow-hidden">
                                    <Image
                                        src={product.image ?? "/images/no-image.svg"}
                                        alt={product.title}
                                        fill
                                        sizes="220px"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                {/* Info */}
                                <div className="p-3">
                                    <p className="text-[10px] text-stone-400 tracking-wide uppercase mb-1">
                                        {product.category_title}
                                    </p>
                                    <p className="text-[13px] text-stone-700 font-medium leading-snug line-clamp-2 group-hover:text-primary-800 transition-colors">
                                        {product.title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}