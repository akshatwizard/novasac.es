"use client";

import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { industryDetails } from "@/constant/industries_data";
import Section from "./ui/section";
import Wrapper from "./ui/wrapper";


interface Props {
    slug: string;
}

export default function IndustryDetailPage({ slug }: Props) {
    const industry = industryDetails.find((i) => i.slug === slug);

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
                    className="object-cover object-top"
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

                        <div className="lg:col-span-2 space-y-14">
                            {industry.sections.map((section, i) => (
                                <article key={i} className="group">
                                    {/* Section number + title */}
                                    <div className="flex items-start gap-4 mb-5">
                                        <span
                                            className={`font-display text-5xl font-bold leading-none select-none opacity-15 ${industry.accentText} mt-1`}
                                        >
                                            {String(i + 1).padStart(2, "0")}
                                        </span>
                                        <h2 className="font-display text-2xl md:text-3xl font-bold text-zinc-900 leading-snug pt-2">
                                            {section.title}
                                        </h2>
                                    </div>

                                    {/* Divider */}
                                    <div
                                        className={`h-px w-full mb-6 bg-linear-to-r from-zinc-200 to-transparent`}
                                    />

                                    {/* Paragraphs */}
                                    <div className="space-y-4">
                                        {section.content.split("\n\n").map((para, j) => (
                                            <p
                                                key={j}
                                                className="text-zinc-600 leading-relaxed text-[15px] md:text-base"
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
        </main>
    );
}