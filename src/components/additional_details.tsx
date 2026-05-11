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
    ]

    return (
        <Section>
            <Wrapper>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>

                    {details.map((item, idx) => (
                        <div
                            key={idx}
                            className='group border border-zinc-200 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1'
                        >

                            {/* Icon */}
                            <div className='w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 text-primary-500 group-hover:scale-110 transition'>
                                <item.icon size={26} strokeWidth={1.5} />
                            </div>

                            <div className='flex flex-col gap-1'>
                                <h3 className='font-semibold text-primary-500 text-lg'>
                                    {item.title}
                                </h3>

                                <p className='text-sm text-zinc-500 leading-tight'>
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </Wrapper>
        </Section>
    )
}