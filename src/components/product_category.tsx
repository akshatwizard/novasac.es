'use client';

import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import SliderWrapper from './ui/slider_wrapper'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, PackageSearch } from 'lucide-react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { HomeCategoryData, HomeCategoryResponse } from '@/types/home_category.types';
import { MenuItems } from '@/constant/menu';


export default function ProductCategory() {

    const { data, isLoading, error } = useQuery<HomeCategoryData[]>({
        queryKey: ["home_category"],
        queryFn: async () => {
            const res = await axios.get<HomeCategoryResponse>(
                "https://gangapapers.in/novasac/api/home/category"
            );
            return res.data.data;
        },
    });

    return (
        <Section>
            <Wrapper className="lg:gap-5">

                <div className="flex flex-col gap-2 mb-10">
                    <Heading>Our Product Categories</Heading>
                    <SubHeading>Explore the most visited categories right now.</SubHeading>
                </div>

                {isLoading ? (
                    <div className="flex gap-5 overflow-hidden">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <CategoryCardSkeleton key={i} />
                        ))}
                    </div>
                ) : error ? (
                    <EmptyState message="Failed to load categories. Please try again later." />
                ) : !data?.length ? (
                    <EmptyState message="No categories found." />
                ) : (
                    <SliderWrapper className="gap-4" autoPlay>
                        {data.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))}
                        {
                            MenuItems.map((category) => (
                                <Link
                                    key={category.name}
                                    href={category.path}
                                    className="group relative block w-64 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
                                >
                                    <div className="relative h-56 overflow-hidden bg-zinc-100">
                                        <Image
                                            src={category.icon}
                                            alt={category.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            sizes="256px"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>

                                    <div className="p-4 flex items-center justify-between gap-2">
                                        <div>
                                            <p className="text-sm font-semibold text-zinc-800 group-hover:text-primary-500 transition-colors line-clamp-1">
                                                {category.name}
                                            </p>
                                        </div>
                                        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                            <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                                        </span>
                                    </div>
                                </Link>
                            ))
                        }
                    </SliderWrapper>
                )}

                {/* <div className="flex justify-center mt-10">
                    <Link
                        href="/categories"
                        className="group flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-primary-500 transition"
                    >
                        View All Categories
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

function CategoryCardSkeleton() {
    return (
        <div className="w-64 rounded-2xl bg-white border border-zinc-100 overflow-hidden animate-pulse shrink-0">
            <div className="h-48 bg-zinc-200" />
            <div className="p-4 space-y-2">
                <div className="h-4 bg-zinc-200 rounded w-3/4 mx-auto" />
                <div className="h-3 bg-zinc-100 rounded w-1/2 mx-auto" />
            </div>
        </div>
    );
}

function CategoryCard({ category }: { category: HomeCategoryData }) {
    return (
        <Link
            href={`/category/${category.slug}`}
            className="group relative block w-64 shrink-0 rounded-xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300"
        >
            <div className="relative h-56 overflow-hidden bg-zinc-100">
                <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="256px"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-zinc-700 text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                {category.products_count} items
            </span>

            <div className="p-4 flex items-center justify-between gap-2">
                <div>
                    <p className="text-sm font-semibold text-zinc-800 group-hover:text-primary-500 transition-colors line-clamp-1">
                        {category.title}
                    </p>
                    <p className="text-xs text-zinc-400 mt-0.5">
                        {category.products_count} products available
                    </p>
                </div>
                <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                    <ChevronRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                </span>
            </div>
        </Link>
    );
}

function EmptyState({ message }: { message: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 py-16 text-zinc-400">
            <PackageSearch size={40} strokeWidth={1.5} />
            <p className="text-sm">{message}</p>
        </div>
    );
}
