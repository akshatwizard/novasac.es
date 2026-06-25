"use client";

import { industries } from "@/constant/industries_data";
import { MenuItems } from "@/constant/menu";
import { HomeCategoryData, HomeCategoryResponse } from "@/types/home_category.types";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
    const { data, isLoading, error, isFetching } = useQuery<HomeCategoryData[]>({
        queryKey: ["home_category"],
        queryFn: async () => {
            const res = await axios.get<HomeCategoryResponse>(
                "https://www.gangapapers.in/novasac/api/home/category"
            );
            return res.data.data;
        },
    });

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
                            <li><Link href="/#faq">Frequently Asked Questions</Link></li>
                            <li><Link href="/custom-made-bags">Custom-made Bulk Bags</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            {/* <li><Link href="/delivery-info">Delivery Info</Link></li> */}
                        </ul>
                    </div>

                    {/* Assortment */}
                    <div>
                        <h4 className="font-semibold text-zinc-800 mb-4">
                            Assortment
                        </h4>

                        <ul className="space-y-1">
                            {
                                (isFetching || isLoading) && (
                                    Array.from({ length: 7 }).map((_, i) => (
                                        <div key={i} className='w-24 bg-white h-3 mr-5 animate-pulse' />
                                    ))
                                )
                            }
                            {
                                data?.map((menu) => (
                                    <li key={menu.id}>
                                        <Link href={`/category/${menu.slug}`}>
                                            {menu.title}
                                        </Link>
                                    </li>
                                ))
                            }
                            {
                                MenuItems.map((industry) => (
                                    <li key={industry.name}>
                                        <Link href={industry.path}>
                                            {industry.name}
                                        </Link>
                                    </li>
                                ))
                            }
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

                            <Link
                                href="https://maps.google.com/?q=Pepe+Alba+29,+3-12,+46022+Valencia,+Spain"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-2 text-primary-500"
                            >
                                <MapIcon size={18} className="shrink-0" />
                                <span>
                                    <span className="font-semibold">NOVASAC PACKAGING S.L.U.</span> <br />
                                    Pepe Alba 29, 3-12, 46022 Valencia, Spain
                                </span>
                            </Link>


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