'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ArrowRight, BadgeCheck, Leaf, Loader2, MailCheck, Phone, Recycle, ShieldCheck, X } from 'lucide-react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading } from './ui/headings'
import {
    ErrorBanner,
    Field,
    ModalOverlay,
    SectionDivider,
    SuccessScreen,
    getApiError,
    inputCls,
} from './product_modal'

const PHONE_DISPLAY = '+34 628 188 044'
const PHONE_HREF = 'tel:+34628188044'

// Claims below are taken from the /recycled-bags page so the homepage and that page always agree.
const FEATURES = [
    { id: 'material', icon: Recycle, text: <>Plástico reciclado postconsumo y postindustrial</> },
    { id: 'carbono', icon: Leaf, text: <>Menor huella de carbono que los polímeros vírgenes</> },
    // nowrap keeps the standard's name ("UNE-EN 15343") from breaking at its hyphen on narrow screens
    { id: 'trazabilidad', icon: ShieldCheck, text: <>Trazabilidad certificada según la norma <span className="whitespace-nowrap">UNE-EN 15343</span></> },
    { id: 'normativa', icon: BadgeCheck, text: <>Cumplen la normativa medioambiental de la UE</> },
]

// The same four product lines (and anchors) as the /recycled-bags page.
const PRODUCT_LINES = [
    { label: 'Big Bags', href: '/recycled-bags#fibc' },
    { label: 'Sacos de PP', href: '/recycled-bags#ppws' },
    { label: 'Bolsas de jardín', href: '/recycled-bags#garden' },
    { label: 'Bolsas de basura', href: '/recycled-bags#garbage' },
]

export default function RecycledBagsSection() {
    const [open, setOpen] = useState(false)

    return (
        <Section>
            <Wrapper className="pt-0! sm:pt-0! md:pt-0! lg:pt-0!">
                <div className="group relative grid overflow-hidden rounded-3xl border border-primary-100 bg-linear-to-br from-primary-50 via-white to-white shadow-soft lg:grid-cols-2">

                    {/* Image */}
                    <div className="relative aspect-4/3 overflow-hidden lg:aspect-auto lg:min-h-120">
                        <Image
                            src="/images/recycled/home-recycled-bags.jpg"
                            alt="Bolsa negra reciclada de Novasac llena de restos de jardín sobre el césped"
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover object-[85%_center] transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                            <BadgeCheck className="h-3.5 w-3.5 text-primary-600" />
                            Certificadas AENOR
                        </span>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-center gap-6 p-6 md:p-10 lg:p-12">
                        <div className="flex flex-col gap-3">
                            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary-700">
                                <Recycle className="h-3.5 w-3.5" />
                                Embalaje sostenible certificado
                            </span>
                            <Heading>100 % Bolsas Recicladas</Heading>
                            <p className="max-w-lg text-sm leading-relaxed text-zinc-600 md:text-base">
                                Bolsas y sacos fabricados con plástico reciclado: menos impacto ambiental,
                                sin renunciar a la resistencia ni a la durabilidad.
                            </p>
                        </div>

                        <ul className="grid gap-3 sm:grid-cols-2">
                            {FEATURES.map(({ id, icon: Icon, text }) => (
                                <li key={id} className="flex items-start gap-3">
                                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600">
                                        <Icon className="h-4.5 w-4.5" />
                                    </span>
                                    <span className="pt-1.5 text-sm leading-snug text-zinc-700">{text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-wrap items-center gap-2">
                            <span className="mr-1 text-xs font-semibold uppercase tracking-widest text-zinc-400">
                                Disponibles en
                            </span>
                            {PRODUCT_LINES.map((line) => (
                                <Link
                                    key={line.label}
                                    href={line.href}
                                    className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-medium text-stone-700 transition-colors hover:border-primary-400 hover:text-primary-700"
                                >
                                    {line.label}
                                </Link>
                            ))}
                        </div>

                        <div className="flex flex-col gap-3 pt-1">
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/25 transition-all hover:bg-primary-700 active:scale-[0.98]"
                                >
                                    <MailCheck className="h-4.5 w-4.5" />
                                    Solicitar información
                                </button>
                                <Link
                                    href="/recycled-bags"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-200 bg-white px-7 py-3.5 text-sm font-semibold text-primary-700 transition-colors hover:border-primary-400 hover:bg-primary-50"
                                >
                                    Ver bolsas recicladas
                                    <ArrowRight className="h-4 w-4" />
                                </Link>
                            </div>

                            <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500">
                                <span>Sin compromiso · Respuesta en 1 día laborable</span>
                                <span className="hidden text-zinc-300 sm:inline">|</span>
                                <a href={PHONE_HREF} className="inline-flex items-center gap-1.5 font-medium text-zinc-700 hover:text-primary-600">
                                    <Phone className="h-3.5 w-3.5" />
                                    ¿Prefieres llamar? {PHONE_DISPLAY}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>

            {open && <RecycledEnquiryModal onClose={() => setOpen(false)} />}
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
