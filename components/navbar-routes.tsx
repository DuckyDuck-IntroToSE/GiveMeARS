"use client";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@nextui-org/react";
import { LogOut, Link } from "lucide-react"
import { useRouter } from "next/navigation";


export const DashboardNavbarRoutes = () => {
    const routes = useRouter();
    const handleClick = () => {
        routes.push("/");
    }    
    return (
        <div className="flex gap-x-2 ml-auto">
            <Button color="danger" size="sm" onClick={handleClick}>
                <LogOut></LogOut>
                <div className="font-bold">
                    Exit Instructor
                </div>
            </Button>
            <UserButton></UserButton>
        </div>
    );
};