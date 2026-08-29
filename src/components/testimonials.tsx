'use client';

import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading } from './ui/headings'
import SliderWrapper from './ui/slider_wrapper'
import { Star, StarHalf, Quote } from 'lucide-react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

type TestimonialItem = {
    id: number;
    name: string;
    designation: string;
    content: string;
    image: string | null;
}

type TestimonialResponse = {
    success: boolean;
    message: string;
    data: TestimonialItem[];
    total: number;
}



export default function Testimonials() {
    const { data, isLoading, error } = useQuery<TestimonialItem[]>({
        queryKey: ['testimonial'],
        queryFn: async () => {
            const res = await axios.get<TestimonialResponse>(
                "https://admin.novasac.es/api/home/testimonials"
            );
            return res.data.data;
        },
    });

    return (
        <Section className='bg-primary-100'>
            <Wrapper>
                <div className='w-full text-center mb-2'>
                    <Heading className='text-primary-500'>
                        Testimonials
                    </Heading>
                </div>

                {error ? (
                    <InlineMessage message="Unable to load testimonials right now." />
                ) : !isLoading && !data?.length ? (
                    <InlineMessage message="No testimonials yet." />
                ) : (
                    <div className='relative'>
                        <SliderWrapper
                            className="gap-5 py-5"
                            btnLeft='hidden'
                            btnRight='hidden'
                            autoPlay={true}
                        >
                            {isLoading
                                ? Array.from({ length: 5 }).map((_, i) => (
                                    <TestimonialSkeleton key={i} />
                                ))
                                : data!.map((item) => (
                                    <TestimonialCard key={item.id} item={item} />
                                ))
                            }
                        </SliderWrapper>

                        {/* Edge fade overlays */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 lg:w-24 md:w-20 w-5 bg-linear-to-r from-primary-100 to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 lg:w-24 md:w-20 w-5 bg-linear-to-l from-primary-100 to-transparent" />
                    </div>
                )}
            </Wrapper>
        </Section>
    );
}

function AvatarFallback({ name }: { name: string }) {
    const initials = name
        .split(" ")
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase() ?? "")
        .join("");

    return (
        <div className="size-10 shrink-0 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold">
            {initials}
        </div>
    );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
    return (
        <div className="lg:w-80 w-72 bg-white h-full p-5 rounded-xl shadow-[0_4px_12px_rgb(50,0,0,0.09)] flex flex-col justify-between gap-4 shrink-0">

            {/* Quote icon + content */}
            <div className="space-y-3">
                <Quote size={22} className="text-primary-300 rotate-180" />
                <p className="md:text-sm text-xs text-zinc-500 leading-relaxed line-clamp-5">
                    {item.content}
                </p>
            </div>

            {/* Footer: avatar + name */}
            <div className="flex items-center gap-3 pt-3 border-t border-zinc-100">
                {item.image ? (
                    <img
                        src={item.image}
                        alt={item.name}
                        className="size-10 shrink-0 rounded-full object-cover"
                    />
                ) : (
                    <AvatarFallback name={item.name} />
                )}
                <div>
                    <span className="text-sm font-medium text-zinc-700 block">
                        {item.name}
                    </span>
                    {item.designation && (
                        <span className="text-xs text-zinc-400 block">
                            {item.designation}
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

function TestimonialSkeleton() {
    return (
        <div className="lg:w-80 w-72 shrink-0 bg-white rounded-xl p-5 shadow-[0_4px_12px_rgb(50,0,0,0.09)] animate-pulse space-y-4">
            <div className="h-3 bg-zinc-200 rounded w-1/4" />
            <div className="space-y-2">
                <div className="h-3 bg-zinc-200 rounded w-full" />
                <div className="h-3 bg-zinc-200 rounded w-5/6" />
                <div className="h-3 bg-zinc-200 rounded w-4/6" />
            </div>
            <div className="flex items-center gap-3 pt-3 border-t border-zinc-100">
                <div className="size-10 rounded-full bg-zinc-200 shrink-0" />
                <div className="space-y-1.5 flex-1">
                    <div className="h-3 bg-zinc-200 rounded w-1/2" />
                    <div className="h-2.5 bg-zinc-100 rounded w-1/3" />
                </div>
            </div>
        </div>
    );
}

function InlineMessage({ message }: { message: string }) {
    return (
        <p className="text-center text-sm text-zinc-400 py-10">{message}</p>
    );
}
