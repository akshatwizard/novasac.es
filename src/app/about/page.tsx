"use client";

import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import { BadgeCheck, Layers, LucideIcon, Settings2, ShieldCheck, Wallet } from "lucide-react";
import { motion, Variants } from "motion/react";
import Image from "next/image";


const teamMembers: TeamMember[] = [
    {
        initials: "LS",
        name: "Laura Sanjuan",
        role: "Fundadora y Líder",
        experience: "40+ years",
        bio: "Su liderazgo, conocimiento del sector y visión estratégica guían el crecimiento y la innovación de la empresa en cada proyecto.",
        bg: "bg-primary-100",
        text: "text-primary-700",
        border: "border-primary-200",
        bar: "bg-primary-600",
        image: "/images/about/team-1.jpeg"
    },
    {
        initials: "FS",
        name: "Fernando Seguí Sala",
        role: "Presidente",
        experience: "Business Dev",
        bio: "",
        bg: "bg-primary-100",
        text: "text-primary-700",
        border: "border-primary-200",
        bar: "bg-primary-600",
        image: "/images/about/team-2.jpeg"
    },
    {
        initials: "CA",
        name: "Carmen Sanchez",
        role: "Administración",
        experience: "Operations",
        bio: "Gestiona las operaciones administrativas y garantiza que los procesos diarios funcionen de forma fluida y eficiente en toda la organización.",
        bg: "bg-primary-50",
        text: "text-primary-600",
        border: "border-primary-100",
        bar: "bg-primary-500",
        image: "/images/about/carmen.jpeg"
    },
    {
        initials: "CM",
        name: "Carmina",
        role: "",
        experience: "",
        bio: "",
        bg: "bg-primary-100",
        text: "text-primary-700",
        border: "border-primary-200",
        bar: "bg-primary-600",
        image: "/images/about/carmina.jpeg"
    },
];

const stats: StatItem[] = [
    { num: "40+", label: "Años de experiencia" },
    { num: "3", label: "Generaciones de experiencia" },
    // { num: "4", label: "Industries served" },
    // { num: "1", label: "Trusted family legacy" },
];

const timelineSteps: TimelineStep[] = [
    { label: "Embalaje Tradicional", sub: "Fundación", dot: "bg-stone-300" },
    { label: "Valsac", sub: "Crecimiento", dot: "bg-primary-400" },
    { label: "Novasac", sub: "Actualidad", dot: "bg-primary-600" },
];

const industries: string[] = [
    "Agricultura",
    "Productos Alimentarios",
    "Productos Químicos",
    "Bienes Industriales",
];

const features: FeatureItem[] = [
    { label: "Máxima Calidad", icon: BadgeCheck },
    { label: "Fiable", icon: ShieldCheck },
    { label: "Bolsas Personalizadas", icon: Settings2 },
    { label: "Diseño Adaptado a Cada Sector", icon: Layers },
    { label: "Prácticas, Duraderas y Económicas", icon: Wallet },
];


export default function AboutUs() {
    return (
        <main className="text-stone-800 min-h-screen">
            <Section className="relative overflow-hidden">
                <div
                    className="hidden md:inline-block absolute top-0 right-0 md:w-1/2 w-4/5 h-full bg-primary-50 overflow-hidden"
                    style={{ clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)" }}
                >
                    <Image src={"/images/hero/about.png"} fill alt="bolsas-cada-limpieza" className="w-full h-full object-cover object-center" />
                </div>
                <Wrapper className="p-0!">
                    <div className="relative overflow-hidden border-b border-stone-200">
                        <div className="relative py-12 md:py-20 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <motion.p
                                    className=" text-xs tracking-[0.2em] uppercase text-primary-500 mb-6"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    Sobre Novasac
                                </motion.p>

                                <motion.h1
                                    className="font-mono text-5xl md:text-7xl font-light leading-[1.05] text-stone-900 mb-8"
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                                >
                                    Embalaje<br />
                                    <strong className="text-primary-600">Flexible,</strong><br />
                                    Construido con<br />Legado
                                </motion.h1>

                                <motion.p
                                    className="font-normal text-stone-500 leading-relaxed max-w-sm"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                                >
                                    De las raíces familiares a la innovación moderna: ofrecemos
                                    soluciones de embalaje fiables y personalizadas para industrias de todo el mundo.
                                </motion.p>
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper>
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                className="bg-white border border-stone-200 rounded-2xl p-6 shadow-lg shadow-slate-500/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.08 }}
                            >
                                <div className="font-mono lg:text-6xl md:text-4xl text-3xl font-semibold text-primary-600 mb-1">
                                    {stat.num}
                                </div>
                                <div className=" text-xs lg:text-base md:text-sm text-stone-400 leading-snug">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper>
                    {/* ── Section 01 — Journey ── */}
                    <div>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                            <motion.div
                                className="aspect-4/3 rounded-3xl overflow-hidden border border-stone-200"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {/* <ImagePlaceholder
                                    label="Journey image"
                                    icon={
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                    }
                                /> */}
                                <Image
                                    src={"/images/about/Journey-of-progress.jpeg"}
                                    width={600}
                                    height={450}
                                    alt="Un Camino de Progreso"
                                    className="w-full h-full scale-x-110"
                                />
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                custom={0.15}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {/* <SectionLabel>01 — Journey</SectionLabel> */}
                                <h2 className="font-mono text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                                    Un Camino<br />
                                    <strong className="text-primary-600">de Progreso</strong>
                                </h2>
                                <p className=" text-sm md:text-base font-normal text-stone-500 leading-relaxed mb-10">
                                    El camino de Novasac refleja un crecimiento constante basado en la
                                    experiencia, la innovación y el compromiso con la calidad. Lo que
                                    comenzó como conocimiento tradicional del embalaje ha evolucionado
                                    hacia un enfoque moderno centrado en soluciones flexibles y prácticas
                                    para las industrias de hoy. Cada etapa de este camino ha contribuido
                                    a convertir a Novasac en una empresa con visión de futuro que entiende
                                    tanto los métodos tradicionales como las expectativas modernas.
                                </p>

                                <div className="flex items-start">
                                    {timelineSteps.map((step, i) => (
                                        <div key={step.label} className="flex items-start flex-1">
                                            <div className="flex flex-col items-center flex-1">
                                                <div className={`w-3 h-3 rounded-full ${step.dot} mb-2 mt-1`} />
                                                <p className=" text-sm md:text-base font-medium text-stone-700 text-center leading-snug">
                                                    {step.label}
                                                </p>
                                                <p className=" text-xs md:text-sm text-stone-400 mt-1">
                                                    {step.sub}
                                                </p>
                                            </div>
                                            {i < timelineSteps.length - 1 && (
                                                <div className="flex-0 w-8 md:w-12 h-px bg-stone-200 mt-1.75" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="border-t border-stone-200" />

                    {/* ── Section 02 — Legacy ── */}
                    <div>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                            <motion.div
                                className="order-2 md:order-1"
                                variants={fadeUp}
                                custom={0.1}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {/* <SectionLabel>02 — Legacy</SectionLabel> */}
                                <h2 className="font-mono text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                                    Nuestra Historia<br />
                                    <strong className="text-primary-600">&amp; Legado</strong>
                                </h2>
                                <p className="md:text-base text-sm font-normal text-stone-500 leading-relaxed mb-4">
                                    Novasac tiene sus raíces en un fuerte legado familiar que comenzó
                                    con Valsac, una empresa fundada por la familia de su fundadora.
                                    Valsac construyó una sólida reputación en el embalaje industrial a
                                    través de años de dedicación, un servicio de calidad y conocimiento
                                    del sector.
                                </p>
                                <p className="md:text-base text-sm font-normal text-stone-500 leading-relaxed">
                                    A medida que el sector evolucionaba, surgió la necesidad de
                                    modernizar y ampliar capacidades, lo que llevó a la creación de
                                    Novasac. Sin dejar de lado la innovación, Novasac sigue manteniendo
                                    la confianza, la experiencia y el compromiso que definieron sus
                                    orígenes, atendiendo a sus clientes con seguridad y capacidad
                                    moderna.
                                </p>

                                <div className="mt-8 pl-5 border-l-2 border-primary-500">
                                    <p className="font-mono text-xl italic text-stone-600 font-light leading-relaxed">
                                        "Herencia y progreso: no como opuestos, sino como aliados."
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                className="order-1 md:order-2 aspect-4/3 rounded-3xl overflow-hidden border border-stone-200"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {/* <ImagePlaceholder
                                    label="Legacy image"
                                    icon={
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    }
                                /> */}
                                <Image
                                    src={"/images/about/our-story-&-legacy.jpg"}
                                    width={600}
                                    height={450}
                                    alt="Un Camino de Progreso"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="border-t border-stone-200" />

                    {/* ── Section 03 — What We Do ── */}
                    <div>
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
                            <motion.div
                                className="aspect-4/3 rounded-3xl overflow-hidden border border-stone-200"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {/* <ImagePlaceholder
                                    label="Services image"
                                    icon={
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="2" y="7" width="20" height="14" rx="2" />
                                            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                                        </svg>
                                    }
                                /> */}
                                <Image
                                    src={"/images/about/what-do-we-do.png"}
                                    width={600}
                                    height={450}
                                    alt="Un Camino de Progreso"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                custom={0.15}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                {/* <SectionLabel>03 — Services</SectionLabel> */}
                                <h2 className="font-mono text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                                    Lo Que<br />
                                    <strong className="text-primary-600">Hacemos</strong>
                                </h2>
                                <p className="md:text-base text-sm font-normal text-stone-500 leading-relaxed mb-8">
                                    En Novasac nos especializamos en ofrecer soluciones de embalaje
                                    flexible de alta calidad, fiables y personalizadas, diseñadas para
                                    cubrir las necesidades de diferentes sectores. Nos centramos en
                                    entender los requisitos de cada cliente y ofrecer soluciones
                                    prácticas, duraderas y rentables.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-10">
                                    {industries.map((ind) => (
                                        <span
                                            key={ind}
                                            className=" text-xs px-4 py-2 rounded-full border border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-100 transition-colors duration-200 cursor-default"
                                        >
                                            {ind}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-3 gap-4">
                                    {features.map((item) => (
                                        <div
                                            key={item.label}
                                            className="bg-white border border-stone-200 rounded-2xl p-4 flex justify-between flex-col gap-2 hover:border-primary-300 transition-all duration-200 hover:[box-shadow:var(--shadow-soft)]"
                                        >
                                            <div className="text-primary-600 text-lg mb-2">
                                                {<item.icon size={16} />}
                                            </div>
                                            <p className=" text-sm text-stone-500 leading-snug">
                                                {item.label}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </Wrapper>
            </Section>

            {/* ── Section 04 — Team ── */}
            <Section className="bg-stone-900">
                <Wrapper>
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        {/* <SectionLabel light>04 — People</SectionLabel> */}
                        <div className="flex flex-col justify-between gap-6">
                            <h2 className="font-mono text-4xl md:text-6xl font-light text-white leading-tight">
                                Las Personas<br />
                                <strong className="text-primary-400">Detrás de Novasac</strong>
                            </h2>
                            <p className="text-sm font-light text-stone-400 max-w-md leading-relaxed">
                                La fuerza de Novasac reside en su equipo experimentado y comprometido,
                                que trabaja unido para ofrecer calidad y fiabilidad en cada proyecto.
                            </p>
                        </div>
                    </motion.div>

                    <div className="flex flex-col gap-6">
                        <TeamCard member={teamMembers[0]} index={0} featured />

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {teamMembers.slice(1).map((member, i) => (
                                <TeamCard key={member.name} member={member} index={i + 1} />
                            ))}
                        </div>
                    </div>
                </Wrapper>
            </Section>

            {/* ── Footer CTA ── */}
            <Section className="py-20 md:py-28 text-center">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <p className=" text-xs tracking-[0.2em] uppercase text-primary-500 mb-6">
                        Ponte en contacto
                    </p>
                    <h2 className="font-mono text-4xl md:text-6xl font-light text-stone-900 mb-8 leading-tight">
                        ¿Listo para trabajar<br />
                        <strong className="text-primary-600">juntos?</strong>
                    </h2>
                    <a 
                        href="/contact"
                        className=" inline-block text-sm px-10 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-300"
                    >
                        Contáctanos
                    </a>
                </motion.div>
            </Section>
        </main>
    );
}

function TeamCard({ member, index, featured = false }: { member: TeamMember; index: number; featured?: boolean }) {
    if (featured) {
        return (
            <motion.div
                className="group grid md:grid-cols-2 overflow-hidden rounded-3xl border border-stone-700 hover:border-primary-600 bg-stone-800 transition-all duration-300 md:w-1/2 md:mx-auto"
                variants={fadeUp}
                custom={index * 0.12}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
            >
                {/* Image — portrait-friendly aspect ratio so the photo isn't crushed into a wide letterbox */}
                <div className="relative w-full h-80 md:h-auto md:aspect-3/4 overflow-hidden">
                    {member.image ? (
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                        />
                    ) : (
                        <div
                            className={`w-full h-full flex items-center justify-center font-mono font-light text-7xl md:text-8xl ${member.bg} ${member.text}`}
                        >
                            {member.initials}
                        </div>
                    )}
                </div>

                {/* Text */}
                <div className="flex flex-col justify-center gap-3 p-6 md:p-10">
                    <h3 className="font-mono font-bold text-white text-2xl md:text-3xl">
                        {member.name}
                    </h3>
                    {member.role && (
                        <p className="text-xs text-primary-600 uppercase tracking-wide font-bold">
                            {member.role}
                        </p>
                    )}
                    {member.bio && (
                        <p className="text-stone-300 leading-relaxed font-bold text-base">
                            {member.bio}
                        </p>
                    )}
                </div>
            </motion.div>
        );
    }

    return (
        <motion.div
            className="group overflow-hidden rounded-3xl border border-stone-700 hover:border-primary-600 bg-stone-800 transition-all duration-300 flex flex-col"
            variants={fadeUp}
            custom={index * 0.12}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
        >
            {/* Image */}
            <div className="relative w-full overflow-hidden shrink-0 h-64 md:h-72">
                {member.image ? (
                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    <div
                        className={`w-full h-full flex items-center justify-center font-mono font-light text-6xl md:text-7xl ${member.bg} ${member.text}`}
                    >
                        {member.initials}
                    </div>
                )}
            </div>

            {/* Text — always visible below the image */}
            <div className="flex flex-col gap-2 p-6">
                <h3 className="font-mono font-bold text-white text-xl md:text-2xl">
                    {member.name}
                </h3>
                {member.role && (
                    <p className="text-xs text-primary-600 uppercase tracking-wide font-bold">
                        {member.role}
                    </p>
                )}
                {member.bio && (
                    <p className="text-stone-300 leading-relaxed font-bold text-sm">
                        {member.bio}
                    </p>
                )}
            </div>
        </motion.div>
    );
}

function ImagePlaceholder({ icon, label }: ImagePlaceholderProps) {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-primary-50 text-primary-300">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-400">
                {icon}
            </div>
            <span className=" text-xs tracking-wide text-primary-300">
                {label}
            </span>
        </div>
    );
}

function SectionLabel({ children, light = false }: SectionLabelProps) {
    return (
        <p
            className={` text-xs tracking-[0.2em] uppercase mb-5 ${light ? "text-primary-400" : "text-primary-500"
                }`}
        >
            {children}
        </p>
    );
}

interface TeamMember {
    initials: string;
    name: string;
    role: string;
    experience: string;
    bio: string;
    bg: string;
    text: string;
    border: string;
    bar: string;
    image?: string
}

interface StatItem {
    num: string;
    label: string;
}

interface TimelineStep {
    label: string;
    sub: string;
    dot: string;
}

interface FeatureItem {
    label: string;
    icon: LucideIcon;
}

interface ImagePlaceholderProps {
    icon: React.ReactNode;
    label: string;
}

interface SectionLabelProps {
    children: React.ReactNode;
    light?: boolean;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 32 },
    show: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    }),
};
