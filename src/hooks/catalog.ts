import axios from 'axios'
import { CatalogApiResponse } from '../types/catalog.types'

const BASE_URL = 'https://gangapapers.in/novasac/api/product-catalog'

export interface CatalogFetchParams {
  slug: string[]
  page?: number
  filters?: Record<string, string[]>
  sort?: string
}

export function buildCatalogUrl(slug: string[]): string {
  return `${BASE_URL}/${slug.join('/')}`
}

export async function fetchCatalog({
  slug,
  page = 1,
  filters = {},
  sort = '',
}: CatalogFetchParams): Promise<CatalogApiResponse> {
  const qs = new URLSearchParams()
  qs.set('page', String(page))

  const hasFilters = Object.values(filters).some((arr) => arr.length > 0)
  if (hasFilters) qs.set('filter', '1')

  Object.entries(filters).forEach(([key, values]) => {
    if (values.length > 0) qs.set(key, values.join(','))
  })

  if (sort) qs.set('sort', sort)

  const { data } = await axios.get<CatalogApiResponse>(buildCatalogUrl(slug), { params: qs })
  return data
}


export const catalogKeys = {
  all: ['catalog'] as const,
  list: (slug: string[], filters: Record<string, string[]>, sort: string = '') =>
    [...catalogKeys.all, slug.join('/'), filters, sort] as const,
}