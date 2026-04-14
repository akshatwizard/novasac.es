import { ProductData } from "@/types/home_product.types";
import { Star, StarHalf, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
    product: ProductData;
}

const DEFAULT_MRP = 999;
const DEFAULT_OFFER_RATE = 799;

export default function ProductCard({ product }: Props) {
    const formatPrice = (amount: number) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
            maximumFractionDigits: 0,
        }).format(amount);

    const mrp = product.mrp ?? DEFAULT_MRP;
    const offerRate = product.offer_rate ?? DEFAULT_OFFER_RATE;

    const discount =
        mrp > offerRate ? Math.round(((mrp - offerRate) / mrp) * 100) : null;

    return (
        <div className="w-full h-full border border-gray-200 rounded-xl bg-white group transition-all duration-300 ease-in-out hover:border-primary-300 cursor-pointer hover:shadow-soft">
            <div className="relative w-full h-full">

                {/* Image */}
                <div className="overflow-hidden rounded-t-xl">
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={500}
                        height={400}
                        className="w-full h-50 object-contain group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                    />
                </div>

                {/* Content */}
                <div className="w-full px-3 py-4 space-y-2">

                    {/* Category badge */}
                    <span className="text-[10px] px-1.5 py-0.5 border border-primary-300 bg-primary-50 rounded-full w-max text-primary-500 inline-block">
                        {product.category.title}
                    </span>

                    {/* Attribute value e.g. "500g / Pack of 10" */}
                    {product.attribute_value && (
                        <p className="text-[10px] text-zinc-400 font-medium">
                            {product.attribute_value}
                        </p>
                    )}

                    {/* Title */}
                    <Link
                        href={`/products/${product.slug}/${product.attribute_value}`}
                        className="text-primary-600 leading-snug mt-1 block text-sm font-medium line-clamp-2 hover:underline underline-offset-2"
                    >
                        {product.title}
                    </Link>

                    {/* Pricing */}
                    <div className="flex flex-col gap-0.5">
                        <span className="text-base font-semibold text-zinc-800">
                            {formatPrice(offerRate)}
                        </span>
                        {mrp > offerRate && (
                            <span className="text-xs text-gray-400">
                                M.R.P{" "}
                                <del className="text-gray-400">
                                    {formatPrice(mrp)}
                                </del>
                            </span>
                        )}
                    </div>

                    {/* SKU */}
                    {product.sku && (
                        <p className="text-[10px] text-zinc-400 flex items-center gap-1">
                            <Tag size={10} />
                            SKU: {product.sku}
                        </p>
                    )}
                </div>

                {/* Discount ribbon */}
                {discount !== null && (
                    <div className="absolute top-5 left-0 flex items-center">
                        <div className="relative bg-primary-500 text-white text-xs font-medium pl-1.5 pr-1">
                            {discount}% OFF
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
    );
}