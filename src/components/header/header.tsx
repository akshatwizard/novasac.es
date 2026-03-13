import Image from 'next/image'
import Link from 'next/link'
import SearchBar from './search'

export default function Header() {
    return (
        <header className='w-full bg-primary-500 lg:px-12 md:px-10 px-8'>

            <nav className="w-full py-1.5 mx-auto max-w-7xl flex items-center justify-between gap-5">
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

            </nav>
        </header>
    )
}
