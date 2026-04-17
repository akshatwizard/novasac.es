'use client';
import { Search } from 'lucide-react';
import SearchPlaceholder from '../ui/search_placeholder'
import { useState } from 'react';

export default function SearchBar() {
    const [search, setSearch] = useState<string>("")
    return (
        <div className="hidden max-w-xl w-full md:flex items-center h-10">
            <div className="relative flex-1 bg-white rounded-sm h-full border-r-transparent rounded-tr-none rounded-br-none">
                <input
                    id='search'
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full bg-transparent outline-none border-none h-full px-3 text-sm text-zinc-600"
                />
                <label htmlFor="search" className='sr-only'>Search</label>
                <SearchPlaceholder hidden={search.length > 0} />
            </div>

            <button name='Search Now' type='button' className="shrink-0 bg-primary-100 flex items-center justify-center w-12 h-full transition-colors duration-300 ease-in-out hover:bg-primary-200 cursor-pointer rounded-tr-sm rounded-br-sm">
                <Search className="text-primary-500" size={24} strokeWidth={1.5} />
            </button>

        </div>
    )
}
