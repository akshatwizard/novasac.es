export interface CatalogMeta {
    title: string
    description: string
    keywords: string
}

export interface CatalogCategory {
    id: number
    title: string
    slug: string
}

export interface CatalogAttribute {
    id: number
    title: string
    slug: string
}

export interface CatalogAttributeValue {
    id: number
    name: string
    slug: string
}

export interface CatalogProduct {
    id: number
    title: string
    slug: string
    mrp: number | null
    offer_price: number | null
    sku: string | null
    stock_quantity: number | null
    image: string | null
    attributes_value_slug: string
}

export interface CatalogPagination {
    current_page: number
    total_pages: number
    per_page: number
    total_products: number
    next_page_url: string | null
    previous_page_url: string | null
    has_next_page: boolean
    has_previous_page: boolean
}

export interface FilterValue {
    id: number
    name: string
    slug: string
}

export interface ProductFilter {
    id: number
    title: string
    slug: string
    values: FilterValue[]
}

export interface CatalogData {
    meta: CatalogMeta
    category: CatalogCategory
    attribute: CatalogAttribute
    attribute_value: CatalogAttributeValue
    products: CatalogProduct[]
    pagination: CatalogPagination
    product_filters: ProductFilter[]
}

export interface CatalogApiResponse {
    success: boolean
    message: string
    data: CatalogData
}