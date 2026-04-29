"use client";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { industryDetails } from "@/constant/industries_data";
import Section from "./ui/section";
import Wrapper from "./ui/wrapper";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { RecomendedProductAPIResponse } from "@/types/recomended_product.types";
import { useRef, useState } from "react";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";


interface Props {
    slug: string;
}

export default function IndustryDetailPage({ slug }: Props) {
    const industry = industryDetails.find((i) => i.slug === slug);
    const [api, setApi] = useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }))

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["industry", slug],
        queryFn: async () => {
            const res = await axios.get<RecomendedProductAPIResponse>(`https://www.gangapapers.in/novasac/api/industry/${slug}`);
            return res.data
        }
    })

    if (!industry) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-zinc-500 text-lg">Industry not found.</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen">
            <section className="relative h-[75vh] min-h-120 overflow-hidden">

                <Image
                    src={industry.heroImage}
                    alt={industry.label}
                    fill
                    priority
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/50 to-transparent" />

                <div className="absolute top-6 left-6 z-10">
                    <Link
                        href="/industries"
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors group"
                    >
                        <ArrowLeft
                            size={16}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        All Industries
                    </Link>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-4xl">
                    <span
                        className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4 w-fit ${industry.accentColor} text-white`}
                    >
                        {industry.label}
                    </span>
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
                        {industry.tagline}
                    </h1>
                    <div className={`h-1 w-20 rounded-full ${industry.accentColor}`} />
                </div>
            </section>

            <Section>
                <Wrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

                        <div className="lg:col-span-2 space-y-10">
                            {industry.sections.map((section, i) => (
                                <article
                                    key={i}
                                    className="group overflow-hidden relative rounded-2xl border border-zinc-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-lg transition-all duration-300"
                                >
                                    {/* Top Accent Bar */}
                                    <div className={`absolute top-0 left-0 w-full h-1 rounded-t-2xl ${industry.accentColor}`} />

                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-5">
                                        <span
                                            className={`font-display text-4xl md:text-5xl font-bold leading-none opacity-10 ${industry.accentText}`}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>

                                        <div>
                                            <h2 className="font-display text-xl md:text-2xl font-semibold text-zinc-900 leading-snug">
                                                {section.title}
                                            </h2>

                                            {/* Small underline */}
                                            <div className={`mt-2 h-0.5 w-10 ${industry.accentColor} rounded-full`} />
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-4">
                                        {section.content.split("\n\n").map((para, j) => (
                                            <p
                                                key={j}
                                                className="text-zinc-600 leading-relaxed text-sm md:text-[15px]"
                                            >
                                                {para}
                                            </p>
                                        ))}
                                    </div>
                                </article>
                            ))}
                        </div>

                        <aside className="lg:col-span-1">
                            <div className="lg:sticky lg:top-16 space-y-6">
                                <div
                                    className={`rounded-2xl border-2 ${industry.accentBorder} bg-white p-7 shadow-sm`}
                                >
                                    <h3 className="font-display text-xl font-bold text-zinc-900 mb-1">
                                        Recommended Products
                                    </h3>
                                    <p className="text-xs text-zinc-400 mb-5 uppercase tracking-wide font-medium">
                                        For {industry.label}
                                    </p>
                                    <ul className="space-y-3">
                                        {industry.recommendedProducts.map((product, i) => (
                                            <li
                                                key={i}
                                                className="flex items-start gap-3 text-sm text-zinc-700"
                                            >
                                                <CheckCircle2
                                                    size={17}
                                                    className={`mt-0.5 shrink-0 ${industry.accentText}`}
                                                />
                                                <span className="leading-snug">{product}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="rounded-2xl bg-zinc-900 p-7 text-white">
                                    <h3 className="font-display text-xl font-bold mb-2">
                                        Get a Custom Quote
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                                        Tell us about your specific needs and we'll recommend the
                                        perfect packaging solution.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className={`block text-center text-sm font-semibold py-3 px-5 rounded-xl transition-all
                    ${industry.accentColor} text-white hover:opacity-90 hover:shadow-lg`}
                                    >
                                        Contact Our Team →
                                    </Link>
                                </div>

                                {/* All industries link */}
                                <Link
                                    href="/industries"
                                    className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-800 transition-colors group"
                                >
                                    <ArrowLeft
                                        size={14}
                                        className="group-hover:-translate-x-1 transition-transform"
                                    />
                                    View all industries
                                </Link>
                            </div>
                        </aside>
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper>
                    <div className="w-full">
                        <Carousel
                            className="relative w-full z-10 lg:order-2 order-1"
                            plugins={[plugin.current]}
                            opts={{ loop: true }}
                            onMouseEnter={plugin.current.stop}
                            onMouseLeave={plugin.current.reset}
                            setApi={setApi}
                        >
                            <CarouselContent>
                                {(isLoading || isFetching)
                                    ? Array.from({ length: 2 }).map((_, idx) => (
                                        <CarouselItem key={idx}>
                                            <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm animate-pulse">

                                                {/* LEFT — IMAGE SKELETON */}
                                                <div className="w-full h-86 md:h-100 bg-zinc-200" />

                                                {/* RIGHT — CONTENT SKELETON */}
                                                <div className="p-6 md:p-8 space-y-4">

                                                    <div className="h-3 w-24 bg-zinc-200 rounded" />

                                                    <div className="h-6 w-3/4 bg-zinc-200 rounded" />

                                                    <div className="space-y-2">
                                                        <div className="h-3 w-full bg-zinc-200 rounded" />
                                                        <div className="h-3 w-5/6 bg-zinc-200 rounded" />
                                                        <div className="h-3 w-2/3 bg-zinc-200 rounded" />
                                                    </div>

                                                    <div className="h-8 w-32 bg-zinc-200 rounded-lg mt-4" />
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    )) : data?.data.products?.map((items, idx) => (
                                        <CarouselItem key={idx}>
                                            <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">

                                                {/* LEFT — IMAGE */}
                                                <div className="relative w-full h-86 md:h-100">
                                                    <Image
                                                        src={items.image ?? "/images/no-image.svg"}
                                                        alt={items.title}
                                                        fill
                                                        className="object-contain"
                                                    />
                                                </div>

                                                {/* RIGHT — CONTENT */}
                                                <div className="p-6 md:p-8 flex flex-col justify-center h-full">

                                                    {/* Category */}
                                                    <span className="text-xs uppercase tracking-wide text-primary-600 mb-2 font-medium">
                                                        {items.category?.title}
                                                    </span>

                                                    {/* Title */}
                                                    <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3 leading-snug">
                                                        {items.title}
                                                    </h3>

                                                    {/* Description (fallback safe) */}
                                                    <p className="text-sm text-zinc-600 leading-relaxed mb-5 line-clamp-3">
                                                        {data?.data.short_description || "High-quality industrial packaging solution designed for durability and performance."}
                                                    </p>

                                                    {/* Price (optional) */}
                                                    {(items.mrp || items.offer_rate) && (
                                                        <div className="flex items-center gap-3 mb-5">
                                                            {items.offer_rate && (
                                                                <span className="text-lg font-semibold text-primary-600">
                                                                    ₹{items.offer_rate}
                                                                </span>
                                                            )}
                                                            {items.mrp && (
                                                                <span className="text-sm text-zinc-400 line-through">
                                                                    ₹{items.mrp}
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}

                                                    {/* CTA */}
                                                    <Link
                                                        href={`/products/${items.slug}/${items.attribute_value_slug}`}
                                                        className="inline-block w-fit px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-500 transition"
                                                    >
                                                        View Product →
                                                    </Link>
                                                </div>
                                            </div>
                                        </CarouselItem>
                                    ))
                                }
                            </CarouselContent>

                            <CarouselPrevious
                                onClick={() => { api?.scrollPrev(); plugin.current?.reset(); }}
                                className='border-none bg-primary-600 text-white -left-5 cursor-pointer hover:bg-primary-400 rounded-xs hover:text-white'
                            />
                            <CarouselNext
                                onClick={() => { api?.scrollNext(); plugin.current?.reset(); }}
                                className='border-none bg-primary-600 text-white -right-5 cursor-pointer hover:bg-primary-400 rounded-xs hover:text-white'
                            />
                        </Carousel>
                    </div>
                </Wrapper>
            </Section>
        </main>
    );
}