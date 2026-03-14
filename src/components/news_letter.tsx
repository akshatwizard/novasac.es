"use client";

import { Mail } from "lucide-react";

export default function NewsletterSubscribe() {
    return (
        <section className="w-full py-20 bg-linear-to-r from-primary-500 to-primary-600">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">

                {/* Heading */}
                <h2 className="text-3xl font-semibold mb-4">
                    Subscribe to Our Newsletter
                </h2>

                <p className="text-white/80 max-w-xl mx-auto mb-8 text-sm">
                    Stay updated with our latest packaging products, industry insights,
                    special offers, and company news delivered straight to your inbox.
                </p>

                {/* Subscribe Form */}
                <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">

                    <div className="relative flex-1">
                        <Mail
                            size={18}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                        />

                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="w-full bg-white text-zinc-700 rounded-lg py-3 pl-11 pr-4 text-sm outline-none"
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-zinc-800 transition-colors"
                    >
                        Subscribe
                    </button>

                </form>

                {/* Small note */}
                <p className="text-xs text-white/60 mt-4">
                    We respect your privacy. No spam, only useful updates.
                </p>

            </div>
        </section>
    );
}