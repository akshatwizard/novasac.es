export type SearchProductAPIResponse = {
    meta: SPMeta;
    products: SPProducts[];
    pagination: SPPagination;
    categories: {
        id: number,
        title: string;
        slug: string;
    }[];
    query: string
}

export type SPMeta = {
    title: string
    description: string
    keywords: string
}
export type SPProducts = {
    id: number
    title: string
    slug: string
    mrp: number | null
    offer_rate: number | null
    sku: string | null
    attribute_value?: string
    attribute_value_slug: string
    category: {
        title: string;
        slug: string
    }
    image: string | null
}
export type SPPagination = {
    current_page: number
    total_pages: number
    per_page: number
    total_products: number
    next_page_url: string | null
    previous_page_url: string | null
    has_next_page: boolean
    has_previous_page: boolean
}
export interface SPFilterValue {
    id: number
    name: string
    slug: string
}