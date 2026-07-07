// 'use client';
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Leaf, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
// import { useEffect, useState } from 'react';
// import { AnimatePresence, motion } from 'motion/react'

export default function TopBar() {
    // const items: string[] = [
    //     "Welcome to Our Store!",
    //     "Use HOLI for 10% discount on every products.",
    //     "Get 30% discount on First Order. Use FIRST",
    // ]
    // const [active, setActive] = useState<number>(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setActive((prevIndex) => (prevIndex + 1) % items.length);
    //     }, 6000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <Section className='bg-zinc-50 border-b border-zinc-200 hidden min-[950px]:block overflow-hidden'>
            <Wrapper className='py-0! flex-row justify-between px-1.5'>
                <div className='flex gap-5 items-center'>
                    <div className='flex gap-1.5 items-center py-3 pr-2'>
                        <Mail size={18} strokeWidth={1.5} className='text-zinc-500' />
                        <Link href="mailto:laura.sanjuan@novasac.es" className='text-zinc-600 text-sm transition-colors duration-300 ease-in-out hover:text-zinc-800'>
                            <span>
                                laura.sanjuan@novasac.es
                            </span>
                        </Link>
                    </div>

                    <div className="w-px h-4 bg-zinc-200" />
                    <div className='flex gap-1.5 items-center py-3 pr-2'>
                        <Phone size={18} strokeWidth={1.5} className='text-zinc-500' />
                        <div className='flex gap-2'>
                            <Link href={"tel:+34628188044"} className='text-zinc-600 text-sm transition-colors duration-300 ease-in-out hover:text-zinc-800'>
                                <span>
                                    +34 628188044
                                </span>
                            </Link>
                            <span className='h-4 w-px bg-zinc-200' />
                            <Link href={"tel:+34961070274"} className='text-zinc-600 text-sm transition-colors duration-300 ease-in-out hover:text-zinc-800'>
                                <span>
                                    +34 961070274
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='flex items-center gap-5'>
                    {/* <motion.span className='text-sm font-normal text-zinc-500' layout>
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
                    </motion.span> */}

                    <div className="w-px h-4 bg-zinc-200" />
                    <div className='flex items-center gap-2.5'>
                        <div className='flex gap-1.5 items-center py-3 pr-2'>
                            <Leaf size={18} strokeWidth={1.5} className='text-zinc-500' />
                            <Link href={"#"} className='text-zinc-600 text-sm transition-colors duration-300 ease-in-out hover:text-zinc-800'>
                                <span>
                                    Sustainability Partner
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="w-px h-4 bg-zinc-200" />
                    <Link href={"/contact"} className='text-sm font-normal text-zinc-500 hover:text-primary-500 duration-300 transition-colors ease-in-out'>
                        Contact Us
                    </Link>
                </div>
            </Wrapper>
        </Section>
    )
}
