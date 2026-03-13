'use client';
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Mail, Phone, TruckElectric } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react'

export default function TopBar() {
    const items: string[] = [
        "Welcome to Our Store!",
        "Use HOLI for 10% discount on every products.",
        "Get 30% discount on First Order. Use FIRST",
    ]
    const [active, setActive] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prevIndex) => (prevIndex + 1) % items.length);
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Section className='bg-primary-100 hidden min-[950px]:block overflow-hidden'>
            <Wrapper className='py-0! flex-row justify-between px-1.5'>
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-1.5 items-center py-3 pr-2'>
                        <Mail size={18} strokeWidth={1.5} className='text-primary-600' />
                        <Link href={"#"} className='text-zinc-600 text-sm transition-colors duration-300 ease-in-out hover:text-zinc-800'>
                            <span>
                                support@email.com
                            </span>
                        </Link>
                    </div>

                    <span className='w-px h-full bg-primary-200' />
                    <div className='flex gap-1.5 items-center py-3 pr-2'>
                        <Phone size={18} strokeWidth={1.5} className='text-primary-600' />
                        <Link href={"#"} className='text-zinc-600 text-sm transition-colors duration-300 ease-in-out hover:text-zinc-800'>
                            <span>
                                +91 1234567890
                            </span>
                        </Link>
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    <motion.span className='text-sm font-normal text-primary-500' layout>
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={active}
                                initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                                transition={{
                                    duration: 0.5,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block whitespace-nowrap"
                            >
                                {items[active]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.span>

                    <span className='w-px h-full bg-primary-200' />
                    <div className='flex items-center gap-2.5'>
                        <div className='flex gap-1.5 items-center py-3 pr-2'>
                            <TruckElectric size={18} strokeWidth={1.5} className='text-primary-600' />
                            <Link href={"#"} className='text-zinc-600 text-sm transition-colors duration-300 ease-in-out hover:text-zinc-800'>
                                <span>
                                    Express Delievery
                                </span>
                            </Link>
                        </div>
                    </div>

                    <span className='w-px h-full bg-primary-200' />
                    <Link href={"#"} className='text-sm font-normal text-zinc-600 hover:text-primary-500 duration-300 transition-colors ease-in-out'>
                        Need Help?
                    </Link>
                </div>
            </Wrapper>
        </Section>
    )
}
