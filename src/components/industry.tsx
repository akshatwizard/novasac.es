// components/Industry.tsx
import Link from "next/link";
import Image from "next/image";
import Section from "./ui/section";
import Wrapper from "./ui/wrapper";
import { Heading, SubHeading } from "./ui/headings";
import { industries } from "@/constant/industries_data";
import { ArrowUpRight } from "lucide-react";

export default function Industry() {
    return (
        <Section className="bg-primary-100">
            <Wrapper>
                <div className="text-center flex flex-col gap-2">
                    <Heading className="text-primary-500">Industries We Serve</Heading>
                    <SubHeading className="text-primary-400">
                        Providing reliable packaging solutions across multiple industries.
                    </SubHeading>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {industries.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={index}
                                href={`/industries/${item.slug}`}
                                className="group relative overflow-hidden rounded-2xl border border-zinc-200 hover:border-primary-300 hover:shadow-xl transition-all duration-500 min-h-64 flex flex-col justify-end bg-white"
                            >
                                {/* ── Background image ── */}
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105 group-hover:opacity-70"
                                />

                                {/* ── Gradient: top open, bottom white so content is readable ── */}
                                <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/70 to-white/95 pointer-events-none" />

                                <div className="relative z-10 p-6 flex flex-col gap-2 h-full justify-between">
                                    {/* Icon badge */}
                                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-white border border-zinc-200 text-primary-500 shadow-sm group-hover:bg-primary-500 group-hover:border-primary-500 group-hover:text-white group-hover:shadow-md transition-all duration-300">
                                        <Icon size={22} />
                                    </div>

                                    <div className="space-y-1.5">
                                        <div className="flex items-start justify-between gap-2">
                                            <h3 className="text-base font-semibold text-zinc-800 leading-snug">
                                                {item.title}
                                            </h3>
                                        </div>

                                        <p className="text-sm text-zinc-600 leading-tight">
                                            {item.description}
                                        </p>

                                        {/* Learn more row */}
                                        <div className="flex items-center gap-1.5 mt-1">
                                            <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-primary-500 ">
                                                Learn more
                                            </span>
                                            <ArrowUpRight
                                                size={11}
                                                className="text-primary-500 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-75 rotate-45 group-hover:rotate-0"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Wrapper>
        </Section>
    );
}