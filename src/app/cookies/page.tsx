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
        purpose: "Distingue a usuarios únicos asignando un número generado de forma aleatoria.",
        type: "Analytics",
        duration: "2 years",
    },
    {
        name: "_gid",
        provider: "Google Analytics",
        purpose: "Almacena y actualiza un valor único para cada página visitada.",
        type: "Analytics",
        duration: "24 hours",
    },
    {
        name: "_fbp",
        provider: "Facebook Ads",
        purpose: "Identifica navegadores para publicidad y análisis del sitio.",
        type: "Advertising",
        duration: "3 months",
    },
    {
        name: "cookie_consent",
        provider: "NOVASAC",
        purpose: "Almacena las preferencias de consentimiento de cookies del usuario.",
        type: "Functional",
        duration: "1 year",
    },
    {
        name: "session_id",
        provider: "NOVASAC",
        purpose: "Mantiene el estado de la sesión del usuario entre solicitudes de página.",
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

// Display-only labels for CookieType["type"] values — underlying type/logic untouched
const typeLabels: Record<CookieType["type"], string> = {
    Analytics: "Analítica",
    Advertising: "Publicidad",
    Functional: "Funcional",
    Essential: "Esencial",
};

const sections = [
    {
        id: "what-are-cookies",
        title: "¿Qué Son las Cookies?",
        content:
            "Las cookies son pequeños archivos de texto que se colocan en tu dispositivo (ordenador, tablet o móvil) cuando visitas un sitio web. Se utilizan ampliamente para que los sitios web funcionen de forma más eficiente, recuerden tus preferencias y proporcionen a los propietarios del sitio información sobre cómo se utiliza.",
    },
    {
        id: "how-we-use",
        title: "Cómo Utilizamos las Cookies",
        content:
            "NOVASAC utiliza cookies para mejorar tu experiencia de navegación en nuestro sitio, analizar el tráfico y los patrones de uso, mostrar publicidad relevante y recordar tus preferencias entre visitas. Utilizamos tanto cookies de sesión (que caducan al cerrar el navegador) como cookies persistentes (que permanecen en tu dispositivo durante un periodo definido).",
    },
    {
        id: "third-party",
        title: "Cookies de Terceros",
        content:
            "Colaboramos con Google Analytics y Facebook Ads, que colocan sus propias cookies en tu dispositivo para recopilar datos de uso y comportamiento. Estas cookies de terceros se rigen por las políticas de privacidad y de cookies de las respectivas empresas. Te recomendamos consultarlas directamente en sus sitios web.",
    },
    {
        id: "managing",
        title: "Gestiona tus Preferencias de Cookies",
        content:
            "Tienes control total sobre las cookies. La mayoría de los navegadores te permiten ver, bloquear o eliminar cookies desde su configuración. También puedes usar las herramientas de exclusión que ofrecen servicios como Google y Facebook. Ten en cuenta que desactivar ciertas cookies puede reducir la funcionalidad o el rendimiento de algunas partes de este sitio web.",
    },
    {
        id: "changes",
        title: "Cambios en Esta Política",
        content:
            "Podemos actualizar esta Política de Cookies de vez en cuando para reflejar cambios en la tecnología, la normativa o nuestras prácticas. Te recomendamos revisar esta página periódicamente. El uso continuado de nuestro sitio web tras cualquier cambio implica la aceptación de la política actualizada.",
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
                            Documentación Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Política de{" "}
                            <span className="text-primary-500">Cookies</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                            Utilizamos cookies para mejorar tu experiencia. Aquí tienes un resumen
                            transparente de qué recopilamos, por qué, y cómo puedes controlarlo.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Última actualización:{" "}
                            <span className="text-gray-300">enero de 2025</span>
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
                                        {typeLabels[type]}
                                    </span>
                                )
                            )}
                            <span className="text-xs text-gray-400 self-center ml-2">
                                Categorías de cookies utilizadas en este sitio
                            </span>
                        </div>

                        {/* Cookies table */}
                        <div>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-5 flex items-center gap-3">
                                <span className="w-1 h-6 rounded-full bg-primary-500 inline-block" />
                                Cookies Que Utilizamos
                            </h2>
                            <div className="rounded-2xl border border-gray-100 overflow-hidden">
                                {/* Table header */}
                                <div className="hidden md:grid grid-cols-[1.5fr_1.5fr_2fr_1fr_1fr] bg-gray-950 text-gray-400 text-xs uppercase tracking-wider font-semibold px-6 py-3 gap-4">
                                    <span>Nombre de la Cookie</span>
                                    <span>Proveedor</span>
                                    <span>Finalidad</span>
                                    <span>Tipo</span>
                                    <span>Duración</span>
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
                                                    Proveedor:{" "}
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
                                                    {typeLabels[c.type]}
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
                                Cómo Gestionar las Cookies en tu Navegador
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
                                            Configuración de cookies →
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="rounded-2xl bg-gray-950 p-6 md:p-10 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
                            <div>
                                <p className="text-white font-bold text-lg mb-1">
                                    ¿Tienes preguntas sobre las cookies?
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Contáctanos en{" "}
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
                                Contáctanos
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
