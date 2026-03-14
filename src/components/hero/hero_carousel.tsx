'use client';
import { motion, Variants } from "motion/react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { ShoppingBag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react";

export default function HeroBanner() {
    const [api, setApi] = useState<CarouselApi>()
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }))
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setActiveIndex(api.selectedScrollSnap());
        };

        api.on("select", onSelect);
        onSelect();

        return () => {
            api.off("select", onSelect);
        };
    }, [api]);

    const banner: Banner[] = [
        {
            title: "Premium Courier Bags",
            alt: "Premium Courier Bags",
            src: "/images/hero/banner-1.jpg",
            content:
                "Introducing our Premium Courier Bags designed for secure and tamper-proof shipping. Made from high-quality poly material, these bags are durable, waterproof, and ideal for e-commerce packaging.",
        },
        {
            title: "Laminated Packaging Bags",
            alt: "Laminated Packaging Bags",
            src: "/images/hero/banner-2.jpg",
            content:
                "Our Laminated Packaging Bags are crafted for strength and long-lasting protection. Perfect for retail and industrial packaging, they offer excellent durability, moisture resistance, and premium finishing.",
        },
        {
            title: "Custom Printed Packaging Bags",
            alt: "Custom Printed Packaging Bags",
            src: "/images/hero/banner-3.jpg",
            content:
                "Enhance your brand visibility with our Custom Printed Packaging Bags. Manufactured with advanced printing technology, these bags provide vibrant branding, durability, and professional packaging solutions.",
        },
        {
            title: "Food Grade Packaging Bags",
            alt: "Food Grade Packaging Bags",
            src: "/images/hero/banner-4.jpg",
            content:
                "Our Food Grade Packaging Bags are designed to safely store and transport food products. Made using hygienic materials, they provide excellent sealing, freshness protection, and reliable quality.",
        },
        {
            title: "Custom Printed Packaging Bags",
            alt: "Custom Printed Packaging Bags",
            src: "/images/hero/banner-5.jpg",
            content:
                "Enhance your brand visibility with our Custom Printed Packaging Bags. Manufactured with advanced printing technology, these bags provide vibrant branding, durability, and professional packaging solutions.",
        },
        {
            title: "Food Grade Packaging Bags",
            alt: "Food Grade Packaging Bags",
            src: "/images/hero/banner-6.jpg",
            content:
                "Our Food Grade Packaging Bags are designed to safely store and transport food products. Made using hygienic materials, they provide excellent sealing, freshness protection, and reliable quality.",
        },
    ];
    const activeBanner = banner[activeIndex];

    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
            },
        },
    }
    const itemVariants: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            filter: "blur(12px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 0.3,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    }


    return (
        <div className='w-full relative grid grid-cols-1 lg:grid-cols-2 lg:gap-0 gap-10'>
            <div className='relative w-full h-full lg:order-1 order-2'>
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary-200/30 blur-3xl rounded-full" />
                <motion.div
                    key={activeIndex}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.4, }}
                    className='relative z-10 w-full md:pr-10 flex flex-col justify-center h-full'
                >
                    <motion.div
                        variants={itemVariants}
                        className="flex gap-2 mb-4 flex-wrap"
                    >
                        <span className="px-3 py-1 text-xs bg-primary-100 text-primary-600 rounded-full">
                            Durable Material
                        </span>

                        <span className="px-3 py-1 text-xs bg-primary-100 text-primary-600 rounded-full">
                            Custom Printing
                        </span>

                        <span className="px-3 py-1 text-xs bg-primary-100 text-primary-600 rounded-full">
                            Bulk Orders Available
                        </span>
                    </motion.div>

                    <motion.span
                        variants={itemVariants}
                        className='block lg:text-4xl md:text-3xl text-2xl font-semibold text-primary-500 leading-tight font-sans!'
                    >
                        {activeBanner.title}
                    </motion.span>

                    <motion.span
                        variants={itemVariants}
                        className='block mt-3 text-zinc-700 font-normal sm:text-base text-sm leading-tight max-w-lg'
                    >
                        {activeBanner.content}
                    </motion.span>

                    <motion.div
                        variants={itemVariants}
                        className='md:mt-9 mt-4 flex flex-row items-center gap-4 md:pb-0 pb-5'
                    >

                        <Link
                            href={activeBanner.src}
                            className="px-5 py-2.5 bg-primary-500 text-white rounded-md shadow-md hover:bg-primary-600 hover:shadow-lg transition-all duration-300 font-medium"
                        >
                            Explore Collections
                        </Link>

                        <Link
                            href={activeBanner.src}
                            className="px-5 py-2.5 border border-primary-500 text-primary-500 rounded-md flex items-center gap-2 font-medium hover:bg-primary-50 transition"
                        >
                            <ShoppingBag size={16} />
                            Buy Now
                        </Link>
                    </motion.div>

                </motion.div>
                <img
                    src={"/images/logo/logo.png"}
                    className="absolute bottom-2 right-10 max-w-36 opacity-50"
                />
            </div>

            <Carousel className="relative w-full z-10 lg:order-2 order-1"
                plugins={[plugin.current]}
                opts={{
                    loop: true,
                }}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                setApi={setApi}
            >
                <CarouselContent>
                    {
                        banner.map((data, key) => (
                            <CarouselItem key={key} className='relative'>
                                <div className="relative w-full h-full">
                                    <Image
                                        src={data.src}
                                        alt="Banner"
                                        className="w-full object-cover h-full rounded-2xl"
                                        width={1080}
                                        height={400}
                                        loading={key === 0 ? "eager" : "lazy"}
                                        fetchPriority={key === 0 ? "high" : "low"}
                                    />
                                    <div className="absolute inset-0 bg-linear-to-tr from-black/40 via-transparent to-black/10 rounded-2xl" />
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>

                <CarouselPrevious
                    onClick={() => {
                        api?.scrollPrev();
                        plugin.current?.reset();
                    }}
                    className='border-none bg-primary-600 text-white -left-5 cursor-pointer hover:bg-primary-400 rounded-xs hover:text-white'
                />
                <CarouselNext
                    onClick={() => {
                        api?.scrollNext();
                        plugin.current?.reset();
                    }}
                    className='border-none bg-primary-600 text-white -right-5 cursor-pointer hover:bg-primary-400 rounded-xs hover:text-white'
                />
            </Carousel>
        </div>
    )
}


type Banner = {
    src: string;
    alt: string;
    title: string;
    content: string;
}

