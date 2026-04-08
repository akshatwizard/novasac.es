export type BannerResponse = {
    status: boolean,
    message: string;
    data: BannerData[]
}

export type BannerData = {
    id: number;
    title: string;
    content: string;
    image_path_desktop: string;
    image_path_mobile: string;
    banner_link: boolean
}
