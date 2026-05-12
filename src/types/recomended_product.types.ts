export type RecomendedProductAPIResponse = {
    status: boolean;
    data: RPData
};

export type RPData = {
    category: RPCategory;
    industries: RPIndustries[]
    total_industries: number
}

export type RPCategory = {
    id: number,
    title: string,
    slug: string;
}

export type RPIndustries = {
    id: number;
    title: string,
    slug: string,
    page_url: string | null;
    image: null | string;
    short_description: null | string,
    long_description: null | string,
    category_name: string
}
