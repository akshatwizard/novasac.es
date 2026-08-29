import { Heading, SubHeading } from './ui/headings'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { BadgePercent, Gem, LucideIcon, Truck } from 'lucide-react';
type Data = {
    title: string;
    desc: string;
    icon: LucideIcon
}
export default function WhyChooseUs() {
    const data: Data[] = [
        {
            title: "Calidad Premium",
            desc: "Ofrecemos soluciones de embalaje fiables, innovadoras y de alta calidad, diseñadas para satisfacer las diversas necesidades de las industrias de todo el mundo.",
            icon: Gem
        },
        {
            title: "Tiempo de Entrega",
            desc: "Valoramos tu tiempo y nos comprometemos a entregar soluciones de embalaje de alta calidad con eficiencia, fiabilidad y precisión.",
            icon: Truck
        },
        {
            title: "Precios Competitivos",
            desc: "Nuestros productos tienen precios asequibles sin comprometer la calidad, lo que nos convierte en una opción económica",
            icon: BadgePercent
        },
    ]
    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2'>
                    <Heading>
                        Por Qué Elegirnos
                    </Heading>
                    <SubHeading className='max-w-lg'>
                        Soluciones de embalaje fiables diseñadas para la durabilidad, la personalización y una entrega eficiente en todas las industrias.
                    </SubHeading>
                </div>
                <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    {
                        data.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-6 rounded-xl border border-zinc-200 hover:border-primary-300 hover:shadow-lg transition-all duration-300 bg-white"
                            >
                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary-50 text-primary-500 mb-4 group-hover:scale-110 transition-transform">
                                    <item.icon size={26} />
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-800 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-zinc-500 leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </Wrapper>
        </Section>
    )
}
