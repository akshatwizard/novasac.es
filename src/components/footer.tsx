"use client";

import {
    Mail,
    Phone,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-zinc-100 pt-16 text-sm text-zinc-600">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">

                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Customer Service
                        </h4>

                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Company Information</li>
                            <li>Frequently Asked Questions</li>
                            <li>Shipping & Delivery</li>
                            <li>Returns & Refunds</li>
                            <li>Delivery Time & Information</li>
                        </ul>
                    </div>

                    {/* Assortment */}
                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Assortment
                        </h4>

                        <ul className="space-y-2">
                            <li>Courier Bags</li>
                            <li>Custom Printed Bags</li>
                            <li>Reusable Packaging Bags</li>
                            <li>Heavy Duty Bags</li>
                            <li>Industrial Packaging</li>
                            <li>Food Grade Bags</li>
                            <li>Bulk Packaging Deals</li>
                        </ul>
                    </div>

                    {/* Business */}
                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Business
                        </h4>

                        <ul className="space-y-2">
                            <li>Custom Bulk Orders</li>
                            <li>Wholesale Packaging Bags</li>
                            <li>Private Label Packaging</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Packaging Bags Co.
                        </h4>

                        <div className="space-y-3">

                            <div className="flex items-center gap-2 text-primary-500">
                                <Mail size={18} />
                                Send us an e-mail
                            </div>

                            <div className="flex items-center gap-2 text-primary-500">
                                <Phone size={18} />
                                Book a call
                            </div>

                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-5">

                            <div className="p-2 bg-white rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition">
                                <Facebook size={16} />
                            </div>

                            <div className="p-2 bg-white rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition">
                                <Instagram size={16} />
                            </div>

                            <div className="p-2 bg-white rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition">
                                <Linkedin size={16} />
                            </div>

                            <div className="p-2 bg-white rounded-full shadow-sm hover:bg-primary-500 hover:text-white transition">
                                <Youtube size={16} />
                            </div>

                        </div>

                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-6 border-t border-zinc-200">

                    <div className="flex items-center gap-3">
                        <img src="/images/footer/mastercard.png" className="h-7" />
                        <img src="/images/footer/visa.png" className="h-7" />
                        <img src="/images/footer/paypal.png" className="h-7" />
                        <img src="/images/footer/applepay.png" className="h-7" />
                    </div>

                    <div className="text-center text-xs text-zinc-500">
                        <span className="mx-3">Terms and Conditions</span>
                        <span className="mx-3">Privacy Statement</span>
                        <span className="mx-3">Cookie Policy</span>
                    </div>

                </div>

                <div className="text-center text-xs text-zinc-500 border-t border-zinc-200 py-5">

                    Copyright © {new Date().getFullYear()} Novasec.
                    <span className="mx-3">Design & developed by Wizards Next</span>
                </div>

            </div>
        </footer>
    );
}