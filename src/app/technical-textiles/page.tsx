import Section from '@/components/ui/section'
import Wrapper from '@/components/ui/wrapper'
import Link from 'next/link'
import {
    Layers,
    Droplets,
    ShieldCheck,
    Wind,
    ShoppingBag,
    BadgeCheck,
    ArrowRight,
} from 'lucide-react'
import Image from 'next/image'

const stats = [
    { value: 'PP / PET', label: 'Materiales Principales' },
    { value: '600 g/m²', label: 'Peso Máximo del Tejido' },
    { value: '5 Categorías', label: 'Productos Especializados' },
    { value: 'Personalizado', label: 'Tamaños Disponibles' },
]

const commitments = [
    {
        icon: <Layers className="w-6 h-6" />,
        title: 'Diseñado para la Resistencia Industrial',
        description:
            'Cada producto está fabricado con tejidos técnicos de alto rendimiento —PP tejido, PET, HDPE— elegidos específicamente según las exigencias de su aplicación.',
    },
    {
        icon: <Droplets className="w-6 h-6" />,
        title: 'Impermeable y Preparado para Cualquier Clima',
        description:
            'Desde láminas impermeables para estanques hasta membranas hidrófugas para tejados, nuestros textiles técnicos mantienen protegido el contenido en cualquier entorno.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Construcción Estabilizada frente a los Rayos UV',
        description:
            'Todos nuestros productos para exterior están estabilizados frente a los rayos UV hasta 1.500 horas de exposición, garantizando la integridad estructural y una larga vida útil bajo la luz solar directa.',
    },
    {
        icon: <Wind className="w-6 h-6" />,
        title: 'Especificaciones Totalmente Personalizables',
        description:
            'Tamaño, peso, color, tipo de costura, cierre y recubrimiento: todos los parámetros se pueden configurar según tus necesidades operativas exactas.',
    },
]

const products = [
    {
        id: 'geotextile',
        badge: 'Bolsas Geotextiles',
        title: 'Bolsas Geotextiles',
        subtitle: 'Control de erosión, protección de costas, sacos terreros y barreras contra inundaciones',
        description:
            'Fabricadas con polipropileno (PP) o poliéster (PET) tejido o no tejido de gran resistencia, nuestras bolsas geotextiles permiten el paso libre del agua mientras retienen la tierra o la arena. Resistentes a los rayos UV y disponibles en tamaños personalizados, son ideales tanto para instalaciones civiles temporales como permanentes.',
        features: [
            'Disponible en tejido o en no tejido punzonado por agujas',
            'Permite el paso del agua mientras retiene la tierra o la arena',
            'Resistente a los rayos UV para exposición prolongada al exterior',
            'Costuras reforzadas cosidas o termoselladas',
            'Aplicaciones: protección de costas, barreras contra inundaciones, control de erosión',
        ],
        specs: [
            { label: 'Material', value: 'PP / PET Tejido o No Tejido' },
            { label: 'Tipo de Tejido', value: 'Tejido o No Tejido Punzonado por Agujas' },
            { label: 'Peso del Tejido', value: '200 – 600 g/m²' },
            { label: 'Tamaño de Bolsa / Capacidad', value: '1 – 3 m³ (personalizable)' },
            { label: 'Resistencia a la Tracción', value: '30 – 60 kN/m' },
            { label: 'Alargamiento a la Rotura', value: '15 – 25%' },
            { label: 'Permeabilidad', value: '0.1 – 1.0 m/s' },
            { label: 'Resistencia UV', value: '≥ 500 horas' },
            { label: 'Color', value: 'Blanco, Negro, Estabilizado UV' },
            { label: 'Borde / Costura', value: 'Cosido reforzado o termosellado' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/textiles/geotextile.jpeg"
    },
    {
        id: 'pond-liner',
        badge: 'Bolsas para Estanques',
        title: 'Bolsas para Estanques',
        subtitle: 'Contención temporal de agua, acuicultura, paisajismo y agricultura',
        description:
            'Fabricadas con HDPE, LLDPE o PP recubierto de PVC, todos ellos impermeables, nuestras bolsas para estanques evitan fugas y protegen la calidad del agua. Duraderas y resistentes a los rayos UV para un uso prolongado al aire libre, están disponibles en una amplia gama de tamaños, desde pequeños estanques decorativos hasta grandes depósitos agrícolas.',
        features: [
            'Fabricadas con HDPE, LLDPE o PP recubierto de PVC, impermeables',
            'Evita fugas y protege la calidad del agua',
            'Estabilizadas frente a los rayos UV para ≥ 1.000 horas de exposición al exterior',
            'Costuras termoselladas o soldadas para una estanqueidad total',
            'Aplicaciones: acuicultura, paisajismo, almacenamiento temporal de agua',
        ],
        specs: [
            { label: 'Material', value: 'HDPE, LLDPE, PP recubierto de PVC' },
            { label: 'Grosor del Tejido', value: '0.2 – 0.8 mm' },
            { label: 'Tamaño de Bolsa / Capacidad', value: 'Personalizado, normalmente entre 1 y 10 m³' },
            { label: 'Resistencia a la Tracción', value: '20 – 50 MPa' },
            { label: 'Alargamiento a la Rotura', value: '10 – 20%' },
            { label: 'Impermeabilización', value: 'Total: evita fugas y pérdida de agua' },
            { label: 'Resistencia UV', value: '≥ 1.000 horas' },
            { label: 'Color', value: 'Negro / Personalizado' },
            { label: 'Costura / Borde', value: 'Termosellada o soldada' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/textiles/pond-liner.jpeg"
    },
    {
        id: 'roof-underlayment',
        badge: 'Bolsas para Membranas de Tejado',
        title: 'Bolsas para Membranas de Tejado',
        subtitle: 'Embalaje y transporte de tejas, membranas y materiales para tejados',
        description:
            'Fabricadas con polipropileno tejido o no tejido con recubrimiento hidrófugo, estas bolsas protegen los materiales para tejados de la humedad durante el transporte y el almacenamiento. Disponibles con solapa, fuelle o boca abierta, se adaptan a los envases estándar de materiales para tejados.',
        features: [
            'El recubrimiento hidrófugo protege el contenido de la lluvia y la humedad',
            'Alta resistencia a la tracción y a la abrasión',
            'Disponible con cierre de solapa, fuelle o boca abierta',
            'Disponible suelta o enrollada para una logística flexible',
            'Aplicaciones: transporte, almacenamiento y protección de materiales para tejados',
        ],
        specs: [
            { label: 'Material', value: 'Polipropileno (PP) Tejido o No Tejido' },
            { label: 'Peso del Tejido', value: '80 – 200 g/m²' },
            { label: 'Tamaño de Bolsa / Capacidad', value: 'Tamaños personalizados' },
            { label: 'Resistencia a la Tracción', value: '15 – 40 kN/m' },
            { label: 'Resistencia a la Humedad', value: 'Recubrimiento hidrófugo' },
            { label: 'Sellado / Cierre', value: 'Solapa, fuelle o boca abierta' },
            { label: 'Formato de Bolsa', value: 'Suelta o enrollada' },
            { label: 'Color', value: 'Negro, natural o personalizado' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/textiles/roof-underlayment.jpeg"
    },
    {
        id: 'lumber-wrap',
        badge: 'Bolsas para Envolver Madera',
        title: 'Bolsas para Envolver Madera',
        subtitle: 'Envoltura y transporte de madera, productos de madera y materiales en planchas',
        description:
            'Fabricadas con tejido resistente y transpirable de PP o PE, nuestras envolturas para madera protegen la madera de la suciedad, la humedad y la exposición a los rayos UV, manteniendo a la vez una permeabilidad parcial para la ventilación. Disponibles en tamaños personalizados para cualquier dimensión de madera, con ojales reforzados para una fijación segura.',
        features: [
            'Tejido transpirable de PP/PE con recubrimiento de PVC o PE',
            'Protege de la suciedad, la humedad y la exposición a los rayos UV',
            'Semipermeable para una ventilación natural de la madera',
            'Bordes dobladillados con ojales reforzados',
            'Aplicaciones: obras de construcción, almacenes, camiones, agricultura',
        ],
        specs: [
            { label: 'Material', value: 'PP/PE Tejido con Recubrimiento de PVC o PE' },
            { label: 'Peso del Tejido', value: '150 – 500 g/m²' },
            { label: 'Resistencia a la Tracción', value: '30 – 70 kN/m' },
            { label: 'Resistencia al Desgarro', value: '50 – 200 N' },
            { label: 'Impermeabilización', value: 'Recubrimiento total: a prueba de penetración de agua' },
            { label: 'Resistencia UV', value: '500 – 1.500 horas' },
            { label: 'Acabado del Borde', value: 'Dobladillado con ojales reforzados' },
            { label: 'Color', value: 'Azul, Verde, Plateado, Personalizado' },
            { label: 'Rango de Tamaños', value: '1×2 m hasta 12×20 m' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/textiles/lumber-wrap-bags.jpeg"
    },
    {
        id: 'tarpaulin',
        badge: 'Lonas',
        title: 'Lonas Textiles Industriales',
        subtitle: 'Cobertura de mercancías, obras de construcción, productos agrícolas y refugios temporales',
        description:
            'Nuestras lonas de uso industrial están fabricadas con PP/PE tejido con recubrimiento de PVC o PE, ofreciendo un rendimiento impermeable, resistente al desgarro y estabilizado frente a los rayos UV en las aplicaciones exteriores más exigentes. Los bordes reforzados con ojales permiten una instalación rápida y segura.',
        features: [
            'PP/PE tejido con recubrimiento de PVC o PE: impermeable y resistente al desgarro',
            'Estabilizadas frente a los rayos UV para 500 – 1.500 horas de exposición al exterior',
            'Bordes reforzados con ojales para una fijación fácil y segura',
            'Disponibles en una amplia gama de tamaños y pesos de tejido',
            'Aplicaciones: construcción, almacenes, agricultura, refugios temporales',
        ],
        specs: [
            { label: 'Material', value: 'PP/PE Tejido con Recubrimiento de PVC o PE' },
            { label: 'Peso del Tejido', value: '150 – 500 g/m²' },
            { label: 'Resistencia a la Tracción', value: '30 – 70 kN/m' },
            { label: 'Resistencia al Desgarro', value: '50 – 200 N' },
            { label: 'Impermeabilización', value: 'Recubrimiento total: a prueba de penetración de agua' },
            { label: 'Resistencia UV', value: '500 – 1.500 horas' },
            { label: 'Acabado del Borde', value: 'Dobladillado con ojales reforzados' },
            { label: 'Color', value: 'Azul, Verde, Plateado, Personalizado' },
            { label: 'Rango de Tamaños', value: '1×2 m hasta 12×20 m' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/textiles/tarpaulin.jpeg"
    },
]

export default function TechnicalTextile() {
    return (
        <>
            {/* ── Hero ── */}
            <Section className="relative overflow-hidden pt-0">
                {/* Background image — industrial/textile manufacturing */}
                <div
                    className="pointer-events-none absolute inset-0 bg-cover bg-center scale-105"
                    style={{
                        backgroundImage: `url('/images/hero/textile.jpeg')`,
                        backgroundPosition: 'center 30%',
                    }}
                >

                    <div
                        className="absolute inset-0 bg-linear-to-r from-stone-900/95 via-stone-900/40 to-stone-900/20"
                    />
                </div>

                <Wrapper className="relative z-10">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* left copy */}
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-500/15 border border-primary-500/30 px-4 py-1.5 backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
                                <span className="text-primary-300 text-xs font-semibold uppercase tracking-widest">
                                    Aplicaciones Industriales y Comerciales
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                                Textiles<br />
                                <strong className="text-primary-600">
                                    Técnicos
                                </strong>
                            </h1>

                            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl">
                                Nuestra gama de bolsas de textil técnico está diseñada para cumplir los más
                                altos estándares de resistencia, durabilidad y funcionalidad, pensada para
                                aplicaciones industriales, agrícolas y de construcción donde el embalaje
                                estándar simplemente no es suficiente.
                            </p>

                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
                                Desde el control de erosión con geotextiles hasta las láminas impermeables
                                para estanques y las lonas industriales, Novasac ofrece{' '}
                                <strong className="text-white">cinco categorías de productos especializados</strong>,
                                cada una totalmente personalizable según tus especificaciones exactas.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 transition-colors text-white font-semibold px-6 py-3 rounded-full text-sm"
                                >
                                    Solicita un Presupuesto
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#products"
                                    className="inline-flex items-center gap-2 border border-slate-600 hover:border-primary-500 hover:text-primary-300 transition-colors text-slate-300 font-medium px-6 py-3 rounded-full text-sm backdrop-blur-sm"
                                >
                                    Explora los Productos
                                </Link>
                            </div>
                        </div>

                        {/* right stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((s) => (
                                <div
                                    key={s.label}
                                    className="rounded-2xl bg-white/5 border border-primary-500/20 backdrop-blur-md p-6 flex flex-col gap-2 hover:bg-primary-500/10 hover:border-primary-400/40 transition-colors"
                                >
                                    <p className="text-2xl font-bold text-white">{s.value}</p>
                                    <p className="text-sm text-slate-400">{s.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Wrapper>
            </Section>

            {/* ── Commitment section ── */}
            <Section className="bg-white">
                <Wrapper>
                    <div className="flex flex-col gap-4 max-w-2xl">
                        <span className="text-xs font-medium uppercase tracking-widest text-primary-600">
                            Por Qué Textiles Técnicos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-stone-900">
                            Diseñados para Condiciones que las Bolsas Estándar no Pueden Soportar
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Los productos de textil técnico van más allá del embalaje convencional. Cada
                            solución está diseñada para funcionar bajo tensiones ambientales y mecánicas
                            específicas, desde la erosión costera hasta la exposición prolongada a los
                            rayos UV en exteriores.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {commitments.map((c) => (
                            <div
                                key={c.title}
                                className="group flex flex-col gap-4 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-soft hover:-translate-y-1 transition-all duration-300 p-6"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-600 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-colors">
                                    {c.icon}
                                </div>
                                <h3 className="font-semibold text-stone-900 text-base leading-snug">{c.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{c.description}</p>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* ── Product sections ── */}
            <Section id="products" className="bg-slate-50">
                <Wrapper>
                    <div className="text-center flex flex-col items-center gap-3">
                        <span className="text-xs font-medium uppercase tracking-widest text-primary-600">
                            Gama de Productos
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-stone-900 max-w-xl">
                            Cinco Categorías Especializadas, Un Socio Experto
                        </h2>
                        <p className="text-slate-500 max-w-2xl text-sm">
                            Todos nuestros productos están disponibles con dimensiones, pesos de tejido,
                            recubrimientos y cierres personalizados, para que tu especificación nunca sea
                            un compromiso.
                        </p>
                    </div>

                    <div className="flex flex-col gap-16">
                        {products.map((p, i) => (
                            <div
                                key={p.id}
                                id={p.id}
                                className={`grid lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                                    }`}
                            >
                                {/* Image placeholder panel */}
                                <div
                                    className={`relative rounded-3xl overflow-hidden bg-linear-to-br ${p.panelGradient} border ${p.border} aspect-4/3 flex items-center justify-center`}
                                >
                                    <div className="flex flex-col items-center gap-3 text-center p-8">
                                        {/* <div className="w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center shadow-lg">
                                            <ShoppingBag className="w-8 h-8" />
                                        </div>
                                        <p className={`font-bold text-lg ${p.subtitleColor}`}>{p.badge}</p>
                                        <p className="text-slate-500 text-sm">Product image coming soon</p> */}
                                        <Image
                                            src={p.images}
                                            alt={p.title}
                                            fill
                                            sizes='(max-width: 1024px) 100vw, 50vw'
                                            className='w-full h-full object-contain'
                                        />
                                    </div>

                                    {/* certification badge */}
                                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                                        <BadgeCheck className="w-3.5 h-3.5 text-primary-600" />
                                        <span className="text-xs font-semibold text-slate-700">Especificaciones Personalizadas</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-3">
                                        <span
                                            className={`inline-flex w-fit text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full ${p.badgeBg}`}
                                        >
                                            {p.badge}
                                        </span>
                                        <h3 className="text-2xl md:text-3xl font-bold text-stone-900">{p.title}</h3>
                                        <p className={`text-base font-medium ${p.subtitleColor}`}>{p.subtitle}</p>
                                        <p className="text-slate-500 leading-relaxed">{p.description}</p>
                                    </div>

                                    {/* Key features list */}
                                    <ul className="flex flex-col gap-2">
                                        {p.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Specs table */}
                                    <div className={`rounded-2xl border ${p.border} overflow-hidden`}>
                                        <div
                                            className={`px-5 py-3 bg-linear-to-r ${p.panelGradient} border-b ${p.border}`}
                                        >
                                            <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
                                                Especificaciones Técnicas
                                            </p>
                                        </div>
                                        <div className="divide-y divide-slate-100">
                                            {p.specs.map((spec) => (
                                                <div
                                                    key={spec.label}
                                                    className="flex items-center justify-between px-5 py-2.5 bg-white"
                                                >
                                                    <span className="text-sm text-slate-500 font-medium">{spec.label}</span>
                                                    <span className="text-sm text-slate-800 font-semibold text-right max-w-[55%]">
                                                        {spec.value}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href="/contact"
                                        className={`inline-flex w-fit items-center gap-2 ${p.ctaBg} transition-colors text-white font-semibold px-6 py-3 rounded-full text-sm`}
                                    >
                                        Solicita Muestras
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            {/* ── CTA Banner ── */}
            <Section className="bg-linear-to-r from-primary-500 to-primary-600">
                <Wrapper>
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                        <div className="flex flex-col gap-3">
                            <h2 className="text-3xl font-bold text-white">¿Necesitas un textil técnico especializado?</h2>
                            <p className="text-primary-100 text-lg max-w-xl">
                                Nuestro equipo te ayudará a configurar el producto adecuado —material, peso,
                                tamaño y recubrimiento— para tu aplicación y entorno exactos.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 shrink-0">
                            <Link
                                href="/contact"
                                className="bg-white text-primary-700 hover:bg-primary-50 transition-colors font-bold px-8 py-3.5 rounded-full text-sm"
                            >
                                Contacta con Nuestro Equipo →
                            </Link>
                            <Link
                                href="/custom-made-bags"
                                className="border border-white/40 hover:border-white/80 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
                            >
                                Bolsas a Medida
                            </Link>
                        </div>
                    </div>
                </Wrapper>
            </Section>
        </>
    )
}
