"use client";

import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import { motion, Variants } from "motion/react";
import Image from "next/image";


const teamMembers: TeamMember[] = [
    {
        initials: "LS",
        name: "Laura Sanjuan",
        role: "Founder & Leader",
        experience: "40+ years",
        bio: "Her leadership, industry knowledge, and strategic vision guide the company's growth and innovation across every project.",
        bg: "bg-primary-100",
        text: "text-primary-700",
        border: "border-primary-200",
        bar: "bg-primary-600",
    },
    {
        initials: "CA",
        name: "Carmen",
        role: "Administration",
        experience: "Operations",
        bio: "Manages administrative operations and ensures that daily processes run smoothly and efficiently across the organization.",
        bg: "bg-primary-50",
        text: "text-primary-600",
        border: "border-primary-100",
        bar: "bg-primary-500",
    },
    {
        initials: "GA",
        name: "Gabriel",
        role: "Sales Manager",
        experience: "Business Dev",
        bio: "Focuses on business development and building strong client relationships, helping Novasac expand its reach and maintain customer satisfaction.",
        bg: "bg-primary-100",
        text: "text-primary-700",
        border: "border-primary-200",
        bar: "bg-primary-600",
    },
];

const stats: StatItem[] = [
    { num: "40+", label: "Years of experience" },
    { num: "3", label: "Generations of expertise" },
    { num: "4", label: "Industries served" },
    { num: "1", label: "Trusted family legacy" },
];

const timelineSteps: TimelineStep[] = [
    { label: "Traditional Packaging", sub: "Foundation", dot: "bg-stone-300" },
    { label: "Valsac", sub: "Growth", dot: "bg-primary-400" },
    { label: "Novasac", sub: "Today", dot: "bg-primary-600" },
];

const industries: string[] = [
    "Agriculture",
    "Food Products",
    "Chemicals",
    "Industrial Goods",
];

const features: FeatureItem[] = [
    { label: "Quality control", icon: "✓" },
    { label: "Custom solutions", icon: "◈" },
    { label: "Cost-effective", icon: "◎" },
];


export default function AboutUs() {
    return (
        <main className="text-stone-800 min-h-screen">
            <Section className="relative overflow-hidden">
                <div
                    className="absolute top-0 right-0 md:w-1/2 w-4/5 h-full bg-primary-50 overflow-hidden"
                    style={{ clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%)" }}
                >
                    <Image src={"/images/hero/company.png"} fill alt="bags-each-clean-up" className="w-full h-full object-cover object-center" />
                </div>
                <Wrapper className="p-0!">
                    <div className="relative overflow-hidden border-b border-stone-200">
                        <div className="relative py-16 md:py-26 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <motion.p
                                    className=" text-xs tracking-[0.2em] uppercase text-primary-500 mb-6"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                >
                                    About Novasac
                                </motion.p>

                                <motion.h1
                                    className="font-mono text-5xl md:text-7xl font-light leading-[1.05] text-stone-900 mb-8"
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                                >
                                    Flexible<br />
                                    <em className="italic text-primary-600">Packaging,</em><br />
                                    Built on<br />Legacy
                                </motion.h1>

                                <motion.p
                                    className="font-normal text-stone-500 leading-relaxed max-w-sm"
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
                                >
                                    From family roots to modern innovation — delivering reliable,
                                    customized packaging solutions for industries worldwide.
                                </motion.p>
                            </div>

                            <div className="hidden md:grid grid-cols-2 gap-4">
                                {stats.map((stat, i) => (
                                    <motion.div
                                        key={stat.label}
                                        className="bg-white border border-stone-200 rounded-2xl p-6"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.08 }}
                                    >
                                        <div className="font-mono text-4xl font-light text-primary-600 mb-1">
                                            {stat.num}
                                        </div>
                                        <div className=" text-xs text-stone-400 leading-snug">
                                            {stat.label}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper className="p-0!">

                    {/* ── Section 01 — Journey ── */}
                    <div className="py-20 md:py-28">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                            <motion.div
                                className="aspect-4/3 rounded-3xl overflow-hidden border border-stone-200"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <ImagePlaceholder
                                    label="Journey image"
                                    icon={
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                                            <polyline points="9 22 9 12 15 12 15 22" />
                                        </svg>
                                    }
                                />
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                custom={0.15}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <SectionLabel>01 — Journey</SectionLabel>
                                <h2 className="font-mono text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                                    A Journey<br />
                                    <em className="italic text-primary-600">of Progress</em>
                                </h2>
                                <p className=" text-sm md:text-base font-normal text-stone-500 leading-relaxed mb-10">
                                    Novasac's journey reflects steady growth built on experience,
                                    innovation, and a commitment to quality. What began as traditional
                                    packaging knowledge has evolved into a modern approach that focuses
                                    on flexible and practical solutions for today's industries. Each
                                    stage of this journey has contributed to shaping Novasac into a
                                    forward-thinking company that understands both traditional methods
                                    and modern expectations.
                                </p>

                                <div className="flex items-start">
                                    {timelineSteps.map((step, i) => (
                                        <div key={step.label} className="flex items-start flex-1">
                                            <div className="flex flex-col items-center flex-1">
                                                <div className={`w-3 h-3 rounded-full ${step.dot} mb-2 mt-1`} />
                                                <p className=" text-xs font-medium text-stone-700 text-center leading-snug">
                                                    {step.label}
                                                </p>
                                                <p className=" text-[10px] text-stone-400 mt-1">
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
                    <div className="py-20 md:py-28">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                            <motion.div
                                className="order-2 md:order-1"
                                variants={fadeUp}
                                custom={0.1}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <SectionLabel>02 — Legacy</SectionLabel>
                                <h2 className="font-mono text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                                    Our Story<br />
                                    <em className="italic text-primary-600">&amp; Legacy</em>
                                </h2>
                                <p className="md:text-base text-sm font-normal text-stone-500 leading-relaxed mb-4">
                                    Novasac is rooted in a strong family legacy that began with Valsac,
                                    a company established by the founder's family. Valsac built a solid
                                    reputation in industrial packaging through years of dedication,
                                    quality service, and industry knowledge.
                                </p>
                                <p className="md:text-base text-sm font-normal text-stone-500 leading-relaxed">
                                    As the industry evolved, there was a need to modernize and expand
                                    capabilities, which led to the creation of Novasac. While embracing
                                    innovation, Novasac continues to carry forward the trust, experience,
                                    and commitment that defined its origins — serving clients with
                                    confidence and modern capability.
                                </p>

                                <div className="mt-8 pl-5 border-l-2 border-primary-500">
                                    <p className="font-mono text-xl italic text-stone-600 font-light leading-relaxed">
                                        "Heritage and progress — not as opposites, but as partners."
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
                                <ImagePlaceholder
                                    label="Legacy image"
                                    icon={
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                    }
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="border-t border-stone-200" />

                    {/* ── Section 03 — What We Do ── */}
                    <div className="py-20 md:py-28">
                        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                            <motion.div
                                className="aspect-4/3 rounded-3xl overflow-hidden border border-stone-200"
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <ImagePlaceholder
                                    label="Services image"
                                    icon={
                                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <rect x="2" y="7" width="20" height="14" rx="2" />
                                            <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                                        </svg>
                                    }
                                />
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                custom={0.15}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <SectionLabel>03 — Services</SectionLabel>
                                <h2 className="font-mono text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
                                    What<br />
                                    <em className="italic text-primary-600">We Do</em>
                                </h2>
                                <p className="md:text-base text-sm font-normal text-stone-500 leading-relaxed mb-8">
                                    At Novasac, we specialize in delivering high-quality, reliable, and
                                    customized flexible packaging solutions designed to meet the needs of
                                    various industries. We focus on understanding each client's
                                    requirements and providing solutions that are practical, durable,
                                    and cost-effective.
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
                                            className="bg-white border border-stone-200 rounded-2xl p-4 text-center hover:border-primary-300 transition-all duration-200 hover:[box-shadow:var(--shadow-soft)]"
                                        >
                                            <div className="text-primary-600 text-lg mb-2">{item.icon}</div>
                                            <p className=" text-[11px] text-stone-500 leading-snug">
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
                        <SectionLabel light>04 — People</SectionLabel>
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
                            <h2 className="font-mono text-4xl md:text-6xl font-light text-white leading-tight">
                                The People<br />
                                <em className="italic text-primary-400">Behind Novasac</em>
                            </h2>
                            <p className=" text-sm font-light text-stone-400 max-w-xs leading-relaxed">
                                The strength of Novasac lies in its experienced and dedicated team,
                                which works together to deliver quality and reliability in every project.
                            </p>
                        </div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {teamMembers.map((member, i) => (
                            <motion.div
                                key={member.name}
                                className="group bg-stone-800 border border-stone-700 rounded-3xl p-8 hover:border-primary-600 transition-colors duration-300 flex flex-col"
                                variants={fadeUp}
                                custom={i * 0.12}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.15 }}
                            >
                                <div className="flex items-start justify-between mb-8">
                                    <div
                                        className={`w-14 h-14 rounded-2xl flex items-center justify-center  text-sm font-medium border ${member.bg} ${member.text} ${member.border}`}
                                    >
                                        {member.initials}
                                    </div>
                                    <span className=" text-[10px] tracking-widest uppercase text-stone-500 pt-1">
                                        {member.experience}
                                    </span>
                                </div>

                                <div className="flex-1">
                                    <h3 className="font-mono text-2xl font-light text-white mb-1">
                                        {member.name}
                                    </h3>
                                    <p className=" text-xs text-stone-400 tracking-wide uppercase mb-5">
                                        {member.role}
                                    </p>
                                    <p className=" text-sm font-light text-stone-400 leading-relaxed">
                                        {member.bio}
                                    </p>
                                </div>

                                <motion.div
                                    className={`mt-8 h-0.5 ${member.bar} rounded-full origin-left`}
                                    style={{ width: "100%" }}
                                    initial={{ scaleX: 0.15 }}
                                    whileHover={{ scaleX: 1 }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                />
                            </motion.div>
                        ))}
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
                        Get in touch
                    </p>
                    <h2 className="font-mono text-4xl md:text-6xl font-light text-stone-900 mb-8 leading-tight">
                        Ready to work<br />
                        <em className="italic text-primary-600">together?</em>
                    </h2>
                    <a
                        href="/contact"
                        className=" inline-block text-sm px-10 py-4 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-300"
                    >
                        Contact us
                    </a>
                </motion.div>
            </Section>
        </main>
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
    icon: string;
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
