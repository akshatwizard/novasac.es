"use client"
import { motion } from 'motion/react'
import { ProductSuggestionItem, SearchSuggestion } from "@/types/search.type"
import { Package, Search, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'


export default function MobileSearchDropdown({ suggestions, query, onSelect, isLoading, }: {
    suggestions: SearchSuggestion[]
    query: string
    onSelect: (title: string) => void
    isLoading: boolean
}) {
    const keywordSuggestions = suggestions.filter((s) => s.type === 'suggestion')
    const productSuggestions = suggestions.filter(
        (s) => s.type === 'product'
    ) as ProductSuggestionItem[]

    return (
        <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 bg-white border border-slate-200 rounded-xl shadow-lg shadow-slate-200/50 overflow-hidden"
        >
            {isLoading ? (
                <div className="flex items-center justify-center py-8 gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-zinc-300 border-t-zinc-700 animate-spin" />
                    <span className="text-xs text-slate-400">Searching…</span>
                </div>
            ) : suggestions.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-400">
                    No results for &ldquo;
                    <span className="text-slate-600 font-medium">{query}</span>&rdquo;
                </div>
            ) : (
                <div className="max-h-[55vh] overflow-y-auto divide-y divide-slate-100" data-lenis-prevent>
                    {/* Keyword suggestions */}
                    {keywordSuggestions.length > 0 && (
                        <div className="px-3 py-2">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold px-2 py-1.5">
                                Suggestions
                            </p>
                            {keywordSuggestions.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => onSelect(item.title)}
                                    className="w-full flex items-center gap-3 px-2 py-3 rounded-lg
                             hover:bg-stone-50 active:bg-stone-100 transition-colors text-left group"
                                >
                                    <span className="w-8 h-8 rounded-md bg-stone-100 flex items-center justify-center shrink-0
                                   group-hover:bg-amber-100 transition-colors">
                                        <TrendingUp className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-500 transition-colors" />
                                    </span>
                                    <span className="text-sm text-stone-700 leading-none">{item.title}</span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Product suggestions */}
                    {productSuggestions.length > 0 && (
                        <div className="px-3 py-2">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold px-2 py-1.5">
                                Products
                            </p>
                            {productSuggestions.map((item, i) => (
                                <Link
                                    key={i}
                                    href={`/product/${item.slug}/${item.attributes_value_slug}`}
                                    className="flex items-center gap-3 px-2 py-2.5 rounded-lg
                             hover:bg-stone-50 active:bg-stone-100 transition-colors group"
                                    onClick={() => onSelect(item.title)}
                                >
                                    <div className="w-11 h-11 rounded-lg border border-slate-100 overflow-hidden bg-stone-50 shrink-0">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={44}
                                                height={44}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Package className="w-4 h-4 text-stone-300" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-stone-800 leading-tight truncate group-hover:text-amber-700 transition-colors">
                                            {item.title}
                                        </p>
                                        <p className="text-[11px] text-stone-400 mt-0.5">{item.category}</p>
                                    </div>
                                    <Search className="w-3.5 h-3.5 text-stone-300 group-hover:text-amber-400 shrink-0 transition-colors" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* See all results footer */}
            {suggestions.length > 0 && (
                <div className="border-t border-slate-100 px-4 py-3">
                    <button
                        onClick={() => onSelect(query)}
                        className="w-full flex items-center justify-center gap-2 text-xs text-amber-600
                       hover:text-amber-700 font-semibold py-1 transition-colors"
                    >
                        <Search className="w-3.5 h-3.5" />
                        See all results for &ldquo;{query}&rdquo;
                    </button>
                </div>
            )}
        </motion.div>
    )
}

export function SearchDropdown({ suggestions, query, onSelect, isLoading }: {
    suggestions: SearchSuggestion[]; query: string, onSelect: (title: string) => void, isLoading: boolean
}) {
    const keywordSuggestions = suggestions.filter(s => s.type === 'suggestion')
    const productSuggestions = suggestions.filter(s => s.type === 'product') as ProductSuggestionItem[]

    return (
        <motion.div
            initial={{ opacity: 0, y: -6, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.99 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-[calc(100%+8px)] left-0 right-0 bg-white border border-slate-200 rounded-xl shadow-xl shadow-slate-200/60 z-50 overflow-hidden"
        >
            {isLoading ? (
                <div className="flex items-center justify-center py-8 gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-zinc-300 border-t-zinc-700 animate-spin" />
                    <span className="text-xs text-slate-400">Searching…</span>
                </div>
            ) : suggestions.length === 0 ? (
                <div className="py-8 text-center text-sm text-slate-400">
                    No results for &ldquo;<span className="text-slate-600 font-medium">{query}</span>&rdquo;
                </div>
            ) : (
                <div className="max-h-105 overflow-y-auto divide-y divide-slate-100" data-lenis-prevent>

                    {/* Keyword suggestions */}
                    {keywordSuggestions.length > 0 && (
                        <div className="px-3 py-2">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold px-2 py-1.5">
                                Suggestions
                            </p>
                            {keywordSuggestions.map((item, i) => (
                                <button
                                    key={i}
                                    onClick={() => onSelect(item.title)}
                                    className="w-full flex items-center gap-3 px-2 py-2.5 rounded-lg 
                                        hover:bg-stone-50 transition-colors duration-150 text-left group"
                                >
                                    <span className="w-7 h-7 rounded-md bg-stone-100 flex items-center justify-center shrink-0
                                        group-hover:bg-amber-100 transition-colors duration-150">
                                        <TrendingUp className="w-3.5 h-3.5 text-stone-400 group-hover:text-amber-500 transition-colors" />
                                    </span>
                                    <span className="text-sm text-stone-700 leading-none">
                                        {item.title}
                                    </span>
                                </button>
                            ))}
                        </div>
                    )}

                    {/* Product suggestions */}
                    {productSuggestions.length > 0 && (
                        <div className="px-3 py-2">
                            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold px-2 py-1.5">
                                Products
                            </p>
                            {productSuggestions.map((item, i) => (
                                <Link
                                    key={i}
                                    href={`/products/${item.slug}/${item.attributes_value_slug}`}
                                    className="flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-stone-50 transition-colors duration-150 group"
                                >
                                    {/* Product image */}
                                    <div className="w-10 h-10 rounded-lg border border-slate-100 overflow-hidden bg-stone-50 shrink-0">
                                        {item.image ? (
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                width={40}
                                                height={40}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <Package className="w-4 h-4 text-stone-300" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Product info */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm text-stone-800 leading-tight truncate group-hover:text-amber-700 transition-colors">
                                            {item.title}
                                        </p>
                                        <p className="text-[11px] text-stone-400 mt-0.5">{item.category}</p>
                                    </div>

                                    {/* Arrow hint on hover */}
                                    <Search className="w-3.5 h-3.5 text-stone-300 group-hover:text-amber-400 shrink-0 transition-colors" />
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            )}

            {/* Footer: view all results */}
            {suggestions.length > 0 && (
                <div className="border-t border-slate-100 px-4 py-3">
                    <button
                        onClick={() => onSelect(query)}
                        className="w-full flex items-center justify-center gap-2 text-xs text-amber-600 
                            hover:text-amber-700 font-semibold py-1 transition-colors"
                    >
                        <Search className="w-3.5 h-3.5" />
                        See all results for &ldquo;{query}&rdquo;
                    </button>
                </div>
            )}
        </motion.div>
    )
}