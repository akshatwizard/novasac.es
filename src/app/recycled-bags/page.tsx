import Section from '@/components/ui/section'
import Wrapper from '@/components/ui/wrapper'
import Link from 'next/link'
import {
    Package,
    Sun,
    ShieldCheck,
    Globe,
    ShoppingBag,
    BadgeCheck,
    ArrowRight,
} from 'lucide-react'
import Image from 'next/image'

const stats = [
    { value: 'UNE-EN 15343', label: 'Norma Certificada' },
    { value: 'AENOR', label: 'Organismo de Certificación' },
    { value: '100%', label: 'Contenido Reciclado Trazable' },
    { value: 'EU', label: 'Conforme a la Normativa' },
]

const commitments = [
    {
        icon: <Package className="w-6 h-6" />,
        title: 'Materiales Postconsumo y Postindustriales',
        description:
            'Integramos plásticos reciclados tanto postconsumo como postindustriales en nuestra producción, maximizando la recuperación de materiales y reduciendo la carga en los vertederos.',
    },
    {
        icon: <Sun className="w-6 h-6" />,
        title: 'Huella de Carbono Reducida',
        description:
            'Al elegir materiales reciclados en lugar de polímeros vírgenes, nuestras bolsas generan emisiones de CO₂ significativamente menores a lo largo de todo su ciclo de producción.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'Trazabilidad Certificada',
        description:
            'La trazabilidad completa conforme a la norma UNE-EN 15343 garantiza que cada kilogramo de contenido reciclado sea verificable, dando a nuestros clientes total confianza en su abastecimiento sostenible.',
    },
    {
        icon: <Globe className="w-6 h-6" />,
        title: 'Cumplimiento Medioambiental Europeo',
        description:
            'Nuestros productos cumplen con la normativa medioambiental vigente de la UE, ayudando a las empresas con sus obligaciones normativas y sus requisitos de reporte ESG.',
    },
]

const products = [
    {
        id: 'fibc',
        badge: 'FIBC / Jumbo Bags',
        title: 'Bolsas FIBC con Contenido Reciclado',
        subtitle: 'Bolsones de alto rendimiento para la manipulación sostenible de grandes volúmenes',
        description:
            'Fabricadas con polipropileno (PP) reciclado, nuestras bolsas FIBC están diseñadas para la manipulación segura y fiable de materiales a granel en los sectores industrial, agrícola y de la construcción, sin comprometer la capacidad de carga ni la durabilidad.',
        specs: [
            { label: 'Tipo de Bolsa', value: 'FIBC con Tejido de PP Reciclado' },
            { label: 'Rango de Tamaños', value: '80×80×90 cm — 100×100×120 cm' },
            { label: 'Tejido', value: 'Tejido de PP Reciclado' },
            { label: 'Gramaje del Tejido (GSM)', value: '140 – 220 GSM' },
            { label: 'Carga de Trabajo Segura', value: '500 – 2,000 kg' },
            { label: 'Factor de Seguridad', value: '5:1 / 6:1' },
            { label: 'Forro Interior', value: 'Opcional (LDPE / Ajustado a la Forma)' },
            { label: 'Configuración de Asas', value: '4 Asas en Esquina / Asas Cruzadas' },
            { label: 'Llenado / Descarga', value: 'Personalizable' },
            { label: 'Estabilización UV', value: 'Opcional' },
            { label: 'Certificación', value: 'UN / AENOR / EN 15343' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/recycled/fibc.jpg"
    },
    {
        id: 'ppws',
        badge: 'Sacos Tejidos de PP',
        title: 'Sacos Tejidos de PP con Contenido Reciclado',
        subtitle: 'Sacos duraderos y económicos para uso industrial y agrícola',
        description:
            'Nuestros sacos tejidos de PP reciclado ofrecen una alternativa sostenible para envasar una amplia gama de productos secos a granel. Desde fertilizantes y cereales hasta minerales y productos químicos, estos sacos ofrecen fiabilidad a gran escala incorporando material reciclado verificado.',
        specs: [
            { label: 'Tipo de Bolsa', value: 'Saco Tejido de PP (Reciclado)' },
            { label: 'Rango de Tamaños', value: '50×80 cm — 70×110 cm' },
            { label: 'Tejido', value: 'Tejido de PP Reciclado' },
            { label: 'Gramaje del Tejido (GSM)', value: '70 – 120 GSM' },
            { label: 'Capacidad', value: '10 – 50 kg' },
            { label: 'Forro Interior', value: 'Opcional' },
            { label: 'Laminado', value: 'Opcional' },
            { label: 'Impresión', value: 'Personalizable' },
            { label: 'Estabilización UV', value: 'Opcional' },
            { label: 'Certificación', value: 'Conforme a EN 15343 / AENOR' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/recycled/pp-woven.jpg"
    },
    {
        id: 'garden',
        badge: 'Bolsas de Jardín',
        title: 'Bolsas de Jardín con Contenido Reciclado',
        subtitle: 'Bolsas reutilizables para la recogida de residuos de exterior, fabricadas con PP reciclado',
        description:
            'Diseñadas para la recogida sostenible de residuos de jardín y restos vegetales, estas bolsas combinan la resistencia del polipropileno tejido con un compromiso con el embalaje circular. Disponibles en varios tamaños para aplicaciones municipales, de jardinería y domésticas.',
        specs: [
            { label: 'Tipo', value: 'Big Bag' },
            { label: 'Factor de Seguridad', value: '6:1' },
            { label: 'Tamaños Disponibles', value: '45×45×45 cm / 80×80×80 cm / 50×30×50 cm' },
            { label: 'Sistema de Llenado', value: 'Boca Abierta' },
            { label: 'Sistema de Vaciado', value: 'Base Plana' },
            { label: 'Tejido', value: 'Polipropileno Reciclado No Laminado' },
            { label: 'Asas', value: 'Dos Asas' },
            { label: 'Forro Interior', value: 'Ninguno' },
            { label: 'Carga de Trabajo Segura', value: '500 kg' },
            { label: 'Color', value: 'Blanco' },
            { label: 'Tipo de Uso', value: 'Residuos de Jardín' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/recycled/garden.jpg"
    },
    {
        id: 'garbage',
        badge: 'Bolsas de Basura',
        title: 'Bolsas de Basura con Contenido Reciclado',
        subtitle: 'Bolsas de eliminación de residuos ecológicas fabricadas con LDPE/HDPE reciclado',
        description:
            'Nuestras bolsas de basura con contenido reciclado ofrecen una solución ecológica para la eliminación de residuos generales. Fabricadas con LDPE y HDPE reciclados, conservan toda su resistencia a la perforación y al desgarro, reduciendo significativamente el uso de plásticos vírgenes.',
        specs: [
            { label: 'Tipo', value: 'Big Bag' },
            { label: 'Factor de Seguridad', value: '6:1' },
            { label: 'Tamaños Disponibles', value: '45×45×45 cm / 80×80×80 cm / 50×30×50 cm' },
            { label: 'Sistema de Llenado', value: 'Boca Abierta' },
            { label: 'Sistema de Vaciado', value: 'Base Plana' },
            { label: 'Tejido', value: 'Polipropileno Reciclado No Laminado' },
            { label: 'Asas', value: 'Dos Asas' },
            { label: 'Forro Interior', value: 'Ninguno' },
            { label: 'Carga de Trabajo Segura', value: '500 kg' },
            { label: 'Color', value: 'Blanco' },
            { label: 'Tipo de Uso', value: 'Residuos Generales' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
        images: "/images/recycled/garbage.jpg"
    },
]
export default function RecycledBags() {
    return (
        <>
            <Section className="relative overflow-hidden pt-0">
                <div
                    className="pointer-events-none absolute inset-0 bg-cover bg-center scale-105"
                    style={{
                        backgroundImage: `url('/images/hero/recycle.jpeg')`,
                        backgroundPosition: 'center 0%',
                    }}
                >

                    <div
                        className="absolute inset-0 bg-linear-to-r from-black/95 via-slate-900/80 to-slate-900/40"
                    />
                </div>

                {/* Subtle brand-colored glow on top of image */}
                <div className="pointer-events-none absolute inset-0 z-1 overflow-hidden">
                    <div className="absolute -top-32 -right-32 h-120 w-120 rounded-full bg-primary-500/10 blur-3xl" />
                    <div className="absolute bottom-0 -left-24 h-64 w-64 rounded-full bg-primary-400/10 blur-2xl" />
                </div>

                <Wrapper className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* left copy */}
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-500/15 border border-primary-500/30 px-4 py-1.5 backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
                                <span className="text-primary-300 text-xs font-semibold uppercase tracking-widest">
                                    Embalaje Sostenible Certificado
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                                Bolsas con<br />
                                <strong className="text-primary-600">
                                    Contenido Reciclado
                                </strong>
                            </h1>

                            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl">
                                En Novasac, la sostenibilidad es el eje central de nuestra innovación. Ofrecemos
                                una amplia gama de soluciones de embalaje flexible fabricadas con contenido
                                reciclado, reduciendo el impacto ambiental sin renunciar a un alto rendimiento
                                y durabilidad.
                            </p>

                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
                                Nuestros productos se desarrollan conforme a la norma{' '}
                                <strong className="text-white">UNE-EN 15343</strong>, garantizando la
                                trazabilidad completa de los plásticos reciclados, y están certificados por{' '}
                                <strong className="text-white">AENOR</strong> para garantizar transparencia y fiabilidad.
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
                            Nuestro Compromiso
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-stone-900 ">
                            Sostenibilidad en Cada Paso
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Desde la selección de materias primas hasta la entrega certificada, cada bolsa
                            de contenido reciclado de Novasac se construye sobre una base de responsabilidad
                            medioambiental.
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
                                <h3 className="font-semibold text-stone-900  text-base leading-snug">{c.title}</h3>
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
                            Cuatro Categorías, Un Mismo Compromiso
                        </h2>
                        <p className="text-slate-500 max-w-2xl text-sm">
                            Todas nuestras líneas de producto cuentan con contenido reciclado verificado y
                            certificado según la norma EN 15343 y AENOR, para que tus decisiones de embalaje
                            apoyen la economía circular sin renunciar a nada.
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
                                    <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                                        <BadgeCheck className="w-3.5 h-3.5 text-primary-600" />
                                        <span className="text-xs font-semibold text-slate-700">EN 15343 / AENOR</span>
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
                                        <h3 className="text-2xl md:text-3xl font-bold text-stone-900 ">{p.title}</h3>
                                        <p className={`text-base font-medium ${p.subtitleColor}`}>{p.subtitle}</p>
                                        <p className="text-slate-500 leading-relaxed">{p.description}</p>
                                    </div>

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
                            <h2 className="text-3xl font-bold text-white">¿Listo para pasarte a lo circular?</h2>
                            <p className="text-primary-100 text-lg max-w-xl">
                                Nuestro equipo te ayudará a elegir la bolsa de contenido reciclado adecuada
                                para tu aplicación, volumen y objetivos de sostenibilidad.
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
