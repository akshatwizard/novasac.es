import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactUs() {
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

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-800">Our Address</h4>
                                <p className="text-zinc-500 text-sm mt-1">
                                    Industrial Area Phase 2, Sector 15
                                    <br />
                                    Noida, Uttar Pradesh 201301, India
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-800">Email Address</h4>
                                <p className="text-zinc-500 text-sm mt-1">
                                    sales@packagingbags.com
                                    <br />
                                    support@packagingbags.com
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-primary-50 text-primary-500 rounded-lg">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-zinc-800">Contact Number</h4>
                                <p className="text-zinc-500 text-sm mt-1">
                                    +91 98765 43210
                                    <br />
                                    +91 91234 56789
                                </p>
                            </div>
                        </div>

                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">

                        <form className="space-y-5">

                            <div className="grid sm:grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                                />
                            </div>

                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                            />

                            <textarea
                                rows={5}
                                placeholder="Your Message"
                                className="w-full border border-zinc-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary-500"
                            />

                            <button
                                type="submit"
                                className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors"
                            >
                                Send Message
                            </button>

                        </form>

                    </div>

                </div>
            </Wrapper>
        </Section>
    )
}
