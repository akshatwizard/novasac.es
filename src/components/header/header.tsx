'use client';
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './search'
import { Heart, Search, ShoppingCart, TextAlignJustify, User } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';
import { useAuth } from '@/context/auth_context';
import LoginModal from '../login_modal';
import { useRouter } from 'next/navigation';
import MobileMenu from './mobile.header';
import MobileStrip from './mobile_strip';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchSuggestions } from '@/hooks/search';

export default function Header() {
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
    const [steps, setSteps] = useState<"login" | "otp">("login");
    const { isAuthenticated, user } = useAuth()
    const router = useRouter()
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const [query, setQuery] = useState<string>("")
    const [isFocused, setIsFocused] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)
    const [openMobileSearch, setOpenMobileSearch] = useState<boolean>(false)

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
                setIsFocused(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const debouncedQuery = useDebounce({ value: query, delay: 400 })
    const { data, isFetching } = useSearchSuggestions(debouncedQuery)

    const showDropdown = isFocused && query.trim().length >= 1
    const suggestions = data?.suggestions ?? []

    const handleSelect = (title: string) => {
        setQuery(title)
        setIsFocused(false)
        router.push(`/search?q=${encodeURIComponent(title)}`)
    }

    const handleSearchSubmit = () => {
        if (query.trim()) handleSelect(query.trim())
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') handleSearchSubmit()
        if (e.key === 'Escape') setIsFocused(false)
    }


    return (
        <>
            <header className='w-full bg-primary-500 lg:px-12 md:px-10 px-4'>
                <nav className="w-full py-1.5 lg:px-1.5 mx-auto max-w-7xl flex items-center justify-between gap-5">
                    <Link className="relative shrink-0" href="/">
                        <Image
                            src={"/images/logo/logo-w.svg"}
                            width={150}
                            height={64}
                            alt="Novasac"
                            className={`lg:w-28 md:w-24 sm:w-20 w-16 h-auto`}
                            loading="eager"
                            fetchPriority='high'
                            aria-label='Logo'
                        />
                    </Link>

                    <SearchBar
                        ref={searchRef}
                        query={query}
                        setQuery={setQuery}
                        isFocused={isFocused}
                        onFocus={() => setIsFocused(true)}
                        onKeyDown={handleKeyDown}
                        onSubmit={handleSearchSubmit}
                        showDropdown={showDropdown}
                        suggestions={suggestions}
                        debouncedQuery={debouncedQuery}
                        onSelect={handleSelect}
                        isLoading={isFetching}
                    />

                    <div className="flex items-center gap-2">
                        <button name='Wishlist' className="relative hidden md:flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-primary-400 cursor-pointer">
                            <Heart className="text-white" size={28} strokeWidth={1} fill='white' />
                            <span className='sr-only'>Wishlist</span>
                        </button>

                        <button name='Shopping cart' className="relative hidden md:flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-primary-400 cursor-pointer">
                            <ShoppingCart className="text-white" size={28} strokeWidth={1} fill='white' />
                            <span className='sr-only'>Shopping cart</span>
                        </button>

                        <button name='Login' className="hidden md:flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-primary-400 cursor-pointer"
                            onClick={() => isAuthenticated ? router.push(`/profile/${user?.customer_id}`) : setOpenLoginModal(true)}
                        >
                            <User className="text-white" size={28} strokeWidth={1} fill='white' />
                            <span className='sr-only'>Account/Profile</span>
                        </button>

                        <button name='Serch Now' className="relative md:hidden flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-zinc-800/10 cursor-pointer">
                            <Search className="text-white" size={24} strokeWidth={1.5} />
                            <span className='sr-only'>Search Now</span>
                        </button>

                        <button name='Open Menu' className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-zinc-800/10 cursor-pointer"
                            onClick={() => setOpenMenu(true)}
                        >
                            <TextAlignJustify className="text-white" size={24} strokeWidth={1.5} />
                            <span className='sr-only'>Open Menu</span>
                        </button>
                    </div>
                </nav>
            </header>

            <LoginModal
                isOpen={openLoginModal}
                onClose={() => setOpenLoginModal(false)}
                currentStep={steps}
                changeStep={setSteps}
            />
            <MobileMenu
                isOpen={openMenu}
                onClose={() => setOpenMenu(false)}
            />
            <MobileStrip
                openLoginModal={setOpenLoginModal}
            />
        </>
    )
}
