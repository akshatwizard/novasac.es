export type ProductsType = {
    id: string;
    name: string;
    slug: string;

    image: string;

    price: number;
    descount?: number;
    compareAtPrice?: number

    rating?: number;
    reviewCount?: number

    category: string;
}


export const homeProducts: ProductsType[] = [
    {
        id: "prod_001",
        name: "Tamper Proof Courier Bags",
        slug: "tamper-proof-courier-bags",
        image: "/images/home_products/img-1.jpg",
        price: 399,
        descount: 10,
        compareAtPrice: 449,
        rating: 4.8,
        reviewCount: 124,
        category: "Courier Bags",
    },

    {
        id: "prod_002",
        name: "Poly Packaging Bags",
        slug: "poly-packaging-bags",
        image: "/images/home_products/img-2.jpg",
        price: 299,
        descount: 15,
        compareAtPrice: 349,
        rating: 4.6,
        reviewCount: 58,
        category: "Poly Bags",
    },

    {
        id: "prod_003",
        name: "Laminated Packaging Bags",
        slug: "laminated-packaging-bags",
        image: "/images/home_products/img-3.jpg",
        price: 549,
        compareAtPrice: 599,
        rating: 4.9,
        reviewCount: 76,
        category: "Laminated Bags",
    },

    {
        id: "prod_004",
        name: "Custom Printed Courier Bags",
        slug: "custom-printed-courier-bags",
        image: "/images/home_products/img-4.jpg",
        price: 699,
        descount: 8,
        compareAtPrice: 759,
        rating: 4.7,
        reviewCount: 41,
        category: "Custom Printed Bags",
    },

    {
        id: "prod_005",
        name: "Food Grade Packaging Bags",
        slug: "food-grade-packaging-bags",
        image: "/images/home_products/img-1.jpg",
        price: 499,
        descount: 10,
        compareAtPrice: 549,
        rating: 4.8,
        reviewCount: 92,
        category: "Food Packaging",
    },

    {
        id: "prod_006",
        name: "Heavy Duty Industrial Bags",
        slug: "heavy-duty-industrial-bags",
        image: "/images/home_products/img-2.jpg",
        price: 799,
        descount: 12,
        compareAtPrice: 899,
        rating: 4.5,
        reviewCount: 33,
        category: "Industrial Packaging",
    },

    {
        id: "prod_007",
        name: "Reusable Zip Lock Packaging Bags",
        slug: "zip-lock-packaging-bags",
        image: "/images/home_products/img-3.jpg",
        price: 349,
        compareAtPrice: 399,
        rating: 4.7,
        reviewCount: 64,
        category: "Zip Lock Bags",
    },

    {
        id: "prod_008",
        name: "Stand Up Pouch Packaging Bags",
        slug: "stand-up-pouch-packaging-bags",
        image: "/images/home_products/img-4.jpg",
        price: 599,
        descount: 10,
        compareAtPrice: 659,
        rating: 4.8,
        reviewCount: 51,
        category: "Stand Up Pouches",
    },
];
