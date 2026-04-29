export type MenuType = {
    name: string;
    path: string;
    icon: string
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
        icon: "/images/recycled/recycled.jpg"
    },
    {
        name: "Technical Textiles",
        path: "/technical-textiles",
        icon: "/images/textiles/tarpaulin.jpg"
    },
    {
        name: "Custom-made Bulk Bags",
        path: "/custom-made-bags",
        icon: "/images/custom-bag/bag.jpg"
    },
];