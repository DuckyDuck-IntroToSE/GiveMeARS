"use client";

import { Layout, Compass } from "lucide-react";
import { SideBarItem } from "./sidebar-item";


const guestRoutes = [
    {
        icon: Layout,
        label: "Dashboard",
        href: '/instructor'
    },
    {
        icon: Compass,
        label: "Browse",
        href: '/instructor/search'
    }
];


export const SiderBarRoutes = () => {
    const routes = guestRoutes;
    return (
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SideBarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                ></SideBarItem>
            ))}
        </div>
    );
}
