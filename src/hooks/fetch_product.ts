import { ProductDetailApiResponse } from '@/types/single_product.types'
import axios from 'axios'

const BASE_URL = 'https://admin.novasac.es/api/products'

export function buildProductUrl(slug: string[]): string {
    return `${BASE_URL}/${slug.join('/')}`
}


export async function fetchProductDetail(slug: string[]): Promise<ProductDetailApiResponse> {
    const { data } = await axios.get<ProductDetailApiResponse>(
        buildProductUrl(slug)
    )
    return data
}

export const productKeys = {
    all: ['product'] as const,
    detail: (slug: string[]) => [...productKeys.all, slug.join('/')] as const,
}
