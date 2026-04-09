'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { CatalogProduct, ProductFilter } from '../types/catalog.types'
import { catalogKeys, fetchCatalog } from '../hooks/catalog'
import FilterPanel from './filter_panel'
import ProductListCard from './product_list_card'

const SORT_OPTIONS = [
    { label: 'Relevance', value: '' },
    { label: 'Newest First', value: 'new-arrivals' },
    { label: 'Price: Low to High', value: 'price-low-to-high' },
    { label: 'Price: High to Low', value: 'price-high-to-low' },
    { label: 'A-Z Order', value: 'a-to-z-order' },
] as const

type SortValue = (typeof SORT_OPTIONS)[number]['value']

interface CatalogClientProps {
    slug: string[]
    initialFilters: ProductFilter[]
    initialProducts: CatalogProduct[]
    initialTotalProducts: number
    attributeValue: string
}

export default function CatalogClient({ slug, initialFilters, initialProducts, initialTotalProducts, attributeValue }: CatalogClientProps) {
    
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const parseFiltersFromUrl = useCallback((): Record<string, string[]> => {
        const result: Record<string, string[]> = {}
        searchParams.forEach((value, key) => {
            if (key === 'page' || key === 'filter' || key === 'sort') return
            result[key] = value.split(',').filter(Boolean)
        })
        return result
    }, [searchParams])

    const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>(parseFiltersFromUrl)
    const [sort, setSort] = useState<SortValue>(
        (searchParams.get('sort') as SortValue) ?? ''
    )
    const [sortOpen, setSortOpen] = useState(false)
    const sortRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (e: MouseEvent) => {
            if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
                setSortOpen(false)
            }
        }
        document.addEventListener('mousedown', handler)
        return () => document.removeEventListener('mousedown', handler)
    }, [])

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
        queryKey: catalogKeys.list(slug, activeFilters, sort),
        queryFn: ({ pageParam = 1 }) =>
            fetchCatalog({ slug, page: pageParam as number, filters: activeFilters, sort }),
        getNextPageParam: (lastPage) => {
            const { pagination } = lastPage.data
            return pagination.has_next_page ? pagination.current_page + 1 : undefined
        },
        initialPageParam: 1,
    })

    const products = data?.pages.flatMap((p) => p.data.products) ?? initialProducts
    const filters = data?.pages[0]?.data.product_filters ?? initialFilters
    const total = data?.pages[0]?.data.pagination.total_products ?? initialTotalProducts

    const sentinelRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = sentinelRef.current
        if (!el) return
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) fetchNextPage()
            },
            { rootMargin: '200px' }
        )
        observer.observe(el)
        return () => observer.disconnect()
    }, [hasNextPage, isFetchingNextPage, fetchNextPage])

    const handleFilterChange = (filterSlug: string, valueSlug: string) => {
        setActiveFilters((prev) => {
            const current = prev[filterSlug] ?? []
            const alreadySelected = current.includes(valueSlug)
            const next = alreadySelected
                ? current.filter((v) => v !== valueSlug)
                : [...current, valueSlug]

            if (next.length === 0) {
                const { [filterSlug]: _, ...rest } = prev
                return rest
            }
            return { ...prev, [filterSlug]: next }
        })
    }

    const handleClearAll = () => setActiveFilters({})

    useEffect(() => {
        const params = new URLSearchParams()
        const hasFilters = Object.keys(activeFilters).length > 0

        if (hasFilters) params.set('filter', '1')

        Object.entries(activeFilters).forEach(([key, values]) => {
            if (values.length > 0) params.set(key, values.join(','))
        })

        if (sort) params.set('sort', sort)

        const query = params.toString().replace(/%2C/g, ',')
        router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false })
    }, [activeFilters, sort, pathname, router])

    const activeSortLabel = SORT_OPTIONS.find((o) => o.value === sort)?.label ?? 'Relevance'

    return (
        <div className="flex flex-col lg:flex-row gap-10 items-start">

            <FilterPanel
                filters={filters}
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
                onClearAll={handleClearAll}
            />

            <div className="flex-1 min-w-0">

                <div className="flex items-center justify-between mb-6 gap-4">
                    <p className="text-xs text-stone-400 tracking-wide">
                        Showing{' '}
                        <span className="text-stone-700 font-medium">{products.length}</span>
                        {' '}of{' '}
                        <span className="text-stone-700 font-medium">{total}</span> products
                    </p>

                    <div className="relative shrink-0" ref={sortRef}>
                        <button
                            onClick={() => setSortOpen((v) => !v)}
                            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-stone-200 bg-white text-[13px] text-stone-700 hover:border-stone-400 transition-colors"
                        >
                            <svg className="w-3.5 h-3.5 text-stone-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M6 12h12M10 17h4" />
                            </svg>
                            <span className="hidden sm:inline text-stone-500 text-[11px] tracking-wide uppercase font-medium">
                                Sort:
                            </span>
                            {activeSortLabel}
                            <svg
                                className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${sortOpen ? 'rotate-180' : ''}`}
                                fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {sortOpen && (
                            <div className="absolute right-0 top-full mt-2 w-52 rounded-xl border border-stone-200 bg-white shadow-lg shadow-stone-200/60 z-30 overflow-hidden">
                                {SORT_OPTIONS.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => {
                                            setSort(option.value)
                                            setSortOpen(false)
                                        }}
                                        className={`w-full flex items-center justify-between px-4 py-2.5 text-[13px] text-left transition-colors ${sort === option.value
                                            ? 'bg-stone-50 text-stone-900 font-medium'
                                            : 'text-stone-600 hover:bg-stone-50'
                                            }`}
                                    >
                                        {option.label}
                                        {sort === option.value && (
                                            <svg className="w-3.5 h-3.5 text-amber-700" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {isLoading ? (
                    <ProductGridSkeleton />
                ) : products.length === 0 ? (
                    <EmptyState onClear={handleClearAll} />
                ) : (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        {products.map((product, idx) => (
                            <ProductListCard key={idx} product={product} attributeValue={attributeValue} />
                        ))}
                    </div>
                )}

                <div ref={sentinelRef} className="h-4 mt-8" />

                {isFetchingNextPage && (
                    <div className="flex justify-center py-8">
                        <LoadingSpinner />
                    </div>
                )}

                {!hasNextPage && products.length > 0 && (
                    <p className="text-center text-xs text-stone-300 tracking-widest uppercase py-10">
                        — End of results —
                    </p>
                )}
            </div>
        </div>
    )
}

function ProductGridSkeleton() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
            {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-stone-100 animate-pulse">
                    <div className="aspect-square bg-stone-100" />
                    <div className="p-4 space-y-2">
                        <div className="h-3 bg-stone-100 rounded w-3/4" />
                        <div className="h-3 bg-stone-100 rounded w-1/2" />
                        <div className="h-4 bg-stone-100 rounded w-1/4 mt-4" />
                    </div>
                </div>
            ))}
        </div>
    )
}

function EmptyState({ onClear }: { onClear: () => void }) {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="text-5xl mb-4 opacity-20">🏆</div>
            <p className="text-stone-500 text-sm mb-4">No products match your current filters.</p>
            <button
                onClick={onClear}
                className="text-xs underline underline-offset-2 text-amber-700 hover:text-amber-900 transition-colors"
            >
                Clear all filters
            </button>
        </div>
    )
}

function LoadingSpinner() {
    return (
        <div className="w-8 h-8 border-3 border-stone-200 border-t-stone-600 rounded-full animate-spin" />
    )
}
