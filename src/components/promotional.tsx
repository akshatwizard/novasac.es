import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag } from 'lucide-react'

export default function Promotional() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5'>

                    <div className='w-full h-full bg-primary-500 rounded-2xl p-5 flex gap-4 flex-col lg:flex-row justify-between items-center'>
                        <div className='flex flex-col gap-2 h-full justify-evenly'>
                            <div>
                                <span className='font-bold text-xl lg:text-4xl md:text-2xl text-white'>
                                    Big Bag with loading mouth.
                                </span>
                                <p className='text-white text-sm mt-2'>
                                    Buy custom Big Bag with loading mouth from our online store and get massive discount on it.
                                </p>
                            </div>
                            <Link href={"#"} className='mt-6 w-max flex items-center gap-1.5 px-5 py-2.5 bg-white text-primary-500 rounded-md'>
                                <ShoppingBag size={16} />
                                <span className='font-medium'>
                                    Buy Now
                                </span>
                            </Link>
                        </div>

                        <div>
                            <Image
                                src={"/images/products/bag-1.png"}
                                alt='Promotional Bag'
                                width={500}
                                height={300}
                                className='h-auto max-w-52'
                            />
                        </div>
                    </div>


                    <div className='w-full h-full bg-primary-100 rounded-2xl p-5 flex gap-4 flex-col lg:flex-row justify-between items-center'>
                        <div className='flex flex-col gap-2 h-full justify-evenly'>
                            <div>
                                <span className='font-bold text-xl lg:text-4xl md:text-2xl text-primary-500'>
                                    Buy customised UN Bags.
                                </span>
                                <p className='text-primary-400 text-sm mt-2'>
                                    Buy custom UN Bags from our online store and get massive discount on it.
                                </p>
                            </div>
                            <Link href={"#"} className='mt-6 w-max flex items-center gap-1.5 px-5 py-2.5 bg-primary-500 text-white rounded-md'>
                                <ShoppingBag size={16} />
                                <span className='font-medium'>
                                    Buy Now
                                </span>
                            </Link>
                        </div>

                        <div>
                            <Image
                                src={"/images/products/bag-2.png"}
                                alt='Promotional Bag'
                                width={500}
                                height={300}
                                className='h-auto max-w-52'
                            />
                        </div>
                    </div>

                </div>
            </Wrapper>
        </Section>
    )
}
