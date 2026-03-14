import Section from './ui/section'
import Wrapper from './ui/wrapper'
import { Heading } from './ui/headings'
import SliderWrapper from './ui/slider_wrapper'
import { Star, StarHalf } from 'lucide-react'
import Image from 'next/image'

type TestimonialData = {
    name: string;
    text: string;
    profile: string;
    rating: number;
    designation: string;
}

export default function Testimonials() {
    const testimonials: TestimonialData[] = [
        {
            name: "Rahul Sharma",
            text: "We have been using their courier bags for our ecommerce shipments for months now. The quality is excellent, sealing is strong, and the bags are completely tamper-proof. Our products reach customers safely every time.",
            profile: "/images/testimonial/img-1.png",
            rating: 4.5,
            designation: "E-commerce Seller"
        },
        {
            name: "Neha Gupta",
            text: "The custom printed packaging bags helped us improve our brand visibility. The print quality is sharp and the material feels very durable. Great option for businesses looking for reliable packaging solutions.",
            profile: "/images/testimonial/img-2.png",
            rating: 5,
            designation: "Retail Business Owner"
        },
        {
            name: "Amit Verma",
            text: "We ordered bulk laminated bags for industrial packaging and the strength is impressive. They handle heavy loads very well and the finishing is premium. Definitely a trusted packaging supplier.",
            profile: "/images/testimonial/img-3.png",
            rating: 4.5,
            designation: "Warehouse Manager"
        },
        {
            name: "Priya Nair",
            text: "Their food-grade packaging bags are perfect for our food products. The material keeps items fresh and the sealing quality is excellent. Very satisfied with the product and delivery service.",
            profile: "/images/testimonial/img-4.png",
            rating: 4.8,
            designation: "Food Product Manufacturer"
        },
        {
            name: "Sandeep Patel",
            text: "Fast delivery, competitive pricing, and excellent product quality. The heavy-duty packaging bags we ordered are strong and reliable for transporting industrial materials.",
            profile: "/images/testimonial/img-5.png",
            rating: 4.7,
            designation: "Logistics Manager"
        }
    ];
    return (
        <Section className='bg-primary-100'>
            <Wrapper>
                <div className='w-full text-center'>
                    <Heading className='text-primary-500'>
                        Testimonials
                    </Heading>
                </div>
                <div className='relative'>
                    <SliderWrapper
                        className="gap-5 py-5"
                        btnLeft='hidden'
                        btnRight='hidden'
                        autoPlay={true}
                    >
                        {
                            testimonials.map((t, idx) => (
                                <div key={idx} className='lg:w-80  bg-white h-full p-5 rounded-md shadow-[0_4px_12px_rgb(50,0,0,0.09)]'>
                                    <div className='space-y-3'>
                                        {
                                            t.rating &&
                                            <div className='flex items-center justify-between'>
                                                <span className='flex items-center gap-0.5'>
                                                    {(() => {
                                                        const rating = t.rating;
                                                        const fullStars = Math.floor(rating);
                                                        const decimal = rating - fullStars;
                                                        const showHalf = decimal >= 0.25;

                                                        return (
                                                            <>
                                                                {Array.from({ length: fullStars }).map((_, idx) => (
                                                                    <Star
                                                                        key={`full-${idx}`}
                                                                        size={18}
                                                                        fill="yellow"
                                                                        strokeWidth="1"
                                                                        className='text-gray-300'
                                                                    />
                                                                ))}

                                                                {
                                                                    showHalf &&
                                                                    <StarHalf
                                                                        size={18}
                                                                        fill="yellow"
                                                                        strokeWidth="1"
                                                                        className='text-gray-300'
                                                                    />
                                                                }
                                                            </>
                                                        );
                                                    })()}
                                                </span>
                                            </div>
                                        }
                                        <p className="md:text-sm text-xs text-zinc-500 leading-relaxed">
                                            “{t.text}”
                                        </p>
                                        <div className='w-full mt-8'>
                                            <div className='flex md:flex-row flex-col gap-3 md:items-center items-start'>
                                                <Image src={t.profile} alt={t.name} width={56} height={56} className='md:size-10 size-6 shrink-0' />
                                                <div>
                                                    <span className="md:text-sm text-xs text-neutral-500 block">
                                                        {t.name}
                                                    </span>
                                                    <span className="text-xs text-neutral-500 block">
                                                        {t.designation}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </SliderWrapper>
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-primary-100 to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-primary-100 to-transparent" />
                </div>
            </Wrapper>
        </Section>
    )
}
