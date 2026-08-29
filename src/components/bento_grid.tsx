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
            title: "Más de 100 Modelos de Embalaje",
            description: "Elige entre una amplia gama de diseños y tamaños de bolsas de embalaje.",
            icon: Package,
        },
        {
            title: "Soluciones de Diseño Personalizado",
            description: "Mejora tu marca con bolsas impresas personalizadas de alta calidad.",
            icon: Palette,
        },
        {
            title: "Atención al Cliente 24/7",
            description: "Nuestro equipo está siempre disponible para ayudarte en cualquier momento.",
            icon: Headset,
        },
        {
            title: "Entrega Exprés",
            description: "Entrega rápida y fiable para todas tus necesidades de embalaje.",
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
