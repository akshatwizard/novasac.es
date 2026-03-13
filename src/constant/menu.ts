export type MenuType = {
    name: string;
    path?: string;
    subMenu?: SubMenu[];
};

type SubMenu = Omit<MenuType, "subMenu">;

export const MenuItems: MenuType[] = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Packaging Bags",
        subMenu: [
            {
                name: "Courier Bags",
                path: "/packaging/courier-bags",
            },
            {
                name: "Poly Bags",
                path: "/packaging/poly-bags",
            },
            {
                name: "Laminated Bags",
                path: "/packaging/laminated-bags",
            },
        ],
    },
    {
        name: "Food Packaging",
        subMenu: [
            {
                name: "Standup Pouches",
                path: "/food/standup-pouches",
            },
            {
                name: "Vacuum Bags",
                path: "/food/vacuum-bags",
            },
            {
                name: "Ziplock Bags",
                path: "/food/ziplock-bags",
            },
        ],
    },
    {
        name: "Custom Printing",
        path: "/custom-printing",
    },
    {
        name: "About Us",
        path: "/about",
    },
    {
        name: "Contact",
        path: "/contact",
    },
];