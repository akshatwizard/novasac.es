import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { homeProducts } from '@/constant/products'
import ProductCard from './product_card'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

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
