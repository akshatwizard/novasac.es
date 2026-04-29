export type RecomendedProductAPIResponse = {
    status: boolean;
    data: RPData
};
export type RPData = {
    title: string,
    slug: string,
    meta_title: string,
    meta_description: string,
    meta_keywords: string,
    short_description: string | null,
    long_description: string | null,
    products: RPProducts[]
}
export type RPProducts = {
    id: number,
    title: string,
    slug: string,
    mrp: number | null,
    offer_rate: number | null,
    attribute_value_slug: string,
    category: {
        title: string,
        slug: string
    },
    image:string
}