import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
export default function About() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full grid grid-cols-1 lg:grid-cols-[500px_1fr] gap-10 md:gap-4'>
                    <div className='w-full h-full'>
                        <h1 className='lg:text-6xl md:text-5xl text-3xl leading-tight font-light text-zinc-900'>
                            Tu socio <br /> en <em className='text-primary-500'>soluciones de embalaje</em> <br />desde 1980
                        </h1>
                    </div>
                    <div className='w-full h-full grid place-content-center'>
                        <p className='text-zinc-700 font-medium lg:text-lg md:text-base text-sm'>
                            NOVASAC ofrece bolsas fabricadas con resistencia, fiabilidad y sostenibilidad. Seleccionamos cuidadosamente materiales de calidad para crear soluciones de embalaje en las que puedes confiar, comprometidos siempre con un futuro más verde.
                            <br />
                            Más que un fabricante, somos un socio — combinando artesanía, innovación y un enfoque centrado en las personas para apoyar tus proyectos y crecer juntos.
                            <br />
                            Somos NOVASAC, y esperamos darte la bienvenida a nuestra familia.
                        </p>
                        <Link
                            href={"/about"}
                            className='px-5 py-2.5 bg-primary-500 text-white w-max mt-8 rounded-md font-medium text-lg flex items-center gap-1'
                        >
                            <ChevronRight size={18} strokeWidth={3} />
                            <span>
                                Sobre Nosotros
                            </span>
                        </Link>
                    </div>
                </div>
            </Wrapper>
        </Section>
    )
}
