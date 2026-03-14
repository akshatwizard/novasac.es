import { ProductsType } from "@/constant/products";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    product: ProductsType
}

export default function ProductCard({ product }: Props) {
    const formatPrice = (amount: number) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(amount);

    return (
        <div className='w-full h-full border border-gray-200 rounded-xl bg-white group transition-all duration-300 ease-in-out hover:border-primary-300 cursor-pointer hover:shadow-soft'>
            <div className='relative w-full h-full'>
                <div>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width={500}
                        height={400}
                        className='w-full h-50 object-contain'
                        loading="lazy"
                    />
                </div>

                <div className='w-full px-3 py-4 space-y-3'>
                    <span
                        className="text-[10px] px-1.5 py-0.5 border border-primary-300 bg-primary-50 rounded-full w-max text-primary-500"
                    >
                        {product.category}
                    </span>

                    <Link
                        href={`${product.category}/${product.slug}`}
                        className="text-primary-600 leading-[1.1] mt-2 block text-base font-medium"
                    >
                        {product.name}
                    </Link>

                    <div className='flex flex-col'>
                        <span className='text-xl text-zinc-800'>
                            {formatPrice(product.price)}
                        </span>
                        <span>
                            {
                                product.compareAtPrice && (
                                    <>
                                        <span className='text-xs text-gray-500 inline-block pr-1'>
                                            M.R.P
                                        </span>
                                        <del className='text-sm text-gray-500 '>
                                            {formatPrice(product.compareAtPrice)}
                                        </del>
                                    </>
                                )
                            }
                        </span>
                    </div>

                    <div className='w-full flex gap-0.5'>
                        {
                            product.rating && (
                                <>
                                    {(() => {
                                        const rating = product.rating;
                                        const fullStars = Math.floor(rating);
                                        const decimal = rating - fullStars;
                                        const showHalf = decimal >= 0.25;

                                        return (
                                            <>
                                                {Array.from({ length: fullStars }).map((_, idx) => (
                                                    <Star
                                                        key={`full-${idx}`}
                                                        size={14}
                                                        fill="yellow"
                                                        stroke="none"
                                                    />
                                                ))}

                                                {showHalf && <StarHalf size={14} fill="yellow" stroke="none" />}
                                            </>
                                        );
                                    })()}
                                </>
                            )
                        }
                        <span className='text-[10px] text-gray-500 ml-1'>
                            ({product.reviewCount})
                        </span>
                    </div>
                </div>

                {product.descount && (
                    <div className="absolute top-5 left-0 flex items-center">
                        <div className="relative bg-primary-500 text-ivory text-xs font-medium pl-1.5 pr-1 text-white">
                            {product.descount}% OFF
                            <span
                                className="absolute top-0 left-full w-0 h-0"
                                style={{
                                    borderTop: "8px solid rgba(255,113,10,0.5)",
                                    borderBottom: "8px solid rgba(255,113,10,0.5)",
                                    borderLeft: "8px solid rgba(255,113,10,0.8)",
                                    borderRight: "8px solid transparent",
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}