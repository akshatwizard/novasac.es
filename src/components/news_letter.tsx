"use client";

import { Mail } from "lucide-react";
import { Heading } from "./ui/headings";

export default function NewsletterSubscribe() {
    return (
        <section className="w-full py-20 bg-primary-100">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">

                <Heading className="mb-3 text-primary-500">
                    Suscríbete a Nuestro Boletín
                </Heading>

                <p className="text-primary-400 max-w-xl mx-auto mb-8 text-sm">
                    Recibe en tu correo nuestras últimas novedades en productos de embalaje, análisis del sector,
                    ofertas especiales y noticias de la empresa.
                </p>

                <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">

                    <div className="relative flex-1">
                        <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                        />

                        <input
                            type="email"
                            placeholder="Introduce tu correo electrónico"
                            className="w-full bg-white text-zinc-700 rounded-lg py-3 pl-11 pr-4 text-sm outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                    >
                        Suscribirme
                    </button>

                </form>

                {/* Small note */}
                <p className="text-xs text-primary-400 mt-4">
                    Respetamos tu privacidad. Nada de spam, solo novedades útiles.
                </p>

            </div>
        </section>
    );
}