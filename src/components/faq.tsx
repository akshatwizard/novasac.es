'use client';
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { useState } from 'react';
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What types of packaging bags do you manufacture?",
        answer:
            "We manufacture a wide range of packaging bags including courier bags, poly bags, laminated bags, food-grade packaging bags, and custom printed bags suitable for various industries.",
    },
    {
        question: "Can I order custom printed bags with my company logo?",
        answer:
            "Yes, we offer custom logo printing and branding solutions. You can choose the size, material, and print design to match your brand requirements.",
    },
    {
        question: "What is the minimum order quantity (MOQ)?",
        answer:
            "Our minimum order quantity depends on the type of bag and customization requirements. Generally, bulk orders start from a few thousand pieces for custom printed bags.",
    },
    {
        question: "Are your packaging bags suitable for food products?",
        answer:
            "Yes, we provide food-grade packaging bags made from safe materials that help maintain freshness and meet hygiene standards for food storage and transport.",
    },
    {
        question: "How long does delivery take after placing an order?",
        answer:
            "Production and delivery timelines vary depending on the order size and customization. Typically, orders are processed and delivered within 7–14 business days.",
    },
];

export default function Faq() {
    const [active, setActive] = useState<number | null>(null);

    const toggle = (index: number) => {
        setActive(active === index ? null : index);
    };

    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2'>
                    <Heading>
                        Frequently Asked Questions
                    </Heading>
                    <SubHeading>
                        Everything you need to know about our packaging solutions.
                    </SubHeading>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = active === index;

                        return (
                            <div
                                key={index}
                                className="border border-zinc-200 rounded-xl overflow-hidden"
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex items-center justify-between px-6 py-4 text-left"
                                >
                                    <span className="font-medium text-zinc-800">
                                        {faq.question}
                                    </span>

                                    <ChevronDown
                                        className={`transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-500" : ""
                                            }`}
                                        size={20}
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
                                            <div className="px-6 pb-5 text-sm text-zinc-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

            </Wrapper>
        </Section>
    )
}
