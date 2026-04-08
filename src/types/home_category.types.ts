export type HomeCategoryResponse = {
    status: boolean;
    message: string;
    data: HomeCategoryData[]
}
export type HomeCategoryData = {
    id: string;
    title: string;
    slug: string;
    image: string;
    products_count: number
}