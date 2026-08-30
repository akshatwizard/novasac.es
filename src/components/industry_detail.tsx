"use client";
import { ArrowLeft } from "lucide-react";
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
    const [api, setApi] = useState<CarouselApi>();
    const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }));

    const { data, isLoading, isFetching } = useQuery({
        queryKey: ["industry", slug],
        queryFn: async () => {
            const res = await axios.get<RecomendedProductAPIResponse>(`https://admin.novasac.es/api/industry-category/${slug}`);
            return res.data.data;
        },
    });

    if (!industry) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-zinc-500 text-lg">Industria no encontrada.</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-zinc-50">
            {/* ── HERO ── */}
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
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                        Todas las Industrias
                    </Link>
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 max-w-4xl">
                    <span className={`lg:text-3xl md:text-2xl block text-xl w-fit font-semibold tracking-[0.2em] uppercase px-3 py-1 rounded-full mb-4 ${industry.accentColor} text-white`}>
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
                    <div className="columns-1 md:columns-2 gap-6 space-y-0">
                        {industry.sections.map((section, i) => {
                            const cardStyles = [
                                "bg-white border border-zinc-200",
                                `bg-zinc-900 text-white`,
                                "bg-white border border-zinc-200",
                                `${industry.accentColor} text-white`,
                                "bg-white border border-zinc-200",
                                "bg-zinc-100 border border-zinc-200",
                            ];
                            const isDark = i === 1 || i === 3;
                            const cardStyle = cardStyles[i % cardStyles.length];

                            return (
                                <div
                                    key={i}
                                    className={`break-inside-avoid mb-6 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${cardStyle}`}
                                >
                                    {/* Top accent bar — only on light cards */}
                                    {!isDark && (
                                        <div className={`h-1 w-full ${industry.accentColor}`} />
                                    )}

                                    <div className="p-6 md:p-8">
                                        {/* Index badge */}
                                        <div className="flex items-center justify-between mb-5">
                                            <span
                                                className={`lg:text-5xl md:text-4xl text-3xl font-black leading-none select-none ${isDark ? "text-white/15" : `${industry.accentText} opacity-20`
                                                    }`}
                                            >
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span
                                                className={`text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full ${isDark
                                                    ? "bg-white/15 text-white"
                                                    : `${industry.accentColor} text-white`
                                                    }`}
                                            >
                                                {industry.label}
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h2
                                            className={`font-display text-xl md:text-2xl font-bold leading-snug mb-3 ${isDark ? "text-white" : "text-zinc-900"
                                                }`}
                                        >
                                            {section.title}
                                        </h2>

                                        {/* Divider */}
                                        <div className={`h-0.5 w-10 rounded-full mb-5 ${isDark ? "bg-white/30" : industry.accentColor}`} />

                                        {/* Content paragraphs */}
                                        <div className="space-y-3">
                                            {section.content.split("\n\n").map((para, j) => (
                                                <p
                                                    key={j}
                                                    className={`leading-relaxed text-sm md:text-[15px] ${isDark ? "text-white/70" : "text-zinc-600"
                                                        }`}
                                                >
                                                    {para}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Wrapper>
            </Section>

            {/* ── CAROUSEL ── */}
            {data?.industries.length &&
                <Section>
                    <Wrapper>
                        <div className="w-full">
                            <h3 className="text-zinc-900 text-2xl lg:text-4xl md:text-3xl font-semibold text-center">
                                Nuestros Productos Recomendados
                            </h3>
                        </div>
                        <div className="w-full">
                            <Carousel
                                className="relative w-full z-10"
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
                                                    <div className="w-full h-86 md:h-100 bg-zinc-200" />
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
                                        ))
                                        : data?.industries?.map((items, idx) => (
                                            <CarouselItem key={idx}>
                                                <div className="grid md:grid-cols-2 gap-6 items-center bg-white rounded-2xl border border-zinc-200 overflow-hidden shadow-sm">
                                                    <div className="relative w-full h-86 md:h-100">
                                                        <Image
                                                            src={items.image ?? "/images/no-image.svg"}
                                                            alt={items.title}
                                                            fill
                                                            className="object-contain"
                                                        />
                                                    </div>
                                                    <div className="p-6 md:p-8 flex flex-col justify-center h-full">
                                                        {/* <span className="text-xs uppercase tracking-wide text-primary-600 mb-2 font-medium">
                                                            {items.category_name}
                                                        </span> */}
                                                        <h3 className="text-xl md:text-2xl font-semibold text-zinc-900 mb-3 leading-snug">
                                                            {items.title}
                                                        </h3>
                                                        {/* <p className="text-sm text-zinc-600 leading-relaxed mb-5 line-clamp-3">
                                                            {items?.short_description || "High-quality industrial packaging solution designed for durability and performance."}
                                                        </p> */}
                                                        <Link
                                                            href={items.page_url ?? "#"}
                                                            className="inline-block w-fit px-5 py-2.5 rounded-lg bg-primary-600 text-white text-sm font-medium hover:bg-primary-500 transition mt-5"
                                                        >
                                                            Ver Todos los Productos →
                                                        </Link>
                                                    </div>
                                                </div>
                                            </CarouselItem>
                                        ))
                                    }
                                </CarouselContent>

                                <CarouselPrevious
                                    onClick={() => { api?.scrollPrev(); plugin.current?.reset(); }}
                                    className="border-none bg-primary-600 text-white -left-5 cursor-pointer hover:bg-primary-400 rounded-xs hover:text-white"
                                />
                                <CarouselNext
                                    onClick={() => { api?.scrollNext(); plugin.current?.reset(); }}
                                    className="border-none bg-primary-600 text-white -right-5 cursor-pointer hover:bg-primary-400 rounded-xs hover:text-white"
                                />
                            </Carousel>
                        </div>
                    </Wrapper>
                </Section>
            }

            {/* ── BOTTOM CTA ── */}
            <section className="bg-zinc-900">
                <Wrapper>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="text-center md:text-left">
                            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                                ¿Listo para empezar?
                            </h2>
                            <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                                Cuéntanos qué necesitas y te recomendaremos la solución de embalaje perfecta para {industry.label}.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
                            <Link
                                href="/contact"
                                className={`inline-block text-center text-sm font-semibold py-3.5 px-8 rounded-xl transition-all ${industry.accentColor} text-white hover:opacity-90 hover:shadow-lg`}
                            >
                                Solicita un Presupuesto Personalizado →
                            </Link>
                            <Link
                                href="/industries"
                                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors group"
                            >
                                <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                                Todas las Industrias
                            </Link>
                        </div>
                    </div>
                </Wrapper>
            </section>
        </main>
    );
}
