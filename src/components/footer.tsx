"use client";

import { industries } from "@/constant/industries_data";
import {
    Mail,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
    MapIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-zinc-100 pt-16 text-sm text-zinc-600">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

                    {/* Customer Service */}
                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Customer Service
                        </h4>

                        <ul className="space-y-2">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/company-information">Company Information</Link></li>
                            <li><Link href="/faq">Frequently Asked Questions</Link></li>
                            <li><Link href="/shipping">Shipping & Delivery</Link></li>
                            <li><Link href="/returns">Returns & Refunds</Link></li>
                            <li><Link href="/delivery-info">Delivery Info</Link></li>
                        </ul>
                    </div>

                    {/* Assortment */}
                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Assortment
                        </h4>

                        <ul className="space-y-2">
                            <li><Link href="/products/courier-bags">Courier Bags</Link></li>
                            <li><Link href="/products/custom-printed">Custom Printed Bags</Link></li>
                            <li><Link href="/products/reusable">Reusable Packaging</Link></li>
                            <li><Link href="/products/heavy-duty">Heavy Duty Bags</Link></li>
                            <li><Link href="/products/industrial">Industrial Packaging</Link></li>
                            <li><Link href="/products/food-grade">Food Grade Bags</Link></li>
                            <li><Link href="/products/bulk">Bulk Deals</Link></li>
                        </ul>
                    </div>

                    {/* ✅ Industries We Serve (Dynamic) */}
                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Industries We Serve
                        </h4>

                        <ul className="space-y-2">
                            {industries.map((industry) => (
                                <li key={industry.slug}>
                                    <Link href={`/industries/${industry.slug}`}>
                                        {industry.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Contact Us
                        </h4>

                        <div className="space-y-3">

                            {/* Email */}
                            <Link
                                href="mailto:laura.sanjuan@novasac.es"
                                className="flex items-center gap-2 text-primary-500"
                            >
                                <Mail size={18} />
                                laura.sanjuan@novasac.es
                            </Link>

                            {/* Phone 1 */}
                            <Link
                                href="tel:+34628188044"
                                className="flex items-center gap-2 text-primary-500"
                            >
                                <Phone size={18} />
                                +34 628 188 044
                            </Link>

                            {/* Phone 2 */}
                            <Link
                                href="tel:+34961070274"
                                className="flex items-center gap-2 text-primary-500"
                            >
                                <Phone size={18} />
                                +34 96 107 02 74
                            </Link>

                            {/* Location */}
                            <Link
                                href="https://maps.google.com/?q=Plaça del Professor Santiago Grisolia, 1, Valencia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2 text-primary-500"
                            >
                                <MapIcon size={18} className="shrink-0" />
                                Plaça del Professor Santiago Grisolia, 1,
                                Poblats Marítims, 46022 Valencia
                            </Link>

                        </div>

                        <div className="flex gap-3 mt-5">

                            <Link href="#" aria-label="Facebook Handle">
                                <div className="p-2 bg-white rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition">
                                    <Facebook size={16} />
                                </div>
                            </Link>

                            <Link href="#" aria-label="Instagram Handle">
                                <div className="p-2 bg-white rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition">
                                    <Instagram size={16} />
                                </div>
                            </Link>

                            <Link href="#" aria-label="LinkedIn Handle">
                                <div className="p-2 bg-white rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition">
                                    <Linkedin size={16} />
                                </div>
                            </Link>

                            <Link href="#" aria-label="Youtube Handle">
                                <div className="p-2 bg-white rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition">
                                    <Youtube size={16} />
                                </div>
                            </Link>

                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-t border-zinc-200">

                    <div className="flex items-center gap-3">
                        <img alt="Payment Options" src="/images/footer/mastercard.png" className="h-7" />
                        <img alt="Payment Options" src="/images/footer/visa.png" className="h-7" />
                        <img alt="Payment Options" src="/images/footer/paypal.png" className="h-7" />
                        <img alt="Payment Options" src="/images/footer/applepay.png" className="h-7" />
                    </div>

                    <div className="text-center text-xs text-zinc-500">
                        <Link href="/terms" className="mx-3">Terms and Conditions</Link>
                        <Link href="/privacy" className="mx-3">Privacy Statement</Link>
                        <Link href="/cookies" className="mx-3">Cookie Policy</Link>
                    </div>

                </div>

                <div className="text-center text-xs text-zinc-500 border-t border-zinc-200 py-5">
                    Copyright © {new Date().getFullYear()} Novasac.
                    <span className="mx-3">Design & developed by Wizards Next</span>
                </div>

            </div>
        </footer>
    );
}