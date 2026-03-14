import Section from './ui/section'
import Wrapper from './ui/wrapper'
import Image from "next/image";

const items = [
    {
        title: "Custom Printed Packaging Bags",
        description: "High-quality branded packaging solutions for businesses.",
        image: "/images/bento/img-1.jpg",
        large: true,
    },
    {
        title: "Industrial Heavy Duty Bags",
        description: "Strong and durable bags for construction and industrial materials.",
        image: "/images/bento/img-2.jpg",
    },
    {
        title: "Food Grade Packaging Bags",
        description: "Safe and hygienic bags for food storage and transport.",
        image: "/images/bento/img-3.jpg",
    },
];

export default function BentoGrid() {
    return (
        <Section>
            <Wrapper>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {items.map((item, i) => (
                        <div
                            key={i}
                            className={`relative h-68 rounded-xl overflow-hidden group ${item.large ? "md:col-span-2 h-95" : ""
                                }`}
                        >

                            {/* Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />

                            {/* Text */}
                            <div className="absolute bottom-0 p-6 text-white">
                                <h3 className="text-xl font-semibold mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-white/80 max-w-md">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}

                </div>
            </Wrapper>
        </Section>
    )
}
