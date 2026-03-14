import React from 'react'
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading, SubHeading } from './ui/headings'
import Image from 'next/image';
import Link from 'next/link';


const blogs = [
    {
        title: "Choosing the Right Packaging Bags for Your Business",
        description:
            "Discover how selecting the right packaging bags can improve product safety, brand visibility, and shipping efficiency.",
        image:
            "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=80",
        date: "12 Mar 2026",
        slug: "#",
    },
    {
        title: "Why Custom Printed Bags Help Your Brand Stand Out",
        description:
            "Custom printed packaging bags not only protect products but also help businesses create a strong brand identity.",
        image:
            "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        date: "10 Mar 2026",
        slug: "#",
    },
    {
        title: "Top Packaging Trends for E-commerce Businesses",
        description:
            "Explore the latest packaging innovations designed to improve durability, sustainability, and customer experience.",
        image:
            "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        date: "8 Mar 2026",
        slug: "#",
    },
    {
        title: "Benefits of Food Grade Packaging Bags",
        description:
            "Learn why food grade packaging materials are essential for maintaining hygiene, safety, and freshness.",
        image:
            "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?auto=format&fit=crop&w=1200&q=80",
        date: "5 Mar 2026",
        slug: "#",
    },
];

export default function Blogs() {
    return (
        <Section>
            <Wrapper>
                <div className='w-full flex flex-col gap-2'>
                    <Heading>
                        Latest Blogs
                    </Heading>
                    <SubHeading className='max-w-lg'>
                        Insights and updates from the packaging industry.
                    </SubHeading>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

                    {blogs.map((blog, index) => (
                        <Link
                            href={blog.slug}
                            key={index}
                            className="group border border-zinc-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                        >

                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <p className="text-xs text-zinc-400 mb-2">
                                    {blog.date}
                                </p>

                                <h3 className="font-semibold text-zinc-800 mb-2 leading-snug group-hover:text-primary-500 transition-colors">
                                    {blog.title}
                                </h3>

                                <p className="text-sm text-zinc-500 line-clamp-3">
                                    {blog.description}
                                </p>
                            </div>

                        </Link>
                    ))}

                </div>
            </Wrapper>
        </Section>
    )
}
