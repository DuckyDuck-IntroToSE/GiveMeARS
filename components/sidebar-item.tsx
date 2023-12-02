"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation"
import { createSolutionBuilderWithWatchHost } from "typescript";

interface SideBarItemProps {
    icon: LucideIcon,
    label: string,
    href: string
}


export const SideBarItem = ({
    icon: Icon,
    label,
    href
}: SideBarItemProps
) => {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (
        (pathname === "/instructor" && href === "/instructor") || 
        (pathname === href) || 
        (pathname?.startsWith(`${href}/instructor`))
    );
    
    const handleClick = () => {
        router.push(href);
    }

    return (
        <button
        onClick={handleClick}
        type="button"
        className={cn(
            "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20", 
            isActive && "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
        )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon 
                    size={22}
                    className={cn("text-slate-500", isActive && "text-sky-700")} 
                />
                {label}
            </div>
            <div className={cn("ml-auto opacity-0 border-2 border-sky-700 h-full transition-all", 
            isActive && "opacity-100")}></div>
        </button>
    )
}
