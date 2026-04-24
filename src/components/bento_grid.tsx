import Link from 'next/link';
import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Image from "next/image";

type GridItems = {
    title: string;
    description?: string;
    image: string;
    large?: boolean;
    cta: string;
    url: string;
    tag?: string;
}

const items: GridItems[] = [
    {
        title: "Our Popular Product",
        description: "High-quality branded packaging solutions for businesses of every scale.",
        image: "/images/bento/popular_product.png",
        large: true,
        cta: "Shop Now",
        url: "/popular-products",
        tag: "Featured"
    },
    {
        title: "Big Bag Outlet",
        description: "Strong and durable bags for construction and industrial materials.",
        image: "/images/bento/big_bag.png",
        cta: "Go To Outlet",
        url: "/category/big-bags",
        tag: "Industrial"
    },
    {
        title: "Best Deals",
        description: "Curated offers updated weekly.",
        image: "/images/bento/best_deal.png",
        cta: "Check All Deals",
        url: "/category/asbestos-bags",
        tag: "Offers"
    },
];

export default function BentoGrid() {
    return (
        <Section>
            <Wrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`group relative overflow-hidden bg-neutral-900 ${item.large
                                ? "md:col-span-2 h-90" : "h-70"}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                priority={i === 0 ? true : false}
                                fetchPriority={i === 0 ? 'high' : "auto"}
                                sizes={item.large
                                    ? "(max-width: 768px) 100vw, 100vw"
                                    : "(max-width: 768px) 100vw, 50vw"
                                }
                                className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[0.65]"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/90 group-hover:via-black/40" />

                            {item.tag && (
                                <span className="absolute top-5 left-5 z-10 rounded-full bg-primary-500 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white">
                                    {item.tag}
                                </span>
                            )}

                            <div className="absolute bottom-0 left-0 right-0 z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 p-6">
                                <div>
                                    <h3
                                        className={`font-bold w-max leading-tight text-white ${item.large ? "text-2xl md:text-4xl" : "text-xl"
                                            }`}
                                    >
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p className="mt-1.5 max-w-sm text-sm font-light leading-relaxed text-white/80">
                                            {item.description}
                                        </p>
                                    )}
                                </div>

                                <Link
                                    href={item.url}
                                    className="flex w-max shrink-0 items-center gap-2 rounded-full bg-primary-500 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-widest text-white"
                                >
                                    {item.cta}
                                    <svg
                                        className="h-3 w-3"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2.5}
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 12h100M16 5l7 7-7 7"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Wrapper>
        </Section>
    );
}