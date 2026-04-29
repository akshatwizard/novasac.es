import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import Link from "next/link";

const sections = [
    {
        id: "identification",
        title: "1. Identification",
        content: null,
        list: [
            { label: "Legal Name", value: "NOVASAC PACKAGING SL." },
            { label: "Trade Name", value: "NOVASAC" },
            { label: "Tax ID (NIF)", value: "B75357491" },
            { label: "Registered Address", value: "C/Pepe Alba 29, pta 12, 46022 Valencia, Spain" },
            { label: "Phone", value: "961 070 274" },
            { label: "Email", value: "laura.sanjuan@novasac.es" },
            { label: "Authorized Representative", value: "Laura Sanjuan" },
        ],
    },
    {
        id: "purpose",
        title: "2. Purpose",
        content:
            "This website has been designed to present the products and services offered by NOVASAC PACKAGING SL, whose principal activity is the sale and distribution of sacks and burlap bags. This legal notice governs access to and use of this website, as well as any liability arising from its use.",
        list: null,
    },
    {
        id: "intellectual-property",
        title: "3. Intellectual & Industrial Property",
        content:
            "NOVASAC PACKAGING SL holds all intellectual and industrial property rights to its website and all elements contained therein — including, but not limited to, images, audio, video, software, text, trademarks, logos, color combinations, structure and design. All rights reserved. Any unauthorized use without prior consent from NOVASAC PACKAGING SL shall be deemed a serious infringement of the author's intellectual or industrial property rights.",
        list: null,
    },
    {
        id: "disclaimer",
        title: "4. Disclaimer of Warranties & Liability",
        content:
            "NOVASAC PACKAGING SL shall not be liable, under any circumstances, for damages of any nature arising from — without limitation — errors or omissions in content, lack of availability of the portal, or the transmission of viruses or malicious programs, despite having adopted all necessary technological measures to prevent such occurrences.",
        list: null,
    },
    {
        id: "modifications",
        title: "5. Modifications",
        content:
            "NOVASAC PACKAGING SL reserves the right to make, without prior notice, any modifications it deems appropriate to its website, including changes, removal, or additions to the content and services provided, as well as the manner in which they are presented or located.",
        list: null,
    },
    {
        id: "website-use",
        title: "6. Use of the Website",
        content:
            "By using our website, you agree to be bound by these terms and conditions. If you do not agree, please refrain from using our site. You agree to use this website solely for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit, the use and enjoyment of the site by any third party.",
        list: null,
    },
    {
        id: "governing-law",
        title: "7. Governing Law & Jurisdiction",
        content:
            "The relationship between NOVASAC PACKAGING SL and the user shall be governed by the applicable Spanish legislation. Any disputes shall be submitted to the Courts and Tribunals of the city of Valencia, unless applicable law provides otherwise.",
        list: null,
    },
];

export default function TermsAndConditionsPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Banner */}
            <div className="relative bg-gray-950 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(45deg, #ff5903 0, #ff5903 1px, transparent 0, transparent 50%)",
                        backgroundSize: "20px 20px",
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
                            Terms &amp;{" "}
                            <span className="text-primary-500">Conditions</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                            Please read these terms carefully before using our website or
                            services. By accessing NOVASAC, you agree to the following
                            conditions.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Last updated:{" "}
                            <span className="text-gray-300">January 2025</span>
                        </p>
                    </Wrapper>
                </Section>
            </div>

            {/* Content */}
            <Section>
                <Wrapper className="lg:gap-0 md:gap-0 gap-0 py-0">
                    <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 lg:py-16 md:py-12 py-10">
                        {/* Sidebar TOC */}
                        <aside className="hidden lg:block">
                            <div className="sticky top-8">
                                <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold mb-4">
                                    Contents
                                </p>
                                <nav className="flex flex-col gap-1">
                                    {sections.map((s) => (
                                        <a
                                            key={s.id}
                                            href={`#${s.id}`}
                                            className="text-sm text-gray-500 hover:text-primary-600 py-1.5 border-l-2 border-gray-100 hover:border-primary-500 pl-3 transition-all duration-200"
                                        >
                                            {s.title}
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </aside>

                        {/* Main content */}
                        <div className="flex flex-col gap-10">
                            {/* Intro card */}
                            <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6 md:p-8">
                                <p className="text-gray-700 text-base leading-relaxed">
                                    In compliance with the duty of information set out in Law
                                    34/2002, of 11 July, on Information Society Services and
                                    Electronic Commerce, users of the website are informed that
                                    the data presented herein correspond to the entity that owns
                                    the website.
                                </p>
                            </div>

                            {sections.map((s, i) => (
                                <article
                                    key={s.id}
                                    id={s.id}
                                    className="scroll-mt-8 border-b border-gray-100 pb-10 last:border-b-0 last:pb-0"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <span className="mt-1 shrink-0 w-8 h-8 rounded-lg bg-primary-600 text-white text-xs font-bold flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                                            {s.title.replace(/^\d+\.\s/, "")}
                                        </h2>
                                    </div>

                                    {s.content && (
                                        <p className="text-gray-600 leading-relaxed pl-12">
                                            {s.content}
                                        </p>
                                    )}

                                    {s.list && (
                                        <div className="pl-12 mt-3">
                                            <div className="rounded-xl border border-gray-100 overflow-hidden divide-y divide-gray-100">
                                                {s.list.map((item) => (
                                                    <div
                                                        key={item.label}
                                                        className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-5 py-3"
                                                    >
                                                        <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold sm:w-48 shrink-0">
                                                            {item.label}
                                                        </span>
                                                        <span className="text-gray-700 text-sm font-medium">
                                                            {item.value}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </article>
                            ))}

                            {/* Footer note */}
                            <div className="rounded-2xl bg-gray-950 text-white p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                                <div>
                                    <p className="font-semibold text-base mb-1">
                                        Questions about our terms?
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Contact our legal team at{" "}
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
                                    className="shrink-0 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
                                >
                                    Contact Us
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
                    </div>
                </Wrapper>
            </Section>
        </main>
    );
}