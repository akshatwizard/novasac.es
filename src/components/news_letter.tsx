"use client";

import { Mail } from "lucide-react";
import { Heading } from "./ui/headings";

export default function NewsletterSubscribe() {
    return (
        <section className="w-full py-20 bg-primary-100">
            <div className="max-w-4xl mx-auto px-6 text-center text-white">

                <Heading className="mb-3 text-primary-500">
                    Subscribe to Our Newsletter
                </Heading>

                <p className="text-primary-400 max-w-xl mx-auto mb-8 text-sm">
                    Stay updated with our latest packaging products, industry insights,
                    special offers, and company news delivered straight to your inbox.
                </p>

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
                        className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
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