'use client';

import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import ProductCard from './product_card'
import Link from 'next/link'
import { ChevronRight, PackageSearch } from 'lucide-react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProductData, ProductResponse } from '@/types/home_product.types';


export default function Products() {
    const { data, isLoading, error } = useQuery<ProductData[]>({
        queryKey: ["new_arrival_products"],
        queryFn: async () => {
            const res = await axios.get<ProductResponse>(
                "https://gangapapers.in/novasac/api/home/new-arrivals"
            );
            return res.data.data;
        },
    });

    return (
        <Section>
            <Wrapper>
                <div className="w-full flex flex-col gap-2">
                    <Heading>Popular products</Heading>
                    <SubHeading>
                        Our most popular products at great prices. Just for you!
                    </SubHeading>
                </div>

                <div className="w-full grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 lg:gap-4 md:gap-3 gap-2 lg:gap-y-10 md:gap-y-6 gap-y-4">
                    {isLoading ? (
                        Array.from({ length: 10 }).map((_, i) => (
                            <ProductCardSkeleton key={i} />
                        ))
                    ) : error ? (
                        <EmptyState message="Failed to load products. Please try again later." />
                    ) : !data?.length ? (
                        <EmptyState message="No products found." />
                    ) : (
                        data.map((product) => (
                            <ProductCard product={product} key={product.id} />
                        ))
                    )}
                </div>

                {/* <div className="flex justify-center mt-10">
                    <Link
                        href="/products"
                        className="group flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-primary-500 transition"
                    >
                        View Other Products
                        <ChevronRight
                            size={18}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </Link>
                </div> */}
            </Wrapper>
        </Section>
    );
}

function ProductCardSkeleton() {
    return (
        <div className="w-full rounded-xl border border-gray-100 bg-white overflow-hidden animate-pulse">
            <div className="h-50 bg-zinc-200" />
            <div className="p-3 space-y-2">
                <div className="h-3 w-1/2 bg-zinc-200 rounded-full" />
                <div className="h-4 w-3/4 bg-zinc-200 rounded" />
                <div className="h-5 w-1/3 bg-zinc-200 rounded" />
            </div>
        </div>
    );
}

function EmptyState({ message }: { message: string }) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center gap-3 py-16 text-zinc-400">
            <PackageSearch size={40} strokeWidth={1.5} />
            <p className="text-sm">{message}</p>
        </div>
    );
}

