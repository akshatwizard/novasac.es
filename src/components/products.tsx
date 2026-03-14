import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { homeProducts } from '@/constant/products'
import ProductCard from './product_card'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function Products() {
    return (
        <Section className='bg-primary-'>
            <Wrapper>
                <div className='w-full flex flex-col gap-2'>
                    <Heading>
                        Popular products
                    </Heading>
                    <SubHeading>
                        Our most popular products at great prices. Just for you!
                    </SubHeading>
                </div>

                <div className='w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 lg:gap-4 md:gap-3 gap-2 lg:gap-y-10 md:gap-y-6 gap-y-4'>
                    {
                        homeProducts.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    }
                </div>

                <div className='flex justify-center mt-10'>
                    <Link
                        href="#"
                        className='group flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-primary-500 transition'
                    >
                        View Other Products
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
