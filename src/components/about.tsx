import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function About() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-10 md:gap-4'>
                    <div className='w-full h-full'>
                        <h1 className='lg:text-6xl md:text-5xl text-3xl leading-tight font-light text-zinc-900'>
                            Your partner <br /> in <em className='text-primary-500'>packaging solutions</em> <br />since 1980
                        </h1>
                    </div>

                    <div className='w-full h-full grid place-content-center'>
                        <p className='text-zinc-700 font-medium lg:text-lg md:text-base text-sm'>
                            NOVASAC delivers bags built on strength, reliability, and sustainability. We carefully select quality materials to create packaging solutions you can trust, while staying committed to a greener future.
                            <br />
                            More than a manufacturer, we are a partner — combining craftsmanship, innovation, and a people-first approach to support your projects and grow together.
                            <br />
                            We are NOVASAC, and we look forward to welcoming you to our family.
                        </p>
                        <Link
                            href={"/about"}
                            className='px-5 py-2.5 bg-primary-500 text-white w-max mt-8 rounded-md font-medium text-lg flex items-center gap-1'
                        >
                            <ChevronRight size={18} strokeWidth={3} />
                            <span>
                                About Us
                            </span>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
