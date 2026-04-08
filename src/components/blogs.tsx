'use client';

import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import Image from 'next/image';
import Link from 'next/link';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { BlogData, BlogResponse } from '@/types/blog.types';
import { BookOpen } from 'lucide-react';



export default function Blogs() {

    const { data, isLoading, error } = useQuery<BlogData[]>({
        queryKey: ["home_blogs"],
        queryFn: async () => {
            const res = await axios.get<BlogResponse>(
                "https://gangapapers.in/novasac/api/home/blog"
            );
            return res.data.data;
        },
    });

    return (
        <Section>
            <Wrapper>
                <div className="w-full flex flex-col gap-2">
                    <Heading>Latest Blogs</Heading>
                    <SubHeading className="max-w-lg">
                        Insights and updates from the packaging industry.
                    </SubHeading>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, i) => (
                            <BlogCardSkeleton key={i} />
                        ))
                    ) : error ? (
                        <EmptyState message="Failed to load blogs. Please try again later." />
                    ) : !data?.length ? (
                        <EmptyState message="No blog posts found." />
                    ) : (
                        data.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))
                    )}
                </div>
            </Wrapper>
        </Section>
    );
}

function BlogCardSkeleton() {
    return (
        <div className="rounded-xl border border-zinc-100 overflow-hidden bg-white animate-pulse">
            <div className="h-48 bg-zinc-200" />
            <div className="p-5 space-y-2.5">
                <div className="h-2.5 w-1/3 bg-zinc-200 rounded-full" />
                <div className="h-4 w-full bg-zinc-200 rounded" />
                <div className="h-4 w-4/5 bg-zinc-200 rounded" />
                <div className="h-3 w-full bg-zinc-100 rounded" />
                <div className="h-3 w-2/3 bg-zinc-100 rounded" />
            </div>
        </div>
    );
}

function EmptyState({ message }: { message: string }) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center gap-3 py-16 text-zinc-400">
            <BookOpen size={40} strokeWidth={1.5} />
            <p className="text-sm">{message}</p>
        </div>
    );
}

function BlogCard({ blog }: { blog: BlogData }) {
    const excerpt = blog.short_desc?.trim() || blog.content.replace(/<[^>]*>/g, "").slice(0, 120) + "…";

    return (
        <Link
            href={`/blog/${blog.slug}`}
            className="group border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 bg-white flex flex-col"
        >
            <div className="relative h-48 overflow-hidden shrink-0">
                <Image
                    src={blog.main_image}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    loading="lazy"
                />
            </div>


            <div className="p-5 flex flex-col flex-1 gap-2">
                <p className="text-xs text-zinc-400">
                    {blog.published_at}
                </p>

                <h3 className="font-semibold text-zinc-800 leading-snug group-hover:text-primary-500 transition-colors line-clamp-2">
                    {blog.title}
                </h3>

                <p className="text-sm text-zinc-500 line-clamp-3 flex-1">
                    {excerpt}
                </p>

                <span className="mt-2 text-xs font-medium text-primary-500 group-hover:underline underline-offset-2 w-max">
                    Read more →
                </span>
            </div>
        </Link>
    );
}
