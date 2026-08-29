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
    {
        name: "Bolsas Recicladas",
        path: "/recycled-bags",
        icon: "/images/recycled/recycled.jpeg"
    },
    {
        name: "Textiles Técnicos",
        path: "/technical-textiles",
        icon: "/images/textiles/tarpaulin.jpg"
    },
    {
        name: "Bolsas a Granel Personalizadas",
        path: "/custom-made-bags",
        icon: "/images/custom-bag/bag.jpg"
    },
    {
        name: "Sobre Nosotros",
        path: "/about",
        icon: "/images/hero/company.jpeg"
    },
];
