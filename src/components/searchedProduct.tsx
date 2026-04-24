'use client';

import { useInfiniteQuery } from "@tanstack/react-query";
import { SearchProductAPIResponse, SPProducts } from "../types/search_product.type";
import axios from "axios";
import { useEffect, useRef } from "react";
import { Search } from "lucide-react";
import ProductCard from "./product_card";

interface Props {
    query: string;
    initialProducts: SPProducts[];
    initialTotalProducts: number;
}

export default function SearchedProducts({ query, initialProducts, initialTotalProducts }: Props) {
    const sentinelRef = useRef<HTMLDivElement>(null)

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
        queryKey: ['search', query],
        queryFn: async ({ pageParam = 1 }) => {
            const res = await axios.get<SearchProductAPIResponse>("https://gangapapers.in/novasac/api/search", {
                params: { query, page: pageParam }
            })
            return res.data
        },
        getNextPageParam: (lastPage) =>
            lastPage.pagination.has_next_page ? lastPage.pagination.current_page + 1 : undefined,
        initialPageParam: 1,
        initialData: initialProducts.length > 0 ? {
            pages: [{
                products: initialProducts,
                pagination: {
                    current_page: 1,
                    total_pages: 1,
                    per_page: initialProducts.length,
                    total_products: initialTotalProducts,
                    next_page_url: null,
                    previous_page_url: null,
                    has_next_page: false,
                    has_previous_page: false,
                },
                categories: [],
                query,
                meta: { title: '', description: '', keywords: '' },
            }],
            pageParams: [1],
        } : undefined,
    })

    const products = data?.pages.flatMap((p) => p.products) ?? initialProducts
    const total = data?.pages[0]?.pagination.total_products ?? initialTotalProducts

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

    return (
        <div className="w-full">
            {/* Result count bar */}
            {!isLoading && products.length > 0 && (
                <div className="flex items-center justify-between mb-6 gap-4">
                    <p className="text-xs text-stone-400 tracking-wide">
                        Showing{' '}
                        <span className="text-stone-700 font-medium">{products.length}</span>
                        {' '}of{' '}
                        <span className="text-stone-700 font-medium">{total}</span>{' '}products
                    </p>
                    <div className="h-px flex-1 bg-stone-100 max-w-xs" />
                </div>
            )}

            {/* Grid / States */}
            {isLoading ? (
                <ProductCardSkeleton />
            ) : products.length === 0 ? (
                <EmptyState query={query} />
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
                    {products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
                </div>
            )}

            {/* Infinite scroll sentinel */}
            <div ref={sentinelRef} className="h-4 mt-8" />

            {isFetchingNextPage && (
                <div className="flex justify-center py-8">
                    <LoadingSpinner />
                </div>
            )}

            {!hasNextPage && products.length > 0 && (
                <p className="text-center text-[11px] text-stone-300 tracking-[0.2em] uppercase py-10">
                    — End of results —
                </p>
            )}
        </div>
    )
}


function ProductCardSkeleton() {
    return (
        <div className="w-full rounded-xl border border-gray-100 bg-white overflow-hidden animate-pulse">
            <div className="h-50 bg-zinc-200" />
            <div className="p-3 space-y-2">
                <div className="h-3 w-1/2 bg-zinc-200 rounded-full" />
                <div className="h-4 w-3/4 bg-zinc-200 rounded" />
                <div className="h-5 w-1/3 bg-zinc-200 rounded" />
            </div>
        </div>
    );
}

function EmptyState({ query }: { query: string }) {
    return (
        <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center mb-5">
                <Search className="w-7 h-7 text-stone-300" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl text-stone-700 mb-2">No results found</h3>
            <p className="text-stone-400 text-sm max-w-xs">
                We couldn&apos;t find anything for &ldquo;<span className="text-stone-600 font-medium">{query}</span>&rdquo;.
                Try a different keyword.
            </p>
        </div>
    )
}

function LoadingSpinner() {
    return (
        <div className="w-7 h-7 border-2 border-stone-200 border-t-stone-600 rounded-full animate-spin" />
    )
}