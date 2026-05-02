import axios from "axios";
import { CatalogApiResponse } from "../types/catalog.types";

const BASE_URL = "https://www.gangapapers.in/novasac/api";

export interface CatalogFetchParams {
  slug: string[];
  page?: number;
  filters?: Record<string, string[]>;
  sort?: string;
}

export function buildCatalogUrl(slug: string[]): string {
  if (slug.length === 1) {
    // category page
    return `${BASE_URL}/category/${slug[0]}`;
  }

  // catalog listing
  return `${BASE_URL}/product-catalog/${slug.join("/")}`;
}

export async function fetchCatalog({
  slug,
  page = 1,
  filters = {},
  sort = "",
}: CatalogFetchParams): Promise<CatalogApiResponse> {
  const params: Record<string, string> = {
    page: String(page),
  };

  const hasFilters = Object.values(filters).some((arr) => arr.length > 0);

  if (hasFilters) {
    params.filter = "1";
  }

  // ✅ comma separated filters
  Object.entries(filters).forEach(([key, values]) => {
    if (values.length > 0) {
      params[key] = values.join(",");
    }
  });

  if (sort) {
    params.sort = sort;
  }

  const url = buildCatalogUrl(slug);

  // console.log("API URL:", url, params); // 🔥 debug

  const { data } = await axios.get<CatalogApiResponse>(url, {
    params,
  });

  return data;
}

export const catalogKeys = {
  all: ['catalog'] as const,
  list: (slug: string[], filters: Record<string, string[]>, sort: string = '') =>
    [...catalogKeys.all, slug.join('/'), filters, sort] as const,
}