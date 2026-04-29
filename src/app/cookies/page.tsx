import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import Link from "next/link";

type CookieType = {
    name: string;
    provider: string;
    purpose: string;
    type: "Analytics" | "Advertising" | "Functional" | "Essential";
    duration: string;
};

const cookieTypes: CookieType[] = [
    {
        name: "_ga",
        provider: "Google Analytics",
        purpose: "Distinguishes unique users by assigning a randomly generated number.",
        type: "Analytics",
        duration: "2 years",
    },
    {
        name: "_gid",
        provider: "Google Analytics",
        purpose: "Stores and updates a unique value for each page visited.",
        type: "Analytics",
        duration: "24 hours",
    },
    {
        name: "_fbp",
        provider: "Facebook Ads",
        purpose: "Identifies browsers for advertising and site analytics.",
        type: "Advertising",
        duration: "3 months",
    },
    {
        name: "cookie_consent",
        provider: "NOVASAC",
        purpose: "Stores the user's cookie consent preferences.",
        type: "Functional",
        duration: "1 year",
    },
    {
        name: "session_id",
        provider: "NOVASAC",
        purpose: "Maintains the user's session state across page requests.",
        type: "Essential",
        duration: "Session",
    },
];

const typeColors: Record<CookieType["type"], string> = {
    Analytics: "bg-blue-50 text-blue-700 border-blue-200",
    Advertising: "bg-amber-50 text-amber-700 border-amber-200",
    Functional: "bg-primary-50 text-primary-700 border-primary-200",
    Essential: "bg-green-50 text-green-700 border-green-200",
};

const sections = [
    {
        id: "what-are-cookies",
        title: "What Are Cookies?",
        content:
            "Cookies are small text files placed on your device (computer, tablet, or mobile) when you visit a website. They are widely used to make websites work more efficiently, remember your preferences, and provide website owners with information about how their site is being used.",
    },
    {
        id: "how-we-use",
        title: "How We Use Cookies",
        content:
            "NOVASAC uses cookies to improve your browsing experience on our site, analyze traffic and usage patterns, deliver relevant advertising, and remember your preferences between visits. We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device for a defined period).",
    },
    {
        id: "third-party",
        title: "Third-Party Cookies",
        content:
            "We partner with Google Analytics and Facebook Ads, which place their own cookies on your device to collect usage and behavioral data. These third-party cookies are governed by the respective companies' privacy and cookie policies. We encourage you to review them directly on their websites.",
    },
    {
        id: "managing",
        title: "Managing Your Cookie Preferences",
        content:
            "You have full control over cookies. Most browsers allow you to view, block, or delete cookies through settings. You can also use opt-out tools provided by services such as Google and Facebook. Please be aware that disabling certain cookies may reduce the functionality or performance of parts of this website.",
    },
    {
        id: "changes",
        title: "Changes to This Policy",
        content:
            "We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our practices. We recommend reviewing this page periodically. Your continued use of our website after any changes signifies your acceptance of the updated policy.",
    },
];

export default function CookiePolicyPage() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero */}
            <div className="relative overflow-hidden bg-gray-950">
                <div
                    className="absolute inset-0 opacity-15"
                    style={{
                        backgroundImage:
                            "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,89,3,0.08) 40px, rgba(255,89,3,0.08) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,89,3,0.08) 40px, rgba(255,89,3,0.08) 41px)",
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
                            Cookie{" "}
                            <span className="text-primary-500">Policy</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                            We use cookies to improve your experience. Here's a transparent
                            overview of what we collect, why, and how you can control it.
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
                    <div className="lg:py-16 md:py-12 py-10 flex flex-col gap-12">

                        {/* Cookie type legend */}
                        <div className="flex flex-wrap gap-2">
                            {(["Essential", "Functional", "Analytics", "Advertising"] as const).map(
                                (type) => (
                                    <span
                                        key={type}
                                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-semibold ${typeColors[type]}`}
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                                        {type}
                                    </span>
                                )
                            )}
                            <span className="text-xs text-gray-400 self-center ml-2">
                                Cookie categories used on this site
                            </span>
                        </div>

                        {/* Cookies table */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                                <span className="w-1 h-6 rounded-full bg-primary-500 inline-block" />
                                Cookies We Use
                            </h2>
                            <div className="rounded-2xl border border-gray-100 overflow-hidden">
                                {/* Table header */}
                                <div className="hidden md:grid grid-cols-[1.5fr_1.5fr_2fr_1fr_1fr] bg-gray-950 text-gray-400 text-xs uppercase tracking-wider font-semibold px-6 py-3 gap-4">
                                    <span>Cookie Name</span>
                                    <span>Provider</span>
                                    <span>Purpose</span>
                                    <span>Type</span>
                                    <span>Duration</span>
                                </div>
                                <div className="divide-y divide-gray-100">
                                    {cookieTypes.map((c) => (
                                        <div
                                            key={c.name}
                                            className="flex flex-col md:grid md:grid-cols-[1.5fr_1.5fr_2fr_1fr_1fr] gap-2 md:gap-4 px-6 py-4 hover:bg-gray-50 transition-colors"
                                        >
                                            <div>
                                                <span className="text-xs text-gray-400 md:hidden font-semibold uppercase">
                                                    Cookie:{" "}
                                                </span>
                                                <code className="font-mono text-sm font-bold text-gray-800 bg-gray-100 px-2 py-0.5 rounded">
                                                    {c.name}
                                                </code>
                                            </div>
                                            <div className="text-sm text-gray-600">
                                                <span className="text-xs text-gray-400 md:hidden font-semibold uppercase">
                                                    Provider:{" "}
                                                </span>
                                                {c.provider}
                                            </div>
                                            <div className="text-sm text-gray-500 leading-relaxed">
                                                {c.purpose}
                                            </div>
                                            <div>
                                                <span
                                                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold ${typeColors[c.type]}`}
                                                >
                                                    {c.type}
                                                </span>
                                            </div>
                                            <div className="text-sm text-gray-600 font-medium">
                                                {c.duration}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sections */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {sections.map((s, i) => (
                                <article
                                    key={s.id}
                                    id={s.id}
                                    className={`rounded-2xl border p-6 md:p-7 scroll-mt-8 ${i === 0 ? "md:col-span-2 border-primary-100 bg-primary-50" : "border-gray-100 bg-white"
                                        }`}
                                >
                                    <h2 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 shrink-0" />
                                        {s.title}
                                    </h2>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {s.content}
                                    </p>
                                </article>
                            ))}
                        </div>

                        {/* Browser instructions */}
                        <div>
                            <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                                <span className="w-1 h-6 rounded-full bg-primary-500 inline-block" />
                                How to Manage Cookies in Your Browser
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    { browser: "Chrome", link: "https://support.google.com/chrome/answer/95647" },
                                    { browser: "Firefox", link: "https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" },
                                    { browser: "Safari", link: "https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" },
                                    { browser: "Edge", link: "https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" },
                                ].map((b) => (
                                    <a
                                        key={b.browser}
                                        href={b.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-xl border border-gray-100 bg-white hover:border-primary-300 hover:shadow-soft p-4 flex flex-col items-center gap-2 transition-all duration-200 text-center group"
                                    >
                                        <span className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-primary-50 flex items-center justify-center text-xl transition-colors">
                                            🌐
                                        </span>
                                        <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-700 transition-colors">
                                            {b.browser}
                                        </span>
                                        <span className="text-xs text-primary-600 group-hover:underline">
                                            Cookie settings →
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="rounded-2xl bg-gray-950 p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                            <div>
                                <p className="text-white font-bold text-lg mb-1">
                                    Have questions about cookies?
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Contact us at{" "}
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
                </Wrapper>
            </Section>
        </main>
    );
}