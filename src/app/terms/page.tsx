import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import Link from "next/link";

const sections = [
    {
        id: "identification",
        title: "1. Identificación",
        content: null,
        list: [
            { label: "Razón Social", value: "NOVASAC PACKAGING SL." },
            { label: "Nombre Comercial", value: "NOVASAC" },
            { label: "NIF", value: "B75357491" },
            { label: "Domicilio Social", value: "C/Pepe Alba 29, pta 12, 46022 Valencia, Spain" },
            { label: "Teléfono", value: "961 070 274" },
            { label: "Email", value: "laura.sanjuan@novasac.es" },
            { label: "Representante Autorizado", value: "Laura Sanjuan" },
        ],
    },
    {
        id: "purpose",
        title: "2. Objeto",
        content:
            "Este sitio web ha sido diseñado para presentar los productos y servicios ofrecidos por NOVASAC PACKAGING SL, cuya actividad principal es la venta y distribución de sacos y bolsas de arpillera. Este aviso legal regula el acceso y el uso de este sitio web, así como la responsabilidad derivada de su utilización.",
        list: null,
    },
    {
        id: "intellectual-property",
        title: "3. Propiedad Intelectual e Industrial",
        content:
            "NOVASAC PACKAGING SL es titular de todos los derechos de propiedad intelectual e industrial de su sitio web y de todos los elementos contenidos en él —incluyendo, entre otros, imágenes, audio, vídeo, software, textos, marcas, logotipos, combinaciones de colores, estructura y diseño. Todos los derechos reservados. Cualquier uso no autorizado sin el consentimiento previo de NOVASAC PACKAGING SL se considerará una infracción grave de los derechos de propiedad intelectual o industrial de su autor.",
        list: null,
    },
    {
        id: "disclaimer",
        title: "4. Exención de Garantías y Responsabilidad",
        content:
            "NOVASAC PACKAGING SL no será responsable, en ningún caso, de los daños de cualquier naturaleza derivados de —entre otros— errores u omisiones en el contenido, la falta de disponibilidad del portal o la transmisión de virus o programas maliciosos, a pesar de haber adoptado todas las medidas tecnológicas necesarias para evitar que esto ocurra.",
        list: null,
    },
    {
        id: "modifications",
        title: "5. Modificaciones",
        content:
            "NOVASAC PACKAGING SL se reserva el derecho a realizar, sin previo aviso, las modificaciones que considere oportunas en su sitio web, incluyendo cambios, eliminación o adición de contenidos y servicios prestados, así como la forma en que se presentan o se ubican.",
        list: null,
    },
    {
        id: "website-use",
        title: "6. Uso del Sitio Web",
        content:
            "Al utilizar nuestro sitio web, aceptas quedar sujeto a estos términos y condiciones. Si no estás de acuerdo, te rogamos que no utilices nuestro sitio. Aceptas utilizar este sitio web únicamente para fines lícitos y de una manera que no infrinja los derechos de terceros, ni restrinja o impida su uso y disfrute del sitio.",
        list: null,
    },
    {
        id: "governing-law",
        title: "7. Legislación Aplicable y Jurisdicción",
        content:
            "La relación entre NOVASAC PACKAGING SL y el usuario se regirá por la legislación española aplicable. Cualquier controversia se someterá a los Juzgados y Tribunales de la ciudad de Valencia, salvo que la legislación aplicable disponga lo contrario.",
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
                            Documentación Legal
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Términos y{" "}
                            <span className="text-primary-500">Condiciones</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg max-w-2xl">
                            Por favor, lee estos términos detenidamente antes de utilizar
                            nuestro sitio web o nuestros servicios. Al acceder a NOVASAC,
                            aceptas las siguientes condiciones.
                        </p>
                        <p className="text-gray-500 text-sm">
                            Última actualización:{" "}
                            <span className="text-gray-300">enero de 2025</span>
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
                                    Índice
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
                                    En cumplimiento del deber de información recogido en la
                                    Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
                                    de la Información y de Comercio Electrónico, se informa a
                                    los usuarios del sitio web de que los datos que se presentan
                                    a continuación corresponden a la entidad titular del mismo.
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
                                        ¿Tienes dudas sobre nuestros términos?
                                    </p>
                                    <p className="text-gray-400 text-sm">
                                        Contacta con nuestro equipo legal en{" "}
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
                    </div>
                </Wrapper>
            </Section>
        </main>
    );
}
