'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ArrowRight, BadgeCheck, Loader2, MailCheck, Phone, Recycle, ShieldCheck, ShoppingCart, X, Zap, ZoomIn } from 'lucide-react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading } from './ui/headings'
import QuantityStepper from './quantity_stepper'
import OrderRequestModal from './order_request_modal'
import {
    ErrorBanner,
    Field,
    ModalOverlay,
    SectionDivider,
    SuccessScreen,
    getApiError,
    inputCls,
} from './product_modal'
import { addToCart } from '@/lib/cart_store'

const PHONE_DISPLAY = '+34 628 188 044'
const PHONE_HREF = 'tel:+34628188044'

// ── Listing data ─────────────────────────────────────────────────────────────────────────────
// Everything the listing shows lives here so it is easy to update.
const PRODUCT_ID = 'bolsa-reciclada-jardin'
const PRODUCT_TITLE = '100 % Bolsas Recicladas'
const PRODUCT_IMAGE = '/images/recycled/garden-bag-infographic.jpg'
// The product details (recycled material, carbon footprint, UNE-EN 15343 traceability, EU
// regulations) are written inside the picture, so the alt text spells them out for screen readers.
const PRODUCT_IMAGE_ALT =
    'Bolsa negra reciclada de Novasac con restos de jardín sobre el césped. Características: plástico reciclado postconsumo y postindustrial, menor huella de carbono que los polímeros vírgenes, trazabilidad certificada según la norma UNE-EN 15343 y cumplimiento de la normativa medioambiental de la UE.'

// This bag is sold in one size only, so there is no size picker.
const SIZE = '85 × 85 × 90 cm'

// No price has been published yet. Put the unit price (in euros) here and the listing switches
// from "Precio bajo consulta" to the price automatically.
const LISTING = { priceEur: null as number | null }

// The four product lines of the /recycled-bags page (used as interests in the enquiry form).
const PRODUCT_LINES = [
    { label: 'Big Bags', href: '/recycled-bags#fibc' },
    { label: 'Sacos de PP', href: '/recycled-bags#ppws' },
    { label: 'Bolsas de jardín', href: '/recycled-bags#garden' },
    { label: 'Bolsas de basura', href: '/recycled-bags#garbage' },
]

const euro = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR' })

export default function RecycledBagsSection() {
    const [qty, setQty] = useState(1)
    const [buyOpen, setBuyOpen] = useState(false)
    const [enquiryOpen, setEnquiryOpen] = useState(false)
    const [zoomOpen, setZoomOpen] = useState(false)

    // Adds the line and opens the cart drawer, which is the confirmation.
    const handleAddToCart = () => addToCart({ productId: PRODUCT_ID, title: PRODUCT_TITLE, size: SIZE, image: PRODUCT_IMAGE }, qty)

    return (
        <Section>
            <Wrapper className="pt-0! sm:pt-0! md:pt-0! lg:pt-0!">
                <div className="overflow-hidden rounded-3xl border border-primary-100 bg-white shadow-soft lg:grid lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">

                    {/* Product picture */}
                    <div className="flex items-center bg-linear-to-br from-primary-50 via-white to-white p-3 sm:p-5 lg:p-6">
                        <button
                            type="button"
                            onClick={() => setZoomOpen(true)}
                            aria-label="Ampliar la imagen del producto"
                            className="group relative block aspect-[1418/1109] w-full cursor-zoom-in overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5"
                        >
                            <Image
                                src={PRODUCT_IMAGE}
                                alt={PRODUCT_IMAGE_ALT}
                                fill
                                sizes="(max-width: 1024px) 100vw, 60vw"
                                className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                            />
                            <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-zinc-700 shadow-sm backdrop-blur-sm">
                                <ZoomIn className="h-3.5 w-3.5 text-primary-600" />
                                Ampliar
                            </span>
                        </button>
                    </div>

                    {/* Buy box */}
                    <div className="flex flex-col gap-5 border-t border-primary-100 p-6 sm:p-8 lg:border-l lg:border-t-0">
                        <div className="flex flex-col gap-3">
                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-700">
                                <Recycle className="h-3.5 w-3.5" />
                                Bolsas Recicladas
                            </span>
                            <Heading className="text-2xl sm:text-3xl lg:text-3xl">{PRODUCT_TITLE}</Heading>
                            <p className="text-sm text-zinc-500">
                                Por <span className="font-semibold text-zinc-700">Novasac Packaging</span>
                                <span className="mx-2 text-zinc-300">|</span>
                                <Link href="/recycled-bags" className="inline-flex items-center gap-1 font-medium text-primary-700 hover:underline">
                                    Ver toda la gama
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                                    <BadgeCheck className="h-3.5 w-3.5" />
                                    Certificadas AENOR
                                </span>
                                <span className="inline-flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold text-zinc-700">
                                    <ShieldCheck className="h-3.5 w-3.5 text-primary-600" />
                                    <span className="whitespace-nowrap">UNE-EN 15343</span>
                                </span>
                            </div>
                        </div>

                        <hr className="border-zinc-100" />

                        {/* Price */}
                        <div>
                            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-400">Precio</p>
                            {LISTING.priceEur !== null ? (
                                <p className="mt-1 text-3xl font-bold text-zinc-900">
                                    {euro.format(LISTING.priceEur)}
                                    <span className="ml-2 text-sm font-normal text-zinc-500">por unidad</span>
                                </p>
                            ) : (
                                <>
                                    <p className="mt-1 text-2xl font-bold text-zinc-900">Precio bajo consulta</p>
                                    <p className="mt-1 text-sm leading-relaxed text-zinc-500">
                                        Te lo confirmamos en 1 día laborable, según la cantidad.
                                    </p>
                                </>
                            )}
                        </div>

                        {/* Size (single size, so shown as a fixed detail rather than a picker) */}
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-zinc-600">Tamaño</p>
                            <span className="w-fit rounded-xl border border-primary-500 bg-primary-50 px-3.5 py-2 text-sm font-semibold text-primary-700 ring-1 ring-primary-500">
                                <span className="whitespace-nowrap">{SIZE}</span>
                            </span>
                        </div>

                        {/* Quantity */}
                        <div className="flex flex-col gap-2">
                            <p className="text-sm text-zinc-600">Cantidad</p>
                            <QuantityStepper value={qty} onChange={setQty} label="Cantidad" />
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-3">
                            <button
                                type="button"
                                onClick={handleAddToCart}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-500/25 transition-all hover:bg-primary-600 active:scale-[0.98]"
                            >
                                <ShoppingCart className="h-4.5 w-4.5" />
                                Añadir al carrito
                            </button>
                            <button
                                type="button"
                                onClick={() => setBuyOpen(true)}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-zinc-800 active:scale-[0.98]"
                            >
                                <Zap className="h-4.5 w-4.5" />
                                Comprar ahora
                            </button>
                            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 pt-1 text-sm">
                                <button
                                    type="button"
                                    onClick={() => setEnquiryOpen(true)}
                                    className="inline-flex items-center gap-2 font-semibold text-primary-700 hover:underline"
                                >
                                    <MailCheck className="h-4 w-4" />
                                    Solicitar información
                                </button>
                                <a href={PHONE_HREF} className="inline-flex items-center gap-1.5 font-medium text-zinc-700 hover:text-primary-600">
                                    <Phone className="h-3.5 w-3.5" />
                                    {PHONE_DISPLAY}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>

            {zoomOpen && (
                <ModalOverlay onClose={() => setZoomOpen(false)}>
                    <button
                        type="button"
                        onClick={() => setZoomOpen(false)}
                        aria-label="Cerrar imagen"
                        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-zinc-700 shadow-lg transition-colors hover:bg-zinc-100 hover:text-zinc-900"
                    >
                        <X size={18} />
                    </button>
                    <div className="relative max-h-[88vh] max-w-[96vw] overflow-auto rounded-2xl bg-white shadow-2xl" data-lenis-prevent>
                        {/* Wider than the screen on phones so the small text can be read by scrolling sideways */}
                        <Image
                            src={PRODUCT_IMAGE}
                            alt={PRODUCT_IMAGE_ALT}
                            width={1418}
                            height={1109}
                            sizes="(max-width: 768px) 220vw, 1418px"
                            className="block h-auto w-[220vw] max-w-none md:max-h-[88vh] md:w-auto md:max-w-[94vw]"
                        />
                    </div>
                </ModalOverlay>
            )}

            {buyOpen && (
                <OrderRequestModal
                    items={[{ title: PRODUCT_TITLE, size: SIZE, qty, image: PRODUCT_IMAGE }]}
                    onClose={() => setBuyOpen(false)}
                />
            )}

            {enquiryOpen && <RecycledEnquiryModal onClose={() => setEnquiryOpen(false)} />}
        </Section>
    )
}

function RecycledEnquiryModal({ onClose }: { onClose: () => void }) {
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', message: '' })
    const [interests, setInterests] = useState<string[]>([])
    const [errors, setErrors] = useState<Record<string, string>>({})

    const set = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((f) => ({ ...f, [key]: e.target.value }))
        if (errors[key]) setErrors((prev) => { const next = { ...prev }; delete next[key]; return next })
    }

    const toggleInterest = (label: string) =>
        setInterests((current) => (current.includes(label) ? current.filter((i) => i !== label) : [...current, label]))

    const validate = () => {
        const errs: Record<string, string> = {}
        if (!form.name.trim()) errs.name = 'Campo obligatorio'
        if (!form.phone.trim()) errs.phone = 'Campo obligatorio'
        if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Introduce un correo electrónico válido'
        setErrors(errs)
        return Object.keys(errs).length === 0
    }

    // Goes through the same endpoint and payload shape as the main contact form, with a subject
    // that tells the team where it came from. Company and interests have no field of their own
    // there, so they are written into the message instead of being lost.
    const { mutate, isPending, isError, error, reset } = useMutation({
        mutationFn: async () => {
            const lines = ['Solicitud de información sobre Bolsas Recicladas (formulario de la página de inicio).']
            if (form.company.trim()) lines.push(`Empresa: ${form.company.trim()}`)
            if (interests.length > 0) lines.push(`Interés: ${interests.join(', ')}`)
            if (form.message.trim()) lines.push('', form.message.trim())

            return axios.post('https://admin.novasac.es/api/contact-submit', {
                name: form.name.trim(),
                email: form.email.trim(),
                phone: form.phone.trim(),
                subject: 'Consulta sobre Bolsas Recicladas',
                message: lines.join('\n'),
            })
        },
        onSuccess() {
            toast.success('¡Consulta enviada correctamente!')
            setSubmitted(true)
        },
        onError(err) {
            toast.error(getApiError(err))
        },
    })

    const handleSubmit = () => {
        if (!validate()) return
        reset()
        mutate()
    }

    return (
        <ModalOverlay onClose={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="recycled-enquiry-title"
                className="w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-300"
                data-lenis-prevent
            >
                {/* Header */}
                <div className="flex items-start justify-between px-7 pt-7">
                    <div>
                        <span className="inline-block rounded-full border border-primary-200 bg-primary-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary-700">
                            Consulta
                        </span>
                        <h2 id="recycled-enquiry-title" className="mt-2.5 font-serif text-2xl text-stone-900">
                            Solicita información
                        </h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        disabled={isPending}
                        aria-label="Cerrar"
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-stone-400 transition-colors hover:bg-stone-100 hover:text-stone-700 disabled:pointer-events-none disabled:opacity-40"
                    >
                        <X size={16} />
                    </button>
                </div>

                {submitted ? (
                    <SuccessScreen
                        icon={<MailCheck size={28} className="text-primary-600" />}
                        title="¡Consulta recibida!"
                        subtitle="Gracias por escribirnos. Nuestro equipo te responderá en un plazo de 1 día laborable."
                        accentClass="bg-primary-50"
                        onClose={onClose}
                    />
                ) : (
                    <form
                        noValidate
                        onSubmit={(e) => { e.preventDefault(); handleSubmit() }}
                        className="max-h-[72vh] overflow-y-auto"
                    >
                        {/* What the enquiry is about */}
                        <div className="mx-7 mt-5 flex items-center gap-3 rounded-xl border border-primary-100 bg-primary-50/60 px-4 py-3">
                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary-100">
                                <Recycle size={22} className="text-primary-600" />
                            </div>
                            <div className="min-w-0">
                                <p className="truncate font-serif text-[13px] font-medium text-stone-800">Bolsas Recicladas</p>
                                <p className="mt-0.5 text-[11px] tracking-wide text-stone-500">
                                    Embalaje con plástico reciclado certificado · AENOR · UNE-EN 15343
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 px-7 py-6">
                            {isError && <ErrorBanner message={getApiError(error)} />}

                            <SectionDivider label="Tus datos" />

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <Field label="Nombre completo" required>
                                    <input
                                        className={inputCls + (errors.name ? ' border-red-300! ring-red-100!' : '')}
                                        placeholder="María García"
                                        autoComplete="name"
                                        value={form.name}
                                        onChange={set('name')}
                                        disabled={isPending}
                                    />
                                    {errors.name && <span className="text-[11px] text-red-500">{errors.name}</span>}
                                </Field>
                                <Field label="Teléfono de contacto" required>
                                    <input
                                        className={inputCls + (errors.phone ? ' border-red-300! ring-red-100!' : '')}
                                        placeholder="+34 600 123 456"
                                        type="tel"
                                        autoComplete="tel"
                                        value={form.phone}
                                        onChange={set('phone')}
                                        disabled={isPending}
                                    />
                                    {errors.phone && <span className="text-[11px] text-red-500">{errors.phone}</span>}
                                </Field>
                            </div>

                            <Field label="Correo electrónico" required>
                                <input
                                    className={inputCls + (errors.email ? ' border-red-300! ring-red-100!' : '')}
                                    placeholder="maria@ejemplo.com"
                                    type="email"
                                    autoComplete="email"
                                    value={form.email}
                                    onChange={set('email')}
                                    disabled={isPending}
                                />
                                {errors.email && <span className="text-[11px] text-red-500">{errors.email}</span>}
                            </Field>

                            <Field label="Nombre de la empresa">
                                <input
                                    className={inputCls}
                                    placeholder="Empresa Ejemplo, S.L."
                                    autoComplete="organization"
                                    value={form.company}
                                    onChange={set('company')}
                                    disabled={isPending}
                                />
                            </Field>

                            <SectionDivider label="Lo que te interesa" />

                            <Field label="Tipo de bolsa (opcional)">
                                <div className="flex flex-wrap gap-2">
                                    {PRODUCT_LINES.map(({ label }) => {
                                        const active = interests.includes(label)
                                        return (
                                            <button
                                                key={label}
                                                type="button"
                                                aria-pressed={active}
                                                disabled={isPending}
                                                onClick={() => toggleInterest(label)}
                                                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors disabled:opacity-60 ${active
                                                    ? 'border-primary-500 bg-primary-50 text-primary-700'
                                                    : 'border-stone-200 bg-white text-stone-600 hover:border-stone-400'
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                        )
                                    })}
                                </div>
                            </Field>

                            <Field label="Mensaje (opcional)">
                                <textarea
                                    className={inputCls + ' resize-none'}
                                    rows={3}
                                    placeholder="Cuéntanos qué necesitas: cantidad, medidas, plazo de entrega…"
                                    value={form.message}
                                    onChange={set('message')}
                                    disabled={isPending}
                                />
                            </Field>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 py-3.5 text-sm font-medium text-white transition-all hover:bg-primary-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:active:scale-100"
                            >
                                {isPending ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Enviando…
                                    </>
                                ) : (
                                    <>
                                        <MailCheck size={16} />
                                        Enviar consulta
                                    </>
                                )}
                            </button>

                            <p className="text-center text-[11px] leading-relaxed text-stone-400">
                                🔒 Respetamos tu privacidad. Te responderemos en un plazo de 1 día laborable.
                            </p>
                        </div>
                    </form>
                )}
            </div>
        </ModalOverlay>
    )
}
