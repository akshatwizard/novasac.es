'use client';
import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './search'
import { Heart, Search, ShoppingCart, TextAlignJustify, User } from 'lucide-react'
import { useState } from 'react';
import { useAuth } from '@/context/auth_context';
import LoginModal from '../login_modal';
import { useRouter } from 'next/navigation';

export default function Header() {
    const [openLoginModal, setOpenLoginModal] = useState<boolean>(false);
    const [steps, setSteps] = useState<"login" | "otp">("login");
    const { isAuthenticated, user } = useAuth()
    const router = useRouter()


    return (
        <>
            <header className='w-full bg-primary-500 lg:px-12 md:px-10 px-8'>

                <nav className="w-full py-1.5 lg:px-1.5 mx-auto max-w-7xl flex items-center justify-between gap-5">
                    <Link className="relative shrink-0" href="/">
                        <Image
                            src={"/images/logo/logo-w.svg"}
                            width={150}
                            height={64}
                            alt="Novasec"
                            className={`lg:w-28 md:w-24 sm:w-20 w-16 h-auto`}
                            loading="eager"
                            fetchPriority='high'
                            aria-label='Logo'
                        />
                    </Link>

                    <SearchBar />

                    <div className="flex items-center gap-2">
                        <button className="relative hidden md:flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-primary-400 cursor-pointer">
                            <Heart className="text-white" size={28} strokeWidth={1} fill='white' />

                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-white -top-1.5 -right-1 text-xs text-primary-500">
                                01
                            </span>

                        </button>

                        <button className="relative hidden md:flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-primary-400 cursor-pointer">
                            <ShoppingCart className="text-white" size={28} strokeWidth={1} fill='white' />
                            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full bg-white -top-1.5 -right-1 text-xs text-primary-500">
                                03
                            </span>
                        </button>

                        <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-primary-400 cursor-pointer"
                            onClick={() => isAuthenticated ? router.push(`/profile/${user?.customer_id}`) : setOpenLoginModal(true)}
                        >
                            <User className="text-white" size={28} strokeWidth={1} fill='white' />
                        </button>

                        <button className="relative md:hidden flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-zinc-800/10 cursor-pointer">
                            <Search className="text-zinc-800" size={24} strokeWidth={1.5} />
                        </button>

                        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-sm transition-colors duration-300 ease-in-out hover:bg-zinc-800/10 cursor-pointer">
                            <TextAlignJustify className="text-zinc-700" size={24} strokeWidth={1.5} />
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
        </>
    )
}
