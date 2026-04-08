export type ProductResponse = {
    status: boolean;
    message: string;
    data: ProductData[];
}
export type ProductData = {
    id: number;
    title: string;
    slug: string;
    mrp: number | null
    offer_rate: number | null;
    sku: string | null;
    attribute_value: string
    category: {
        title: string;
        slug: string;
    };
    image: string;
}