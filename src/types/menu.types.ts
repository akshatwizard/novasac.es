export type MenuResponse = {
    status: boolean;
    data: MenuData[]
}

export type MenuData = {
    title: string;
    category_slug: string;
    category_image: string;
    attributes: MenuAttributes[]
}

export type MenuAttributes = {
    title: string;
    slug: string;
    values: MenuAttributesValues[]
}

export type MenuAttributesValues = {
    name: string;
    slug: string;
}

