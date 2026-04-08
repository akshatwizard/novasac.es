export type BlogResponse = {
    status: boolean;
    message: string;
    data: BlogData[];
}

export type BlogData = {
    id: number;
    title: string;
    slug: string;
    short_desc: string | null;
    content: string;
    main_image: string;
    published_at: string;
}
