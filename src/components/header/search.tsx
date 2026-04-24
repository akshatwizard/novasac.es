'use client';
import { Search } from 'lucide-react';
import SearchPlaceholder from '../ui/search_placeholder';
import { AnimatePresence } from 'motion/react';
import { RefObject } from 'react';
import { SearchDropdown } from '../search_dropdown';

type Props = {
    ref: RefObject<HTMLDivElement | null>
    query: string
    setQuery: (val: string) => void
    isFocused: boolean
    onFocus: () => void
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
    onSubmit: () => void
    showDropdown: boolean
    suggestions: any[]
    debouncedQuery: string
    onSelect: (title: string) => void
    isLoading: boolean
}

export default function SearchBar({
    ref,
    query,
    setQuery,
    isFocused,
    onFocus,
    onKeyDown,
    onSubmit,
    showDropdown,
    suggestions,
    debouncedQuery,
    onSelect,
    isLoading,
}: Props) {
    return (
        <div ref={ref} className="hidden max-w-xl w-full md:flex items-center h-10 relative">
            <div className="relative flex-1 bg-white rounded-sm h-full border-r-transparent rounded-tr-none rounded-br-none">
                <input
                    id='search'
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={onFocus}
                    onKeyDown={onKeyDown}
                    className="w-full bg-transparent outline-none border-none h-full px-3 text-sm text-zinc-600"
                />
                <label htmlFor="search" className='sr-only'>Search</label>
                <SearchPlaceholder hidden={query.length > 0} />
            </div>

            <button
                name='Search Now'
                type='button'
                onClick={onSubmit}
                className="shrink-0 bg-primary-100 flex items-center justify-center w-12 h-full transition-colors duration-300 ease-in-out hover:bg-primary-200 cursor-pointer rounded-tr-sm rounded-br-sm"
            >
                <Search className="text-primary-500" size={24} strokeWidth={1.5} />
            </button>

            {/* Dropdown */}
            <AnimatePresence>
                {showDropdown && (
                    <SearchDropdown
                        suggestions={suggestions}
                        query={debouncedQuery}
                        onSelect={onSelect}
                        isLoading={isLoading}
                    />
                )}
            </AnimatePresence>
        </div>
    )
}