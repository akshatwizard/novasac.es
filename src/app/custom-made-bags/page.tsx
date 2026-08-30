"use client";

import Section from "@/components/ui/section";
import Wrapper from "@/components/ui/wrapper";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { motion, Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";
import toast from "react-hot-toast";


interface FormData {
    companyName: string;
    name: string;
    email: string;
    phone: string;
    // requestFor: string;
    message: string;
    attachment: File | null;
    marketing: boolean;
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    requestFor?: string;
    message?: string;
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: (delay: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
    }),
};


const features = [
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        ),
        title: "Dimensiones Personalizadas",
        desc: "Indica el ancho, alto y profundidad exactos para adaptarse a tu producto y necesidades de almacenamiento.",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 8v4l3 3" />
            </svg>
        ),
        title: "Respuesta Rápida",
        desc: "Trabajamos con rapidez para revisar tu solicitud y ofrecerte un presupuesto competitivo lo antes posible.",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
        ),
        title: "Tu Logo y Tus Colores",
        desc: "Imprime tu marca directamente en las bolsas. Elige los colores y añade tu logo.",
    },
    {
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
        title: "Calidad Certificada",
        desc: "Todas las bolsas personalizadas cumplen con los estándares del sector en seguridad y calidad para un rendimiento fiable.",
    },
];

const requestOptions = [
    { value: "logo", label: "Bulk Bag with your logo (min 1 pallet)" },
    { value: "custom", label: "Custom Big Bag (min 1 pallet)" },
    { value: "standard", label: "Standard Big Bag 2 pallets or more" },
];


function Field({
    label,
    required,
    error,
    children,
}: {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1.5">
            <label className="font-sans text-xs uppercase tracking-widest text-stone-500">
                {label}
                {required && <span className="text-primary-600 ml-0.5">*</span>}
            </label>
            {children}
            {error && (
                <p className="font-sans text-xs text-red-500 mt-0.5">{error}</p>
            )}
        </div>
    );
}

const inputClass =
    "w-full font-sans text-sm text-stone-800 bg-white border border-stone-200 rounded-xl px-4 py-3 outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-100 transition-all duration-200 placeholder:text-stone-300";


export default function CustomBags() {
    const queryClient = useQueryClient();
    const [form, setForm] = useState<FormData>({
        companyName: "",
        name: "",
        email: "",
        phone: "",
        // requestFor: "",
        message: "",
        attachment: null,
        marketing: false,
    });

    const [errors, setErrors] = useState<FormErrors>({});

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const target = e.target as HTMLInputElement;
        const { name, value, type } = target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? target.checked : value,
        }));
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] ?? null;
        setForm((prev) => ({ ...prev, attachment: file }));
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        if (!form.name.trim()) newErrors.name = "El nombre es obligatorio.";
        if (!form.email.trim()) newErrors.email = "El email es obligatorio.";
        else if (!/\S+@\S+\.\S+/.test(form.email))
            newErrors.email = "Introduce una dirección de email válida.";
        if (!form.phone.trim()) newErrors.phone = "El número de teléfono es obligatorio.";
        // if (!form.requestFor) newErrors.requestFor = "Please select a request type.";
        if (!form.message.trim()) newErrors.message = "El mensaje es obligatorio.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const { mutate, isPending, isSuccess, isError, error } = useMutation({
        mutationFn: async () => {
            return (
                await axios.post("https://admin.novasac.es/api/custom-made-bags/submit", form, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                })
            )
        },
        onSuccess(val) {
            toast.success(val.data?.message);
            setForm({
                companyName: "",
                name: "",
                email: "",
                phone: "",
                // requestFor: "",
                message: "",
                attachment: null,
                marketing: false,
            })
            setTimeout(() => {
                queryClient.resetQueries(); // or reset mutation
            }, 3000);
        },
        onError(err) {


            toast.error(err.message);
        }
    })
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!validate()) return;
        mutate()
    };
    return (
        <main className=" min-h-screen">

            <Section className="overflow-hidden relative">
                <Wrapper>
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <motion.p
                                className="font-sans text-xs tracking-[0.2em] uppercase text-primary-500 mb-4"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, ease: "easeOut" }}
                            >
                                Novasac Packaging
                            </motion.p>
                            <motion.h1
                                className="font-mono text-4xl md:text-6xl font-light text-stone-900 leading-tight mb-5"
                                initial={{ opacity: 0, y: 22 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
                            >
                                A Medida<br />
                                <strong className="text-primary-600">Big Bags</strong>
                            </motion.h1>
                            <motion.p
                                className="font-sans md:text-base text-sm text-stone-500 leading-relaxed max-w-md"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
                            >
                                ¿Te gustaría un big bag con especificaciones de producto diferentes?
                                Además de nuestra gama estándar, también ofrecemos soluciones a
                                medida: big bags de alta calidad hechos a tu medida y a un precio
                                inmejorable.
                            </motion.p>
                            <motion.p
                                className="font-sans md:text-base text-sm text-stone-500 leading-relaxed max-w-md mt-4"
                                initial={{ opacity: 0, y: 14 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, ease: "easeOut", delay: 0.28 }}
                            >
                                Fabrica tus big bags según tus necesidades específicas de tamaño,
                                dimensiones, colores y mucho más. Solo tienes que rellenar el
                                formulario y nos pondremos en contacto contigo lo antes posible
                                para preparar tu presupuesto.
                            </motion.p>
                        </div>

                        <motion.div
                            className="w-full h-full"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        >
                            <Image
                                src={"/images/custom-bag/bag.jpg"}
                                alt="Bolsas Personalizadas"
                                width={1080}
                                height={1080}
                                className="w-full h-full object-contain"
                                priority

                            />
                        </motion.div>
                    </div>

                    <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-2">
                        {features.map((f, i) => (
                            <div
                                key={f.title}
                                className="flex items-start gap-4 bg-white border border-stone-200 rounded-2xl px-5 py-4"
                            >
                                <div className="w-9 h-9 shrink-0 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                                    {f.icon}
                                </div>
                                <div>
                                    <p className="font-sans text-sm font-medium text-stone-800">{f.title}</p>
                                    <p className="font-sans text-xs text-stone-400 leading-relaxed mt-0.5">{f.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Wrapper>
            </Section>

            <Section>
                <Wrapper>
                    <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-start">

                        {/* ── Quote Form ── */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true, amount: 0.1 }}
                        >
                            <div className="mb-8">
                                <p className="font-sans text-xs tracking-[0.2em] uppercase text-primary-500 mb-2">
                                    Solicita un Presupuesto
                                </p>
                                <h2 className="font-mono text-3xl md:text-4xl font-light text-stone-900">
                                    Cuéntanos qué<br />
                                    <strong className="text-primary-600">necesitas</strong>
                                </h2>
                            </div>

                            {isSuccess ? (
                                <motion.div
                                    className="bg-white border border-primary-200 rounded-2xl p-10 text-center"
                                    initial={{ opacity: 0, scale: 0.97 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="w-14 h-14 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center mx-auto mb-5">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                                            <polyline points="22 4 12 14.01 9 11.01" />
                                        </svg>
                                    </div>
                                    <h3 className="font-mono text-2xl font-light text-stone-900 mb-2">¡Solicitud enviada!</h3>
                                    <p className="font-sans text-sm text-stone-500 leading-relaxed max-w-sm mx-auto">
                                        Gracias por tu solicitud. Nuestro equipo revisará tus necesidades y se pondrá en contacto contigo lo antes posible.
                                    </p>
                                </motion.div>
                            ) : (
                                <form
                                    onSubmit={handleSubmit}
                                    className="bg-white border border-stone-200 rounded-2xl p-6 md:p-8 space-y-5"
                                    noValidate
                                >
                                    {isError && (
                                        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                                            <p className="font-sans text-sm text-red-600">
                                                No hemos podido enviar tu solicitud. Por favor, inténtalo de nuevo.
                                            </p>
                                        </div>
                                    )}

                                    {/* Company Name */}
                                    <Field label="Nombre de la Empresa">
                                        <input
                                            type="text"
                                            name="companyName"
                                            value={form.companyName}
                                            onChange={handleChange}
                                            placeholder="Nombre de tu empresa"
                                            className={inputClass}
                                        />
                                    </Field>

                                    {/* Name + Email */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <Field label="Tu Nombre" required error={errors.name}>
                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Nombre completo"
                                                className={`${inputClass} ${errors.name ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
                                            />
                                        </Field>
                                        <Field label="Tu Email" required error={errors.email}>
                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="tu@empresa.com"
                                                className={`${inputClass} ${errors.email ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
                                            />
                                        </Field>
                                    </div>

                                    {/* Phone */}
                                    <Field label="Número de Teléfono" required error={errors.phone}>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="+34 000 000 000"
                                            className={`${inputClass} ${errors.phone ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
                                        />
                                    </Field>

                                    {/* Request For — styled radio cards */}
                                    {/* <Field label="Request For" required error={errors.requestFor}>
                                        <div className="grid gap-2 mt-1">
                                            {requestOptions.map((opt) => (
                                                <label
                                                    key={opt.value}
                                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl border cursor-pointer transition-all duration-150 ${form.requestFor === opt.value
                                                        ? "border-primary-400 bg-primary-50 text-primary-700"
                                                        : "border-stone-200 bg-white text-stone-600 hover:border-stone-300"
                                                        }`}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="requestFor"
                                                        value={opt.value}
                                                        checked={form.requestFor === opt.value}
                                                        onChange={handleChange}
                                                        className="accent-primary-600"
                                                    />
                                                    <span className="font-sans text-sm">{opt.label}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </Field> */}

                                    {/* Message */}
                                    <Field label="Tu Mensaje" required error={errors.message}>
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            rows={5}
                                            placeholder="Describe tus necesidades: dimensiones, capacidad de carga, material, cantidad, lugar de entrega..."
                                            className={`${inputClass} resize-none ${errors.message ? "border-red-300 focus:border-red-400 focus:ring-red-100" : ""}`}
                                        />
                                    </Field>

                                    {/* Attachment */}
                                    <Field label="Tu Archivo Adjunto">
                                        <label className="flex items-center gap-3 px-4 py-3 rounded-xl border border-dashed border-stone-300 bg-stone-50 cursor-pointer hover:border-primary-300 hover:bg-primary-50 transition-all duration-200 group">
                                            <div className="w-8 h-8 rounded-lg bg-white border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-primary-500 group-hover:border-primary-200 transition-colors">
                                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <p className="font-sans text-sm text-stone-500 truncate">
                                                    {form.attachment ? form.attachment.name : "Haz clic para adjuntar un archivo"}
                                                </p>
                                                <p className="font-sans text-xs text-stone-400">PDF, PNG, JPG, DXF hasta 10MB</p>
                                            </div>
                                            <input
                                                type="file"
                                                accept=".pdf,.png,.jpg,.jpeg,.dxf"
                                                onChange={handleFile}
                                                className="sr-only"
                                            />
                                        </label>
                                    </Field>

                                    {/* Marketing checkbox */}
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <div className={`mt-0.5 w-4 h-4 shrink-0 rounded border flex items-center justify-center transition-all ${form.marketing ? "bg-primary-600 border-primary-600" : "border-stone-300 bg-white"}`}>
                                            <input
                                                type="checkbox"
                                                name="marketing"
                                                checked={form.marketing}
                                                onChange={handleChange}
                                                className="sr-only"
                                            />
                                            {form.marketing && (
                                                <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="white" strokeWidth="2">
                                                    <polyline points="2 6 5 9 10 3" />
                                                </svg>
                                            )}
                                        </div>
                                        <span className="font-sans text-xs text-stone-400 leading-relaxed">
                                            Acepto recibir comunicaciones comerciales, ofertas especiales y novedades de Novasac.
                                        </span>
                                    </label>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isPending}
                                        className="w-full font-sans text-sm px-6 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                    >
                                        {isPending ? (
                                            <>
                                                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M21 12a9 9 0 11-6.219-8.56" />
                                                </svg>
                                                Enviando solicitud...
                                            </>
                                        ) : (
                                            <>
                                                Enviar Solicitud
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                                </svg>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* ── Sidebar ── */}
                        <div className="space-y-5">

                            {/* Logo print info */}
                            <motion.div
                                className="bg-white border border-stone-200 rounded-2xl p-6"
                                variants={fadeUp}
                                custom={0.1}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <div className="w-9 h-9 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="3" y="3" width="18" height="18" rx="2" />
                                        <circle cx="8.5" cy="8.5" r="1.5" />
                                        <polyline points="21 15 16 10 5 21" />
                                    </svg>
                                </div>
                                <h3 className="font-mono text-lg font-light text-stone-900 mb-2">
                                    ¿Bolsas con tu logo?
                                </h3>
                                <p className="font-sans text-sm font-light text-stone-500 leading-relaxed">
                                    Si te interesa imprimir tu logo en los big bags, puedes optar
                                    por una bolsa personalizada con tu logo impreso, o elegir de
                                    nuestra gama estándar y añadir tu logo.
                                </p>
                                {/* <a
                                    href="/bags-with-logo"
                                    className="inline-flex items-center gap-1.5 mt-4 font-sans text-xs text-primary-600 hover:text-primary-700 transition-colors"
                                >
                                    View printed big bags
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a> */}
                            </motion.div>

                            {/* Minimum order info */}
                            {/* <motion.div
                                className="bg-primary-50 border border-primary-100 rounded-2xl p-6"
                                variants={fadeUp}
                                custom={0.18}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <h3 className="font-mono text-base font-light text-primary-700 mb-3">
                                    Minimum orders
                                </h3>
                                <ul className="space-y-2">
                                    {requestOptions.map((opt) => (
                                        <li key={opt.value} className="flex items-start gap-2">
                                            <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0" />
                                            <span className="font-sans text-xs text-primary-700 leading-relaxed">
                                                {opt.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div> */}

                            {/* Process steps */}
                            <motion.div
                                className="bg-white border border-stone-200 rounded-2xl p-6"
                                variants={fadeUp}
                                custom={0.24}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <h3 className="font-mono text-lg font-light text-stone-900 mb-5">
                                    Cómo Funciona
                                </h3>
                                <ol className="space-y-5">
                                    {[
                                        { step: "01", title: "Rellena el formulario", desc: "Envíanos tus necesidades y especificaciones." },
                                        { step: "02", title: "Revisamos tu solicitud", desc: "Nuestro equipo revisa tus necesidades y prepara una oferta." },
                                        { step: "03", title: "Recibe tu presupuesto", desc: "Nos ponemos en contacto contigo con un presupuesto personalizado y competitivo." },
                                        { step: "04", title: "Producción y entrega", desc: "Tus bolsas se fabrican y se entregan en tu puerta." },
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <span className="font-mono text-xs text-primary-500 shrink-0 mt-0.5 w-6">
                                                {item.step}
                                            </span>
                                            <div>
                                                <p className="font-sans text-sm font-medium text-stone-700">{item.title}</p>
                                                <p className="font-sans text-xs text-stone-400 leading-relaxed mt-0.5">{item.desc}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </motion.div>

                            {/* Contact shortcut */}
                            <motion.div
                                className="bg-stone-900 rounded-2xl p-6 text-center"
                                variants={fadeUp}
                                custom={0.3}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <p className="font-sans text-xs text-stone-400 mb-1">¿Necesitas ayuda antes?</p>
                                <h3 className="font-mono text-lg font-light text-white mb-3">
                                    Habla con nuestro equipo
                                </h3>
                                <Link
                                    href="/contact"
                                    className="font-sans inline-block text-xs px-6 py-2.5 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors duration-200"
                                >
                                    Contáctanos
                                </Link>
                            </motion.div>

                        </div>
                    </div>
                </Wrapper>
            </Section>

            {/* ── Features strip (mobile) ── */}
            <Section className="md:hidden border-t border-stone-200 bg-white px-6 py-10">
                <div className="max-w-6xl mx-auto space-y-4">
                    {features.map((f) => (
                        <div key={f.title} className="flex items-start gap-4">
                            <div className="w-9 h-9 shrink-0 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                                {f.icon}
                            </div>
                            <div>
                                <p className="font-sans text-sm font-medium text-stone-800">{f.title}</p>
                                <p className="font-sans text-xs text-stone-400 leading-relaxed mt-0.5">{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </main>
    );
}
