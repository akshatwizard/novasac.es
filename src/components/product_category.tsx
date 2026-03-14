import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import SliderWrapper from './ui/slider_wrapper'
import { Category } from '@/constant/category'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function ProductCategory() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2'>
                    <Heading>
                        Discover our favourites
                    </Heading>
                    <SubHeading>
                        Explore the most visited categories right now.
                    </SubHeading>
                </div>

                <div className='w-full'>
                    <SliderWrapper className="lg:gap-6 md:gap-8 gap-6">
                        {
                            Category.map((product, idx) => (
                                <Link href={product.link} key={idx} className='block w-70 h-full border-gray-200 rounded-xl bg-white border'>
                                    <div className='w-full p-2'>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={500}
                                            height={400}
                                            className='w-full h-60 object-cover object-center'
                                            loading="lazy"
                                        />
                                    </div>
                                    <div className='mt-4 px-3 pb-3 text-center'>
                                        <span className='font-medium text-lg font-sans! text-primary-500'>
                                            {product.name}
                                        </span>
                                    </div>
                                </Link>
                            ))
                        }
                    </SliderWrapper>
                </div>

                <div className='flex items-center justify-center'>
                    <Link href={"#"} className='flex items-center gap-1'>
                        <span className='text-zinc-900 font-medium'>
                            View All
                        </span>
                        <ChevronDown size={18} className='text-primary-500' />
                    </Link>
                </div>
            </Wrapper>
        </Section>
    )
}
