import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import Link from "next/link";

const sections = [
    {
        id: "introduction",
        title: "Introduction",
        icon: "🔐",
        content:
            "By using our website, you acknowledge and agree to be bound by this Privacy Policy. If you do not agree with any part of this policy, please discontinue use of our website. Your continued use constitutes your acceptance of the practices described herein.",
    },
    {
        id: "website-use",
        title: "Use of the Website",
        icon: "🌐",
        content:
            "You agree to use our website solely for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit the use and enjoyment of the site by any third party. This includes, but is not limited to, unlawful conduct or conduct that may harass, cause distress or inconvenience to any person.",
    },
    {
        id: "intellectual-property",
        title: "Intellectual Property",
        icon: "©️",
        content:
            "All content on this website — including texts, graphics, logos, and source code — is the exclusive property of NOVASAC PACKAGING SL. Any reproduction, distribution, or modification of this content without prior written consent constitutes a violation of intellectual property rights and may result in legal action.",
    },
    {
        id: "cookies-usage",
        title: "Use of Cookies",
        icon: "🍪",
        content:
            "Our website uses cookies to enhance your user experience and to analyze how the site is used. Cookies are small text files stored on your device when you visit our site. They help us understand traffic patterns, personalize your experience, and improve overall site functionality.",
    },
    {
        id: "third-party-cookies",
        title: "Third-Party Cookies",
        icon: "📊",
        content:
            "We use services including Google Analytics and Facebook Ads, which may place cookies on your device to collect data about your use of our website. This data is used for analytical and advertising purposes, helping us better understand our audience and improve our offerings. These third parties operate under their own privacy policies.",
    },
    {
        id: "cookie-management",
        title: "Cookie Management",
        icon: "⚙️",
        content:
            "You can control and manage cookies through your browser settings at any time. Most browsers allow you to block, delete, or restrict cookies. Please note that disabling or blocking cookies may affect the functionality of certain areas of our website and limit your experience.",
    },
    {
        id: "changes",
        title: "Changes to This Policy",
        icon: "📝",
        content:
            "We reserve the right to modify this Privacy Policy at any time. We recommend that you review it regularly to stay informed of any updates. Your continued use of our website following the posting of changes will be deemed your acceptance of those changes.",
    },
    {
        id: "gdpr",
        title: "GDPR Compliance Note",
        icon: "🇪🇺",
        content:
            "This document serves as a starting point and has been drafted to align with GDPR requirements. It should be reviewed and customized by a qualified legal professional to ensure full compliance with all applicable laws and regulations specific to your jurisdiction.",
    },
];

export default function PrivacyStatementPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero */}
            <div className="relative overflow-hidden bg-gray-950">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 20% 50%, #ff5903 0%, transparent 50%), radial-gradient(circle at 80% 20%, #ff710a 0%, transparent 50%)",
                    }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-500 to-transparent" />
                <Section>
                    <Wrapper className="lg:py-14 md:py-12 py-10 lg:gap-4 md:gap-3 gap-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary-400 uppercase tracking-widest">
                            <span className="inline-block w-6 h-px bg-primary-500" />
                            Legal Documentation
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Privacy{" "}
                            <span className="text-primary-500">Statement</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                            Your privacy matters to us. This policy explains how NOVASAC
                            collects, uses, and protects information when you use our website.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Last updated:{" "}
                            <span className="text-gray-300">January 2025</span>
                        </p>
                    </Wrapper>
                </Section>
            </div>

            <Section>
                <Wrapper className="lg:gap-0 md:gap-0 gap-0 py-0">
                    <div className="lg:py-16 md:py-12 py-10">

                        {/* Highlights bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                            {[
                                { label: "GDPR Aligned", desc: "European data standards" },
                                { label: "No Data Selling", desc: "Your data stays yours" },
                                { label: "Cookie Control", desc: "Manage your preferences" },
                            ].map((h) => (
                                <div
                                    key={h.label}
                                    className="flex items-center gap-4 rounded-xl border border-gray-100 bg-gray-50 px-5 py-4"
                                >
                                    <div className="w-2 h-2 rounded-full bg-primary-500 shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900 text-sm">
                                            {h.label}
                                        </p>
                                        <p className="text-xs text-gray-500">{h.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Cards grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {sections.map((s, i) => (
                                <article
                                    key={s.id}
                                    id={s.id}
                                    className={`rounded-2xl border p-6 md:p-8 scroll-mt-8 transition-all duration-200 hover:shadow-soft group ${i === 0
                                        ? "md:col-span-2 border-primary-200 bg-primary-50"
                                        : "border-gray-100 bg-white"
                                        }`}
                                >
                                    <div className="flex items-start gap-4 mb-3">
                                        <span className="text-2xl select-none">{s.icon}</span>
                                        <div>
                                            <span className="text-xs uppercase tracking-widest text-primary-600 font-semibold block mb-1">
                                                Section {i + 1}
                                            </span>
                                            <h2 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                                                {s.title}
                                            </h2>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {s.content}
                                    </p>
                                </article>
                            ))}
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-10 rounded-2xl bg-gray-950 p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                            <div>
                                <p className="text-white font-bold text-lg mb-1">
                                    Privacy concerns or requests?
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Reach our data protection contact at{" "}
                                    <a
                                        href="mailto:laura.sanjuan@novasac.es"
                                        className="text-primary-400 hover:underline"
                                    >
                                        laura.sanjuan@novasac.es
                                    </a>
                                </p>
                            </div>
                            <Link
                                href="/contact"
                                className="shrink-0 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-6 py-3 rounded-lg transition-colors"
                            >
                                Get in Touch
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </Wrapper>
            </Section>
        </main>
    );
}