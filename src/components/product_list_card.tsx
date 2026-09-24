import Link from "next/link";
import Image from "next/image";
import { CatalogProduct } from "../types/catalog.types";

interface ProductCardProps {
    product: CatalogProduct;
    attributeValue: string;
}
export default function ProductListCard({
    product,
    attributeValue,
}: ProductCardProps) {
    const href = `/products/${product.slug}/${attributeValue}`;
    const formatPrice = (amount: number) =>
        new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "EUR",
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(amount);

        const mrp = product.mrp;
        const offerRate = product.offer_price;
        const discount =
            mrp !== null &&
            offerRate !== null &&
            mrp > offerRate
        ? Math.round(((mrp - offerRate) / mrp) * 100)
        : null;
    const isOutOfStock = product.stock_quantity === 0;
    return (
        <Link
            href={href}
            className="group relative flex flex-col rounded-2xl border border-black/10 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary-300 overflow-hidden"
        >

            {/* Image */}
            <div className="relative h-48 flex items-center justify-center overflow-hidden">
                <Image
                    src={product.image ?? "/images/no-image.svg"}
                    alt={product.title}
                    width={400}
                    height={300}
                    className={`object-contain h-full w-full transition-transform duration-700 ease-out ${isOutOfStock
                        ? "opacity-40 grayscale"
                        : "group-hover:scale-110"
                        }`}
                />

                {/* Discount */}
                {/* {discount !== null && !isOutOfStock && (
                    <div className="absolute top-3 left-3">
                        <span className="bg-primary-500/90 backdrop-blur text-white text-[11px] px-2 py-1 rounded-md shadow">
                            {discount}% OFF
                        </span>
                    </div>
                )} */}

                {/* Out of stock */}
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-black/70 text-white text-[11px] px-3 py-1.5 rounded-full backdrop-blur">
                            Out of Stock
                        </span>
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 px-4 py-4 space-y-2">
                {/* Title */}
                <h3 className="text-[14px] font-medium text-gray-800 leading-snug transition group-hover:text-primary-600">
                    {product.title}
                </h3>

                {/* SKU */}
                {product.sku && (
                    <p className="text-[10px] text-gray-400 tracking-wide">
                        SKU · {product.sku}
                    </p>
                )}
                {/* Price */}
                <div className="flex items-end justify-between">

                    <div className="flex flex-col gap-0.5">
                        {mrp !== null && (
                            <span className="text-[18px] font-semibold text-primary-500">
                                {formatPrice(mrp)}
                            </span>
                        )}

                        {/* {mrp !== null && offerRate !== null && mrp > offerRate && (
                            <span className="text-xs text-gray-400">
                                <del>
                                    {formatPrice(mrp)}
                                </del>
                            </span>
                        )} */}
                    </div>                   

                    {/* subtle arrow */}
                    <div className="opacity-0 group-hover:opacity-100 transition transform group-hover:translate-x-1">
                        <svg
                            className="w-4 h-4 text-primary-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </Link>
    );
}