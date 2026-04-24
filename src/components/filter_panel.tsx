'use client'
import { useState } from 'react'
import { ProductFilter } from '../types/catalog.types'

interface FilterPanelProps {
    filters: ProductFilter[]
    activeFilters: Record<string, string[]>
    onFilterChange: (filterSlug: string, valueSlug: string) => void
    onClearAll: () => void
}

export default function FilterPanel({ filters, activeFilters, onFilterChange, onClearAll }: FilterPanelProps) {
    const totalActive = Object.values(activeFilters).reduce((sum, arr) => sum + arr.length, 0)
    const [collapsed, setCollapsed] = useState<Record<string, boolean>>(() =>
        Object.fromEntries(filters.map((f) => [f.slug, true]))
    )
    const [drawerOpen, setDrawerOpen] = useState(false)

    const toggleCollapse = (slug: string) =>
        setCollapsed((prev) => ({ ...prev, [slug]: !prev[slug] }))

    const filterContent = (
        <div className="rounded-2xl bg-stone-100 border border-stone-200 overflow-hidden shadow-sm">
            <div className="flex items-center justify-between px-5 py-4 bg-stone-200/70 border-b border-stone-300/50">
                <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 9h10M11 14h2" />
                    </svg>
                    <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-stone-600">
                        Filters
                    </h2>
                    {totalActive > 0 && (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-stone-800 text-stone-50 text-[10px] font-bold">
                            {totalActive}
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-3">
                    {totalActive > 0 && (
                        <button
                            onClick={onClearAll}
                            className="text-[11px] text-amber-700 hover:text-amber-900 font-medium underline underline-offset-2 transition-colors"
                        >
                            Clear all
                        </button>
                    )}
                    <button
                        onClick={() => setDrawerOpen(false)}
                        className="lg:hidden p-1 rounded-lg hover:bg-stone-200 transition-colors"
                    >
                        <svg className="w-4 h-4 text-stone-500" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            {totalActive > 0 && (
                <div className="px-4 py-3 flex flex-wrap gap-1.5 border-b border-stone-200 bg-amber-50/80">
                    {Object.entries(activeFilters).flatMap(([filterSlug, valueSlugs]) =>
                        valueSlugs.map((valueSlug) => {
                            const filter = filters.find((f) => f.slug === filterSlug)
                            const label = filter?.values.find((v) => v.slug === valueSlug)?.name ?? valueSlug
                            return (
                                <button
                                    key={`${filterSlug}-${valueSlug}`}
                                    onClick={() => onFilterChange(filterSlug, valueSlug)}
                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-800 text-stone-50 text-[11px] font-medium hover:bg-stone-700 transition-colors"
                                >
                                    {label}
                                    <svg className="w-2.5 h-2.5 ml-0.5" viewBox="0 0 10 10" fill="currentColor">
                                        <path d="M1.707 1.707a1 1 0 0 1 1.414 0L5 3.586l1.879-1.879a1 1 0 1 1 1.414 1.414L6.414 5l1.879 1.879a1 1 0 0 1-1.414 1.414L5 6.414 3.121 8.293a1 1 0 0 1-1.414-1.414L3.586 5 1.707 3.121a1 1 0 0 1 0-1.414Z" />
                                    </svg>
                                </button>
                            )
                        })
                    )}
                </div>
            )}

            <div className="divide-y divide-stone-200 max-h-[calc(100vh-12rem)] overflow-y-auto" data-lenis-prevent>
                {filters.map((filter) => {
                    const isCollapsed = collapsed[filter.slug]
                    const groupActive = activeFilters[filter.slug] ?? []

                    return (
                        <div key={filter.id}>
                            <button
                                onClick={() => toggleCollapse(filter.slug)}
                                className="w-full flex items-center justify-between px-5 py-3.5 text-left hover:bg-stone-200/60 transition-colors"
                            >
                                <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-stone-500">
                                    {filter.title}
                                    {groupActive.length > 0 && (
                                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-700 text-white text-[9px] font-bold">
                                            {groupActive.length}
                                        </span>
                                    )}
                                </span>
                                <svg
                                    className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}`}
                                    fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {!isCollapsed && (
                                <div className="px-4 pb-4 space-y-0.5">
                                    {filter.values.map((value) => {
                                        const isChecked = groupActive.includes(value.slug)
                                        return (
                                            <button
                                                key={value.id}
                                                onClick={() => onFilterChange(filter.slug, value.slug)}
                                                className={`w-full flex items-center gap-3 px-2 py-2 rounded-lg transition-colors text-left ${isChecked
                                                    ? 'bg-stone-800/[0.07] text-stone-900'
                                                    : 'hover:bg-stone-200/70 text-stone-600'
                                                    }`}
                                            >
                                                <span
                                                    className={`shrink-0 w-4 h-4 rounded border-[1.5px] transition-all duration-150 flex items-center justify-center ${isChecked
                                                        ? 'bg-stone-800 border-stone-800'
                                                        : 'bg-white border-stone-300'
                                                        }`}
                                                >
                                                    {isChecked && (
                                                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 12 12">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                                                        </svg>
                                                    )}
                                                </span>
                                                <span className="text-[13px] flex-1 leading-tight select-none">
                                                    {value.name}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )

    return (
        <>
            <aside className="hidden lg:block w-72 shrink-0 sticky top-25 self-start">
                {filterContent}
            </aside>

            <div className="lg:hidden">
                <button
                    onClick={() => setDrawerOpen(true)}
                    className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-stone-900 text-stone-50 text-sm font-medium shadow-xl shadow-stone-900/30 active:scale-95 transition-transform"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M7 9h10M11 14h2" />
                    </svg>
                    Filters
                    {totalActive > 0 && (
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-500 text-stone-900 text-[10px] font-bold">
                            {totalActive}
                        </span>
                    )}
                </button>

                {/* Backdrop */}
                {drawerOpen && (
                    <div
                        className="fixed inset-0 z-40 bg-stone-900/40 backdrop-blur-sm"
                        onClick={() => setDrawerOpen(false)}
                    />
                )}

                {/* Bottom drawer */}
                <div
                    className={`fixed inset-x-0 bottom-0 z-50 transition-transform duration-300 ease-out ${drawerOpen ? 'translate-y-0' : 'translate-y-full'
                        }`}
                >
                    {/* Drag handle */}
                    <div className="flex justify-center pt-3 pb-1 bg-stone-100 rounded-t-3xl">
                        <div className="w-10 h-1 rounded-full bg-stone-300" />
                    </div>
                    <div className="bg-stone-100 max-h-[80vh] overflow-y-auto pb-8" data-lenis-prevent>
                        {/* Reuse filter content without the outer rounded card */}
                        <div className="px-4 pb-2">
                            {/* Header row */}
                            <div className="flex items-center justify-between py-3">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-xs font-semibold tracking-[0.18em] uppercase text-stone-600">Filters</h2>
                                    {totalActive > 0 && (
                                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-stone-800 text-stone-50 text-[10px] font-bold">
                                            {totalActive}
                                        </span>
                                    )}
                                </div>
                                <div className="flex items-center gap-3">
                                    {totalActive > 0 && (
                                        <button onClick={onClearAll} className="text-[11px] text-amber-700 font-medium underline underline-offset-2">
                                            Clear all
                                        </button>
                                    )}
                                    <button onClick={() => setDrawerOpen(false)} className="p-1.5 rounded-lg bg-stone-200 hover:bg-stone-300 transition-colors">
                                        <svg className="w-4 h-4 text-stone-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Active chips */}
                            {totalActive > 0 && (
                                <div className="flex flex-wrap gap-1.5 mb-3 pb-3 border-b border-stone-200">
                                    {Object.entries(activeFilters).flatMap(([filterSlug, valueSlugs]) =>
                                        valueSlugs.map((valueSlug) => {
                                            const filter = filters.find((f) => f.slug === filterSlug)
                                            const label = filter?.values.find((v) => v.slug === valueSlug)?.name ?? valueSlug
                                            return (
                                                <button
                                                    key={`${filterSlug}-${valueSlug}`}
                                                    onClick={() => onFilterChange(filterSlug, valueSlug)}
                                                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-stone-800 text-stone-50 text-[11px] font-medium"
                                                >
                                                    {label}
                                                    <svg className="w-2.5 h-2.5" viewBox="0 0 10 10" fill="currentColor">
                                                        <path d="M1.707 1.707a1 1 0 0 1 1.414 0L5 3.586l1.879-1.879a1 1 0 1 1 1.414 1.414L6.414 5l1.879 1.879a1 1 0 0 1-1.414 1.414L5 6.414 3.121 8.293a1 1 0 0 1-1.414-1.414L3.586 5 1.707 3.121a1 1 0 0 1 0-1.414Z" />
                                                    </svg>
                                                </button>
                                            )
                                        })
                                    )}
                                </div>
                            )}

                            {/* Groups */}
                            <div className="divide-y divide-stone-200">
                                {filters.map((filter) => {
                                    const isCollapsed = collapsed[filter.slug]
                                    const groupActive = activeFilters[filter.slug] ?? []
                                    return (
                                        <div key={filter.id}>
                                            <button
                                                onClick={() => toggleCollapse(filter.slug)}
                                                className="w-full flex items-center justify-between py-3.5 text-left"
                                            >
                                                <span className="flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-stone-500">
                                                    {filter.title}
                                                    {groupActive.length > 0 && (
                                                        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-amber-700 text-white text-[9px] font-bold">
                                                            {groupActive.length}
                                                        </span>
                                                    )}
                                                </span>
                                                <svg className={`w-3.5 h-3.5 text-stone-400 transition-transform duration-200 ${isCollapsed ? '-rotate-90' : ''}`} fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </button>
                                            {!isCollapsed && (
                                                <div className="pb-3 space-y-0.5">
                                                    {filter.values.map((value) => {
                                                        const isChecked = groupActive.includes(value.slug)
                                                        return (
                                                            <button
                                                                key={value.id}
                                                                onClick={() => onFilterChange(filter.slug, value.slug)}
                                                                className={`w-full flex items-center gap-3 px-2 py-2.5 rounded-lg transition-colors text-left ${isChecked ? 'bg-stone-800/[0.07] text-stone-900' : 'text-stone-600'}`}
                                                            >
                                                                <span className={`shrink-0 w-4 h-4 rounded border-[1.5px] flex items-center justify-center ${isChecked ? 'bg-stone-800 border-stone-800' : 'bg-white border-stone-300'}`}>
                                                                    {isChecked && (
                                                                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 12 12">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                                                                        </svg>
                                                                    )}
                                                                </span>
                                                                <span className="text-[13px] flex-1 leading-tight select-none">{value.name}</span>
                                                            </button>
                                                        )
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        {/* Apply button */}
                        <div className="sticky bottom-0 px-4 pt-3 pb-2 bg-stone-100 border-t border-stone-200">
                            <button
                                onClick={() => setDrawerOpen(false)}
                                className="w-full py-3 rounded-xl bg-stone-900 text-stone-50 text-sm font-medium active:scale-[0.98] transition-transform"
                            >
                                Show results
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}