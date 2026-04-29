import Section from '@/components/ui/section'
import Wrapper from '@/components/ui/wrapper'
import Link from 'next/link'
import {
    Layers,
    Droplets,
    ShieldCheck,
    Wind,
    ShoppingBag,
    BadgeCheck,
    ArrowRight,
} from 'lucide-react'

// ── Hero stats ─────────────────────────────────────────────────────────
const stats = [
    { value: 'PP / PET', label: 'Core Materials' },
    { value: '600 g/m²', label: 'Max Fabric Weight' },
    { value: '5 Categories', label: 'Specialist Products' },
    { value: 'Custom', label: 'Sizes Available' },
]

// ── Commitment cards ───────────────────────────────────────────────────
const commitments = [
    {
        icon: <Layers className="w-6 h-6" />,
        title: 'Engineered for Industrial Strength',
        description:
            'Each product is built from high-performance technical fabrics — woven PP, PET, HDPE — chosen specifically for the demands of its application.',
    },
    {
        icon: <Droplets className="w-6 h-6" />,
        title: 'Waterproof & Weather-Ready',
        description:
            'From waterproof pond liners to moisture-repellent roof underlayments, our technical textiles keep contents protected in any environment.',
    },
    {
        icon: <ShieldCheck className="w-6 h-6" />,
        title: 'UV-Stabilised Construction',
        description:
            'Every outdoor product is UV-stabilised up to 1,500 hours of exposure, ensuring structural integrity and long service life under direct sunlight.',
    },
    {
        icon: <Wind className="w-6 h-6" />,
        title: 'Fully Customisable Specifications',
        description:
            'Size, weight, colour, seam type, closure, and coating — all parameters are available to configure for your exact operational requirements.',
    },
]

// ── Products ───────────────────────────────────────────────────────────
const products = [
    {
        id: 'geotextile',
        badge: 'Geotextile Bags',
        title: 'Geotextile Bags',
        subtitle: 'Erosion control, shoreline protection, sandbagging & flood barriers',
        description:
            'Manufactured from durable woven or non-woven polypropylene (PP) or polyester (PET), our geotextile bags allow water to pass freely while retaining soil or sand. UV-resistant and available in custom sizes, they are suited to both temporary and permanent civil engineering installations.',
        features: [
            'Woven or needle-punched non-woven fabric options',
            'Allows water passage while retaining soil/sand',
            'UV-resistant for long-term outdoor exposure',
            'Reinforced stitched or heat-sealed seams',
            'Applications: shoreline protection, flood barriers, erosion control',
        ],
        specs: [
            { label: 'Material', value: 'Woven or Non-Woven PP / PET' },
            { label: 'Fabric Type', value: 'Woven or Needle-Punched Non-Woven' },
            { label: 'Fabric Weight', value: '200 – 600 g/m²' },
            { label: 'Bag Size / Capacity', value: '1 – 3 m³ (customisable)' },
            { label: 'Tensile Strength', value: '30 – 60 kN/m' },
            { label: 'Elongation at Break', value: '15 – 25%' },
            { label: 'Permeability', value: '0.1 – 1.0 m/s' },
            { label: 'UV Resistance', value: '≥ 500 hours' },
            { label: 'Colour', value: 'White, Black, UV-stabilised' },
            { label: 'Edge / Seam', value: 'Reinforced stitched or heat-sealed' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
    },
    {
        id: 'pond-liner',
        badge: 'Pond Liner Bags',
        title: 'Pond Liner Bags',
        subtitle: 'Temporary water containment, fish farming, landscaping & agriculture',
        description:
            'Constructed from waterproof HDPE, LLDPE, or PVC-coated PP, our pond liner bags prevent leakage and protect water quality. Durable and UV-resistant for long-term outdoor deployment, they are available in a wide range of sizes from small decorative ponds to large agricultural containment.',
        features: [
            'Made from waterproof HDPE, LLDPE, or PVC-coated PP',
            'Prevents leakage and protects water quality',
            'UV-stabilised for ≥ 1,000 hours outdoor exposure',
            'Heat-sealed or welded seams for watertight integrity',
            'Applications: fish farming, landscaping, temporary water storage',
        ],
        specs: [
            { label: 'Material', value: 'HDPE, LLDPE, PVC-coated PP' },
            { label: 'Fabric Thickness', value: '0.2 – 0.8 mm' },
            { label: 'Bag Size / Capacity', value: 'Custom, typically 1 – 10 m³' },
            { label: 'Tensile Strength', value: '20 – 50 MPa' },
            { label: 'Elongation at Break', value: '10 – 20%' },
            { label: 'Waterproofing', value: 'Full — prevents leakage & water loss' },
            { label: 'UV Resistance', value: '≥ 1,000 hours' },
            { label: 'Colour', value: 'Black / Custom' },
            { label: 'Seam / Edge', value: 'Heat-sealed or welded' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
    },
    {
        id: 'roof-underlayment',
        badge: 'Roof Underlayment Bags',
        title: 'Roof Underlayment Bags',
        subtitle: 'Packaging & transporting shingles, membranes & roofing materials',
        description:
            'Engineered from woven or non-woven polypropylene with a water-repellent coating, these bags protect roofing materials from moisture during transport and storage. Available in flap, gusseted, or open-top designs to suit standard roofing material packages.',
        features: [
            'Water-repellent coating shields contents from rain and humidity',
            'High tensile strength and abrasion resistance',
            'Flap closure, gusseted, or open-top designs available',
            'Available loose or roll-packed for flexible logistics',
            'Applications: roofing material transport, storage, and protection',
        ],
        specs: [
            { label: 'Material', value: 'Woven or Non-Woven Polypropylene (PP)' },
            { label: 'Fabric Weight', value: '80 – 200 g/m²' },
            { label: 'Bag Size / Capacity', value: 'Custom sizes' },
            { label: 'Tensile Strength', value: '15 – 40 kN/m' },
            { label: 'Moisture Resistance', value: 'Water-repellent coating' },
            { label: 'Sealing / Closure', value: 'Flap, gusseted, or open-top' },
            { label: 'Bag Form', value: 'Loose or roll-packed' },
            { label: 'Colour', value: 'Black, natural, or custom' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
    },
    {
        id: 'lumber-wrap',
        badge: 'Lumber Wrap Bags',
        title: 'Lumber Wrap Bags',
        subtitle: 'Wrapping & transporting timber, wood products & sheet materials',
        description:
            'Made from strong and breathable woven PP or PE fabric, our lumber wraps protect timber from dirt, moisture, and UV exposure while remaining semi-permeable for ventilation. Available in custom sizes for any timber dimension, with reinforced grommets for secure fixing.',
        features: [
            'Breathable woven PP/PE fabric with PVC or PE coating',
            'Protects from dirt, moisture, and UV exposure',
            'Semi-permeable for natural wood ventilation',
            'Hemmed edges with reinforced grommets',
            'Applications: construction sites, warehouses, trucks, agriculture',
        ],
        specs: [
            { label: 'Material', value: 'Woven PP/PE with PVC or PE coating' },
            { label: 'Fabric Weight', value: '150 – 500 g/m²' },
            { label: 'Tensile Strength', value: '30 – 70 kN/m' },
            { label: 'Tear Resistance', value: '50 – 200 N' },
            { label: 'Waterproofing', value: 'Full coating — water penetration proof' },
            { label: 'UV Resistance', value: '500 – 1,500 hours' },
            { label: 'Edge Finish', value: 'Hemmed with reinforced grommets' },
            { label: 'Colour', value: 'Blue, Green, Silver, Custom' },
            { label: 'Size Range', value: '1×2 m up to 12×20 m' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
    },
    {
        id: 'tarpaulin',
        badge: 'Tarpaulins',
        title: 'Industrial Textile Tarpaulins',
        subtitle: 'Covering goods, construction sites, agricultural produce & temporary shelters',
        description:
            'Our industrial-grade tarpaulins are manufactured from woven PP/PE with a PVC or PE coating, delivering waterproof, tear-resistant, and UV-stabilised performance across the most demanding outdoor applications. Reinforced edges with grommets enable fast and secure installation.',
        features: [
            'Woven PP/PE with PVC or PE coating — waterproof and tear-resistant',
            'UV-stabilised for 500 – 1,500 hours of outdoor exposure',
            'Reinforced edges with grommets for easy, secure fixing',
            'Available in a wide range of sizes and fabric weights',
            'Applications: construction, warehouses, agriculture, temporary shelters',
        ],
        specs: [
            { label: 'Material', value: 'Woven PP/PE with PVC or PE coating' },
            { label: 'Fabric Weight', value: '150 – 500 g/m²' },
            { label: 'Tensile Strength', value: '30 – 70 kN/m' },
            { label: 'Tear Resistance', value: '50 – 200 N' },
            { label: 'Waterproofing', value: 'Full coating — water penetration proof' },
            { label: 'UV Resistance', value: '500 – 1,500 hours' },
            { label: 'Edge Finish', value: 'Hemmed with reinforced grommets' },
            { label: 'Colour', value: 'Blue, Green, Silver, Custom' },
            { label: 'Size Range', value: '1×2 m up to 12×20 m' },
        ],
        panelGradient: 'from-primary-50 to-primary-100',
        border: 'border-primary-200',
        badgeBg: 'bg-primary-600 text-white',
        subtitleColor: 'text-primary-700',
        ctaBg: 'bg-primary-600 hover:bg-primary-500',
    },
]

// ── Page ───────────────────────────────────────────────────────────────
export default function TechnicalTextile() {
    return (
        <>
            {/* ── Hero ── */}
            <Section className="relative overflow-hidden pt-0">
                {/* Background image — industrial/textile manufacturing */}
                <div
                    className="pointer-events-none absolute inset-0 bg-cover bg-center scale-105"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=1920&q=80&auto=format&fit=crop')`,
                        backgroundPosition: 'center 30%',
                    }}
                >

                    <div
                        className="absolute inset-0 bg-linear-to-r from-stone-900/95 via-stone-900/40 to-stone-900/20"
                    />
                </div>

                <Wrapper className="relative z-10">

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* left copy */}
                        <div className="flex flex-col gap-6">
                            <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-500/15 border border-primary-500/30 px-4 py-1.5 backdrop-blur-sm">
                                <span className="h-2 w-2 rounded-full bg-primary-400 animate-pulse" />
                                <span className="text-primary-300 text-xs font-semibold uppercase tracking-widest">
                                    Industrial & Commercial Applications
                                </span>
                            </div>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white leading-tight">
                                Technical<br />
                                <strong className="text-primary-600">
                                    Textile Bags
                                </strong>
                            </h1>

                            <p className="text-slate-200 text-sm md:text-base leading-relaxed max-w-xl">
                                Our range of technical textile bags is designed to meet the highest standards of
                                strength, durability, and functionality — engineered for industrial, agricultural,
                                and construction applications where standard packaging simply isn't enough.
                            </p>

                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed max-w-xl">
                                From geotextile erosion control to waterproof pond liners and industrial tarpaulins,
                                Novasac offers <strong className="text-white">five specialist product categories</strong>,
                                each fully customisable to your exact specification.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-500 transition-colors text-white font-semibold px-6 py-3 rounded-full text-sm"
                                >
                                    Request a Quote
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                                <Link
                                    href="#products"
                                    className="inline-flex items-center gap-2 border border-slate-600 hover:border-primary-500 hover:text-primary-300 transition-colors text-slate-300 font-medium px-6 py-3 rounded-full text-sm backdrop-blur-sm"
                                >
                                    Explore Products
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
                            Why Technical Textiles
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-stone-900">
                            Built for the Conditions Standard Bags Cannot Handle
                        </h2>
                        <p className="text-slate-500 text-sm">
                            Technical textile products go beyond conventional packaging. Each solution is
                            engineered to perform under specific environmental and mechanical stresses — from
                            shoreline erosion to sustained outdoor UV exposure.
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
                                <h3 className="font-semibold text-stone-900 text-base leading-snug">{c.title}</h3>
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
                            Product Range
                        </span>
                        <h2 className="text-3xl md:text-4xl font-medium text-stone-900 max-w-xl">
                            Five Specialist Categories, One Expert Partner
                        </h2>
                        <p className="text-slate-500 max-w-2xl text-sm">
                            Every product is available with custom dimensions, fabric weights, coatings, and
                            closures — so your specification is never a compromise.
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
                                        <div className="w-16 h-16 rounded-2xl bg-primary-600 text-white flex items-center justify-center shadow-lg">
                                            <ShoppingBag className="w-8 h-8" />
                                        </div>
                                        <p className={`font-bold text-lg ${p.subtitleColor}`}>{p.badge}</p>
                                        <p className="text-slate-500 text-sm">Product image coming soon</p>
                                    </div>

                                    {/* certification badge */}
                                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
                                        <BadgeCheck className="w-3.5 h-3.5 text-primary-600" />
                                        <span className="text-xs font-semibold text-slate-700">Custom Specifications</span>
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
                                        <h3 className="text-2xl md:text-3xl font-bold text-stone-900">{p.title}</h3>
                                        <p className={`text-base font-medium ${p.subtitleColor}`}>{p.subtitle}</p>
                                        <p className="text-slate-500 leading-relaxed">{p.description}</p>
                                    </div>

                                    {/* Key features list */}
                                    <ul className="flex flex-col gap-2">
                                        {p.features.map((f) => (
                                            <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Specs table */}
                                    <div className={`rounded-2xl border ${p.border} overflow-hidden`}>
                                        <div
                                            className={`px-5 py-3 bg-linear-to-r ${p.panelGradient} border-b ${p.border}`}
                                        >
                                            <p className="text-xs font-bold uppercase tracking-widest text-slate-600">
                                                Technical Specifications
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
                                        Request Samples
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
                            <h2 className="text-3xl font-bold text-white">Need a specialist technical textile?</h2>
                            <p className="text-primary-100 text-lg max-w-xl">
                                Our team will help you configure the right product — material, weight, size, and
                                coating — for your exact application and environment.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 shrink-0">
                            <Link
                                href="/contact"
                                className="bg-white text-primary-700 hover:bg-primary-50 transition-colors font-bold px-8 py-3.5 rounded-full text-sm"
                            >
                                Contact Our Team →
                            </Link>
                            <Link
                                href="/custom-made-bags"
                                className="border border-white/40 hover:border-white/80 text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors"
                            >
                                Custom-Made Bags
                            </Link>
                        </div>
                    </div>
                </Wrapper>
            </Section>
        </>
    )
}