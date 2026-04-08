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


export interface BlogImage {
    image: string;
    alt_text: string;
}

export interface BlogParagraph {
    id: number;
    content: string;
}

export interface Blog {
    id: number;
    title: string;
    slug: string;
    short_desc: string;
    content: string;
    main_image: string;
    published_at: string;
    meta_title: string;
    meta_description: string;
    paragraphs: BlogParagraph[];
    images: BlogImage[];
}

export interface BlogDetailResponse {
    status: boolean;
    message: string;
    data: Blog;
}