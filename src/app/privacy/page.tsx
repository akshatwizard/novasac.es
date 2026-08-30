import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import Link from "next/link";

const sections = [
    {
        id: "introduction",
        title: "Introducción",
        icon: "🔐",
        content:
            "Al utilizar nuestro sitio web, reconoces y aceptas quedar sujeto a esta Política de Privacidad. Si no estás de acuerdo con alguna parte de esta política, te rogamos que dejes de utilizar nuestro sitio web. El uso continuado del sitio implica la aceptación de las prácticas aquí descritas.",
    },
    {
        id: "website-use",
        title: "Uso del Sitio Web",
        icon: "🌐",
        content:
            "Aceptas utilizar nuestro sitio web únicamente para fines lícitos y de una manera que no infrinja los derechos de terceros, ni restrinja o impida su uso y disfrute del sitio. Esto incluye, entre otros, cualquier conducta ilícita o que pueda acosar, causar angustia o molestias a cualquier persona.",
    },
    {
        id: "intellectual-property",
        title: "Propiedad Intelectual",
        icon: "©️",
        content:
            "Todo el contenido de este sitio web —incluyendo textos, gráficos, logotipos y código fuente— es propiedad exclusiva de NOVASAC PACKAGING SL. Cualquier reproducción, distribución o modificación de este contenido sin el consentimiento previo por escrito constituye una infracción de los derechos de propiedad intelectual y puede dar lugar a acciones legales.",
    },
    {
        id: "cookies-usage",
        title: "Uso de Cookies",
        icon: "🍪",
        content:
            "Nuestro sitio web utiliza cookies para mejorar tu experiencia de usuario y analizar cómo se utiliza el sitio. Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio. Nos ayudan a entender los patrones de tráfico, personalizar tu experiencia y mejorar el funcionamiento general del sitio.",
    },
    {
        id: "third-party-cookies",
        title: "Cookies de Terceros",
        icon: "📊",
        content:
            "Utilizamos servicios como Google Analytics y Facebook Ads, que pueden colocar cookies en tu dispositivo para recopilar datos sobre el uso que haces de nuestro sitio web. Estos datos se utilizan con fines analíticos y publicitarios, ayudándonos a entender mejor a nuestra audiencia y mejorar nuestra oferta. Estos terceros operan bajo sus propias políticas de privacidad.",
    },
    {
        id: "cookie-management",
        title: "Gestión de Cookies",
        icon: "⚙️",
        content:
            "Puedes controlar y gestionar las cookies en cualquier momento a través de la configuración de tu navegador. La mayoría de los navegadores te permiten bloquear, eliminar o restringir las cookies. Ten en cuenta que desactivar o bloquear las cookies puede afectar al funcionamiento de determinadas áreas de nuestro sitio web y limitar tu experiencia.",
    },
    {
        id: "changes",
        title: "Cambios en Esta Política",
        icon: "📝",
        content:
            "Nos reservamos el derecho a modificar esta Política de Privacidad en cualquier momento. Te recomendamos revisarla periódicamente para estar al tanto de cualquier actualización. El uso continuado de nuestro sitio web tras la publicación de los cambios se entenderá como la aceptación de dichos cambios.",
    },
    {
        id: "gdpr",
        title: "Nota sobre Cumplimiento del RGPD",
        icon: "🇪🇺",
        content:
            "Este documento sirve como punto de partida y ha sido redactado conforme a los requisitos del RGPD. Debe ser revisado y adaptado por un profesional legal cualificado para garantizar el pleno cumplimiento de todas las leyes y normativas aplicables en tu jurisdicción.",
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
                            Documentación Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Declaración{" "}
                            <span className="text-primary-500">de Privacidad</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                            Tu privacidad nos importa. Esta política explica cómo NOVASAC
                            recopila, utiliza y protege tu información cuando utilizas nuestro sitio web.
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
                    <div className="lg:py-16 md:py-12 py-10">

                        {/* Highlights bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
                            {[
                                { label: "Conforme al RGPD", desc: "Estándares europeos de datos" },
                                { label: "Sin Venta de Datos", desc: "Tus datos siguen siendo tuyos" },
                                { label: "Control de Cookies", desc: "Gestiona tus preferencias" },
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
                                                Sección {i + 1}
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
                                    ¿Dudas o solicitudes sobre privacidad?
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Contacta con nuestro responsable de protección de datos en{" "}
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
                                Ponte en Contacto
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
