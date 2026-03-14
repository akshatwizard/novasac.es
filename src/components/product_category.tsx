import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import SliderWrapper from './ui/slider_wrapper'
import { Category } from '@/constant/category'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCategory() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2'>
                    <Heading>
                        Discover our favourites
                    </Heading>
                    <SubHeading>
                        Explore the most visited categories right now. Looking for something else??
                    </SubHeading>
                </div>
                <div className='w-full'>
                    <SliderWrapper className="lg:gap-6 md:gap-8 gap-6">
                        {
                            Category.map((product, idx) => (
                                <Link href={product.link} key={idx} className='block w-60 h-full bg-zinc-100 border border-gray-200 rounded-xl'>
                                    <div className='w-full p-2'>
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            width={500}
                                            height={400}
                                            className='w-full h-50 object-cover object-center'
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
            </Wrapper>
        </Section>
    )
}
