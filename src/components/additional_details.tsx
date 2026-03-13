import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Headset, LucideIcon, Package, Palette, Truck } from 'lucide-react'

type Details = {
    title: string
    description: string
    icon: LucideIcon
}
export default function AdditionalDetails() {
    const details: Details[] = [
        {
            title: "Over 100 Packaging Models",
            description: "Choose from a wide range of packaging bag designs and sizes.",
            icon: Package,
        },
        {
            title: "Custom Design Solutions",
            description: "Enhance your brand with high-quality custom printed bags.",
            icon: Palette,
        },
        {
            title: "24/7 Customer Support",
            description: "Our team is always available to assist you anytime.",
            icon: Headset,
        },
        {
            title: "Express Delivery",
            description: "Fast and reliable delivery for all your packaging needs.",
            icon: Truck,
        },
    ];

    return (
        <Section>
            <Wrapper>
                <div className='w-full grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-3'>
                    {
                        details.map((item, idx) => (
                            <div
                                key={idx}
                                className='w-full h-full rounded-xl bg-primary-100 p-5 flex flex-col gap-5'
                            >
                                <item.icon size={48} strokeWidth={1} className='text-primary-500 shrink-0' />

                                <div className='flex-1 flex flex-col gap-1'>
                                    <span className='text-primary-500 font-semibold lg:text-xl md:text-lg text-base font-sans!'>
                                        {item.title}
                                    </span>
                                    <span className='text-sm text-primary-400'>
                                        {item.description}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
