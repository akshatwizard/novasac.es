import Section from '@/components/ui/section'
import Wrapper from '@/components/ui/wrapper'
import {
    Recycle,
    Factory,
    Truck,
    Leaf,
    ArrowRight,
    Archive,
    PhoneCall,
    Pickaxe,
    FlaskConical,
    Package,
    Building2,
    Wheat,
    ShieldCheck,
    BadgeCheck,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';



const heroStats = [
    {
        value: "100%",
        label: "Enfoque en el Reciclaje",
        icon: Recycle,
    },
    {
        value: "40+",
        label: "Años de Experiencia",
        icon: Factory,
    },
    {
        value: "EU",
        label: "Soporte de Recogida",
        icon: Truck,
    },
    {
        value: "Eco",
        label: "Eliminación Sostenible",
        icon: Leaf,
    },
];

const trustItems = [
    "Recuperación de Bolsas de Polipropileno",
    "Apoyo al Reciclaje Industrial",
    "Soluciones Sostenibles de Residuos",
    "Eliminación Responsable",
];

const industries = [
    {
        title: "Agricultura",
        icon: Wheat,
    },
    {
        title: "Construcción",
        icon: Building2,
    },
    {
        title: "Producción Alimentaria",
        icon: Package,
    },
    {
        title: "Industria Química",
        icon: FlaskConical,
    },
    {
        title: "Minería",
        icon: Pickaxe,
    },
    {
        title: "Logística",
        icon: Truck,
    },
    {
        title: "Fabricación",
        icon: Factory,
    },
    {
        title: "Reciclaje",
        icon: Recycle,
    },
];

const steps = [
    {
        step: "01",
        title: "Tienes Bolsas FIBC Usadas",
        description:
            "Bolsas tejidas de polipropileno usadas que ya no necesitas.",
        icon: Archive,
    },
    {
        step: "02",
        title: "Contacta con Novasac",
        description:
            "Nuestro equipo hablará contigo sobre las opciones y necesidades de recogida.",
        icon: PhoneCall,
    },
    {
        step: "03",
        title: "Envía las Bolsas",
        description:
            "Organiza la recogida o entrega mediante un proceso acordado.",
        icon: Truck,
    },
    {
        step: "04",
        title: "Reciclamos y Recuperamos",
        description:
            "Los materiales se desvían del vertedero y se procesan de forma responsable.",
        icon: Recycle,
    },
];

const benefits = [
    {
        title: "Recuperación Sostenible",
        description:
            "Reduce los residuos en vertederos y apoya iniciativas responsables de reciclaje.",
        icon: Leaf,
    },
    {
        title: "Experiencia en el Sector",
        description:
            "Décadas de experiencia en embalaje industrial y manejo de materiales.",
        icon: Factory,
    },
    {
        title: "Socio de Confianza",
        description:
            "Trabaja con una empresa de embalaje reconocida que entiende tus necesidades.",
        icon: ShieldCheck,
    },
    {
        title: "Proceso de Recogida Sencillo",
        description:
            "Comunicación fácil y gestiones de recogida sin complicaciones.",
        icon: BadgeCheck,
    },
];

const stats = [
    {
        value: "40+",
        label: "Años de Experiencia",
    },
    {
        value: "1000+",
        label: "Empresas Atendidas",
    },
    {
        value: "EU",
        label: "Experiencia en Embalaje",
    },
    {
        value: "Eco",
        label: "Soluciones Sostenibles",
    },
];

export default function Recycling() {
    return (
        <>
            <Section className="relative overflow-hidden pt-0">
                <div
                    className="pointer-events-none absolute inset-0 bg-cover bg-center scale-105"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000')",
                    }}
                >
                    <div className="absolute inset-0 bg-linear-to-r from-forest-950/95 via-forest-900/70 to-forest-950/30" />
                </div>

                <Wrapper className="relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-forest-500/10 border border-forest-500/30 px-4 py-1.5 backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-forest-500 animate-pulse" />

                                <span className="text-forest-500 text-xs font-semibold uppercase tracking-widest">
                                    Iniciativa de Reciclaje de Bolsas FIBC · Valencia
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                                ¿No sabes qué hacer con tus
                                <br />
                                <strong className="text-forest-500">
                                    bolsas FIBC usadas? <br />
                                </strong>
                                Dánoslas a nosotros.
                            </h1>

                            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl">
                                No mandes tus bolsas de polipropileno tejido usadas al
                                vertedero. Novasac ayuda a las empresas a recuperar,
                                reciclar y reutilizar de forma responsable las bolsas FIBC
                                usadas a través de una iniciativa de recogida dedicada.
                            </p>

                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
                                Ya trabajes en agricultura, construcción, química, producción
                                alimentaria o embalaje industrial, te ofrecemos una vía sencilla
                                y sostenible para eliminar tus bolsas usadas de forma responsable.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-forest-500 hover:bg-forest-600 transition-colors text-white font-semibold px-6 py-3 rounded-full text-sm"
                                >
                                    Contáctanos

                                    <ArrowRight className="w-4 h-4" />
                                </Link>

                                <Link
                                    href="#how"
                                    className="inline-flex items-center gap-2 border border-white/20 hover:border-forest-500 hover:text-forest-500 transition-colors text-slate-300 font-medium px-6 py-3 rounded-full text-sm backdrop-blur-sm"
                                >
                                    Cómo Funciona
                                </Link>
                            </div>
                        </div>

                        {/* Right Stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {heroStats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.label}
                                        className="rounded-2xl bg-white/5 border border-forest-500/20 backdrop-blur-md p-6 flex flex-col gap-3 hover:bg-forest-500/10 hover:border-forest-500/40 transition-all "
                                    >
                                        <Icon className="w-8 h-8 text-forest-500" />

                                        <p className="text-2xl font-bold text-white">
                                            {item.value}
                                        </p>

                                        <p className="text-sm text-slate-300">
                                            {item.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </Wrapper>
            </Section>

            <section className="bg-forest-500 border-y border-white/5">
                <Wrapper className="py-0!">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4">
                        {trustItems.map((item) => (
                            <div
                                key={item}
                                className="flex items-center justify-center gap-3 px-6 py-5 border-b md:border-b-0 lg:border-r border-white/10 last:border-r-0"
                            >
                                <span className="h-2 w-2 rounded-full bg-white/70 shrink-0" />

                                <span className="text-white text-xs uppercase tracking-wider font-semibold text-center">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </section>

            <Section
                id="who"
                className="bg-forest-50"
            >
                <Wrapper>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}

                        <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-soft">
                            <Image
                                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600"
                                alt="Reciclaje"
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Content */}

                        <div>
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-600">
                                Para Quién Es Esto
                            </span>

                            <h2 className="mt-4 text-4xl font-bold text-forest-500">
                                Empresas Que Buscan Una Solución Sostenible de Eliminación
                            </h2>

                            <p className="mt-6 text-content-muted leading-relaxed">
                                Trabajamos con empresas de múltiples sectores que utilizan
                                habitualmente bolsas de polipropileno tejido y bolsas FIBC.
                            </p>

                            <p className="mt-4 text-content-muted leading-relaxed">
                                En lugar de mandar las bolsas usadas al vertedero, Novasac
                                ayuda a las empresas a recuperar y reciclar materiales de
                                embalaje mediante una sencilla iniciativa de recogida y
                                reciclaje.
                            </p>

                            <div className="grid grid-cols-2 gap-3 mt-8">
                                {industries.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex items-center gap-3 rounded-2xl bg-white border border-border-soft p-4 hover:border-forest-500 hover:bg-forest-100 transition-all"
                                        >
                                            <Icon className="w-5 h-5 text-forest-500 shrink-0" />

                                            <span className="text-sm font-medium text-content">
                                                {item.title}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </Section>

            <Section
                id="how"
                className="bg-white"
            >
                <Wrapper>
                    <div className="max-w-3xl">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-600">
                            Cómo Funciona
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-forest-500">
                            Un Sencillo Proceso de Reciclaje en Cuatro Pasos
                        </h2>

                        <p className="mt-5 text-content-muted leading-relaxed">
                            Deshacerte de tus bolsas FIBC usadas no tiene por qué ser
                            complicado. Hemos diseñado un proceso sencillo que ayuda a
                            las empresas a eliminar el embalaje de forma responsable.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-14">
                        {steps.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.step}
                                    className="relative rounded-3xl border border-border-soft bg-white p-8 hover:bg-forest-50 transition-all hover:shadow-soft"
                                >
                                    {index !== steps.length - 1 && (
                                        <div className="hidden xl:flex absolute -right-4 top-10 z-10 h-8 w-8 rounded-full bg-forest-500 items-center justify-center text-white">
                                            <ArrowRight className="w-4 h-4" />
                                        </div>
                                    )}

                                    <span className="text-xs font-bold tracking-widest uppercase text-forest-500">
                                        Paso {item.step}
                                    </span>

                                    <Icon className="w-10 h-10 text-forest-500 mt-5" />

                                    <h3 className="mt-5 text-lg font-semibold text-content">
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 text-sm leading-relaxed text-content-muted">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </Wrapper>
            </Section>

            <Section
                id="why"
                className="bg-forest-50"
            >
                <Wrapper>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-500">
                                Por Qué Novasac
                            </span>

                            <h2 className="mt-4 text-4xl font-bold text-forest-500">
                                Un Socio Responsable Para la Recuperación de Bolsas FIBC
                            </h2>

                            <p className="mt-6 text-content-muted leading-relaxed">
                                Combinamos décadas de experiencia en embalaje con un
                                compromiso con la sostenibilidad, ayudando a las empresas
                                a encontrar alternativas prácticas al vertedero.
                            </p>

                            <div className="mt-10 space-y-4">
                                {benefits.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex gap-4 bg-white border-l-4 border-forest-500 rounded-2xl p-5 shadow-sm"
                                        >
                                            <Icon className="w-6 h-6 text-forest-500 shrink-0 mt-1" />

                                            <div>
                                                <h3 className="font-semibold text-forest-500">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-2 text-sm text-content-muted leading-relaxed">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Image */}

                        <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-soft">
                            <Image
                                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600"
                                alt="Sostenibilidad"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </Wrapper>
            </Section>

            <Section
                id="about"
                className="bg-forest-500"
            >
                <Wrapper>
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white">
                                Sobre Novasac
                            </span>

                            <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
                                Décadas de Experiencia en Embalaje
                            </h2>

                            <p className="mt-6 text-white leading-relaxed">
                                Novasac lleva décadas dando servicio a los mercados de
                                embalaje industrial y comercial, ayudando a empresas de
                                toda Europa a conseguir soluciones fiables de embalaje
                                en polipropileno tejido.
                            </p>

                            <p className="mt-4 text-white leading-relaxed">
                                A través de esta iniciativa de reciclaje, ayudamos a las
                                empresas a desviar sus bolsas FIBC usadas del vertedero
                                hacia canales de recuperación más responsables.
                            </p>

                            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-white/10 border border-white/20 mt-10">
                                {stats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="bg-white/5 p-8 text-center"
                                    >
                                        <p className="text-4xl font-bold text-white">
                                            {item.value}
                                        </p>

                                        <p className="text-xs uppercase tracking-widest text-white/90 mt-2">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right */}

                        <div className="flex flex-col items-center gap-8">
                            <div className="w-full rounded-3xl bg-white p-10 flex justify-center">
                                <Image
                                    src="/images/logo/logo.png"
                                    alt="Novasac"
                                    width={260}
                                    height={100}
                                    className="h-auto"
                                />
                            </div>

                            <blockquote className="text-center text-white italic leading-relaxed max-w-lg">
                                “Ayudamos a las empresas a avanzar hacia soluciones más
                                sostenibles de recuperación y reciclaje de embalaje.”
                            </blockquote>
                        </div>
                    </div>
                </Wrapper>
            </Section>


            <section className="bg-forest-800">
                <Wrapper className="py-20">
                    <div className="text-center max-w-4xl mx-auto">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-light">
                            Empieza Ahora
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-white">
                            ¿Listo Para Reciclar tus Bolsas FIBC Usadas?
                        </h2>

                        <p className="mt-6 text-white/80 leading-relaxed max-w-2xl mx-auto">
                            Contacta hoy mismo con nuestro equipo para hablar sobre las
                            opciones de recogida, el apoyo al reciclaje y las soluciones
                            de eliminación sostenible.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mt-10">
                            <Link
                                href="/contact"
                                className="
                  inline-flex items-center gap-2
                  bg-white
                  text-forest-900
                  px-8 py-4
                  rounded-full
                  font-semibold
                  hover:bg-forest-50
                  transition-colors
                "
                            >
                                Contacta con Nuestro Equipo

                                <ArrowRight className="w-4 h-4" />
                            </Link>

                            <Link
                                href="/contact"
                                className="
                  inline-flex items-center gap-2
                  border border-white/20
                  text-white
                  px-8 py-4
                  rounded-full
                  font-semibold
                  hover:border-forest-light
                  hover:text-forest-light
                  transition-colors
                "
                            >
                                Solicita Información de Recogida
                            </Link>
                        </div>
                    </div>
                </Wrapper>
            </section>

            <Section
                id="contact"
            // className="bg-forest-50"
            >
                <Wrapper>
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-forest-500">
                            Información de Contacto
                        </span>

                        <h2 className="mt-4 text-4xl font-bold text-forest-500">
                            Hablemos de Reciclaje
                        </h2>

                        <p className="mt-5 text-content-muted">
                            Ponte en contacto con nuestro equipo para consultas de
                            recogida, iniciativas de sostenibilidad o apoyo en embalaje.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6 mt-14">
                        <div
                            className="bg-white border border-border-soft rounded-3xl p-8 hover:shadow-soft hover:border-forest-700 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-forest-100 flex items-center justify-center">
                                <Mail className="w-6 h-6 text-forest-500" />
                            </div>

                            <p className="mt-6 text-xs uppercase tracking-widest text-content-soft">
                                Email
                            </p>

                            <Link
                                href="mailto:laura.sanjuan@novasac.es"
                                className="block mt-2 font-semibold text-content hover:text-forest-500"
                            >
                                laura.sanjuan@novasac.es
                            </Link>
                        </div>

                        <div
                            className="bg-white border border-border-soft rounded-3xl p-8 hover:shadow-soft hover:border-forest-700 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-forest-100 flex items-center justify-center">
                                <Phone className="w-6 h-6 text-forest-500" />
                            </div>

                            <p className="mt-6 text-xs uppercase tracking-widest text-content-soft">
                                Teléfono
                            </p>

                            <Link
                                href="tel:+34628188044"
                                className="block mt-2 font-semibold text-content hover:text-forest-500"
                            >
                                +34 628 188 044
                            </Link>
                        </div>

                        <div
                            className=" bg-white border border-border-soft rounded-3xl p-8 hover:shadow-soft hover:border-forest-700 transition-all"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-forest-100 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-forest-500" />
                            </div>

                            <p className="mt-6 text-xs uppercase tracking-widest text-content-soft">
                                Ubicación
                            </p>

                            <p className="mt-2 font-semibold text-content">
                                Valencia, España
                            </p>
                        </div>
                    </div>
                </Wrapper>
            </Section>
        </>
    )
}
