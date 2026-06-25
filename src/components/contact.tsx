'use client'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { Mail, Phone, MapPin } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';

type ContactDetails = {
    name: string;
    email: string;
    phone: string;
    subject?: string;
    message: string
}

export default function ContactUs() {
    const [contactDetails, setContactDetails] = useState<ContactDetails>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setContactDetails(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const { mutate, isPending } = useMutation({
        mutationFn: async () => {
            return (
                await axios.post("https://www.gangapapers.in/novasac/api/contact-submit", contactDetails)
            )
        },
        onSuccess(value) {
            toast.success(value.data?.message)
            setContactDetails({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: ""
            })
        },
        onError(err) {
            toast.error(err.message);
        }
    })

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        mutate()
    }

    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2'>
                    <Heading>
                        Contact Us
                    </Heading>
                    <SubHeading className='max-w-lg'>
                        Have questions about our packaging solutions? Our team is here to help.
                    </SubHeading>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">

                        {/* NOVASAC Logo */}
                        <div>
                            <Image
                                src="/images/logo/logo.jpg"
                                alt="NOVASAC Logo"
                                width={180}
                                height={60}
                                className="object-contain"
                            />
                            <p className="mt-3 text-sm font-semibold text-zinc-700 tracking-wide">
                                NOVASAC PACKAGING S.L.U.
                            </p>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-800">Address</h4>
                                <Link
                                    href="https://maps.google.com/?q=Pepe+Alba+29,+3-12,+46022+Valencia,+Spain"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-500 text-sm mt-1 hover:text-primary-500"
                                >
                                    Pepe Alba 29, 3-12, 46022 Valencia, Spain
                                    <br />
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-800">Email</h4>
                                <Link
                                    href={"mailto:laura.sanjuan@novasac.es"}
                                    className="text-zinc-500 text-sm mt-1 hover:text-primary-500">
                                    laura.sanjuan@novasac.es
                                </Link>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-800">Contact</h4>
                                <Link href={"tel:+34628188044"} className="text-zinc-500 text-sm mt-1 hover:text-primary-500">
                                    +34 628188044
                                </Link>
                                <br />
                                <Link href={"tel:+34961070274"} className="text-zinc-500 text-sm mt-1 hover:text-primary-500">
                                    +34 961070274
                                </Link>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">

                        <form className="space-y-5" onSubmit={handleSubmit}>

                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    name='name'
                                    type="text"
                                    onChange={handleChange}
                                    value={contactDetails.name}
                                    placeholder="Your Name"
                                    className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                                />
                                <input
                                    type="email"
                                    name='email'
                                    onChange={handleChange}
                                    value={contactDetails.email}
                                    placeholder="Email Address"
                                    className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                                />
                            </div>

                            <input
                                type="tel"
                                name='phone'
                                onChange={handleChange}
                                value={contactDetails.phone}
                                placeholder="Phone Number"
                                className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                            />

                            <input
                                type="text"
                                name='subject'
                                onChange={handleChange}
                                value={contactDetails.subject}
                                placeholder="Subject"
                                className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                            />

                            <textarea
                                rows={5}
                                name='message'
                                onChange={handleChange}
                                value={contactDetails.message}
                                placeholder="Your Message"
                                className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                            />

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors flex items-center justify-center"
                            >
                                {isPending ? <div className="w-4 h-4 border-2 border-white border-t-zinc-800 rounded-full animate-spin" /> : "Send Message"}
                            </button>

                        </form>

                    </div>

                </div>
            </Wrapper>
        </Section>
    )
}