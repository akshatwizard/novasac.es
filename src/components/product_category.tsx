import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import SliderWrapper from './ui/slider_wrapper'
import { Category } from '@/constant/category'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ProductCategory() {
    return (
        <Section>
            <Wrapper className='lg:gap-5'>

                <div className='flex flex-col gap-2 mb-10'>
                    <Heading>
                        Discover our favourites
                    </Heading>

                    <SubHeading>
                        Explore the most visited categories right now.
                    </SubHeading>
                </div>

                <SliderWrapper className="lg:gap-6 md:gap-6 gap-5" autoPlay>

                    {Category.map((product, idx) => (

                        <Link
                            href={product.link}
                            key={idx}
                            className='block group w-72 rounded-xl bg-white border border-zinc-200 p-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                        >

                            <div className='overflow-hidden rounded-lg'>
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={500}
                                    height={400}
                                    className='w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500'
                                    loading="lazy"
                                />
                            </div>

                            <div className='pt-4 text-center'>
                                <span className='text-lg font-semibold text-zinc-800 group-hover:text-primary-500 transition-colors'>
                                    {product.name}
                                </span>
                            </div>

                        </Link>

                    ))}

                </SliderWrapper>

                <div className='flex justify-center mt-10'>
                    <Link
                        href="#"
                        className='group flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-primary-500 transition'
                    >
                        View All Categories
                        <ChevronRight
                            size={18}
                            className='transition-transform group-hover:translate-x-1'
                        />
                    </Link>
                </div>

            </Wrapper>
        </Section>
    )
}