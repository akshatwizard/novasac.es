'use client';
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { FAQData, FAQResponse } from '@/types/faq.types';


function FAQSkeleton() {
    return (
        <div className="border border-zinc-100 rounded-xl px-6 py-4 animate-pulse space-y-2">
            <div className="h-4 bg-zinc-200 rounded w-3/4" />
            <div className="h-3 bg-zinc-100 rounded w-1/2" />
        </div>
    );
}

function EmptyState({ message }: { message: string }) {
    return (
        <div className="flex flex-col items-center justify-center gap-3 py-16 text-zinc-400">
            <HelpCircle size={40} strokeWidth={1.5} />
            <p className="text-sm">{message}</p>
        </div>
    );
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQData; isOpen: boolean; onToggle: () => void; }) {
    return (
        <div className="border border-zinc-200 rounded-xl overflow-hidden">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between px-6 py-4 text-left"
            >
                <span className="font-medium text-zinc-800 pr-4">
                    {faq.question}
                </span>
                <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-500" : "text-zinc-400"
                        }`}
                />
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div
                            className="px-6 pb-5 text-sm text-zinc-600 leading-relaxed prose prose-sm max-w-none"
                            dangerouslySetInnerHTML={{ __html: faq.answer }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}


export default function Faq() {
    const [active, setActive] = useState<number | null>(null);

    const { data, isLoading, error } = useQuery<FAQData[]>({
        queryKey: ['faq'],
        queryFn: async () => {
            const res = await axios.get<FAQResponse>(
                "https://www.gangapapers.in/novasac/api/home/faq"
            );
            return res.data.data;
        },
    });

    return (
        <Section id='faq'>
            <Wrapper>
                <div className="w-full flex flex-col gap-2">
                    <Heading>Frequently Asked Questions</Heading>
                    <SubHeading>
                        Everything you need to know about our packaging solutions.
                    </SubHeading>
                </div>

                <div className="space-y-4">
                    {isLoading ? (
                        Array.from({ length: 5 }).map((_, i) => (
                            <FAQSkeleton key={i} />
                        ))
                    ) : error ? (
                        <EmptyState message="Failed to load FAQs. Please try again later." />
                    ) : !data?.length ? (
                        <EmptyState message="No FAQs available." />
                    ) : (
                        data.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                faq={faq}
                                isOpen={active === faq.id}
                                onToggle={() =>
                                    setActive(active === faq.id ? null : faq.id)
                                }
                            />
                        ))
                    )}
                </div>
            </Wrapper>
        </Section>
    );
}