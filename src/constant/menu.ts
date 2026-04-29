export type MenuType = {
    name: string;
    path: string;
};

type SubMenu = Omit<MenuType, "subMenu">;

export const MenuItems: MenuType[] = [
    // {
    //     name: "Home",
    //     path: "/",
    // },
    // {
    //     name: "About Us",
    //     path: "/about",
    // },
    {
        name: "Recycled Bags",
        path: "/recycled-bags",
    },
    {
        name: "Technical Textiles",
        path: "/technical-textiles",
    },
    {
        name: "Custom-made Bulk Bags",
        path: "/custom-made-bags",
    },
];