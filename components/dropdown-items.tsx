"use client";

import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem
} from "@nextui-org/dropdown";

import { Settings, MoreHorizontal } from 'lucide-react';
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { SiteConfig, siteConfig } from "@/config/site";
import toast from "react-hot-toast";

export const Categories = () => {
    return (
        <div className="flex items-center gap-4">
            <Dropdown>
                <DropdownTrigger>
                    <button
                        color="foreground"> Categories</button>
                </DropdownTrigger>
                <DropdownMenu >
                    {
                        siteConfig.categories.map((item) => (
                            <DropdownItem
                                key={item.name}
                            >
                                {item.name}
                            </DropdownItem>
                        ))
                    }
                </DropdownMenu>
            </Dropdown>
        </div>

    );
}


export const SettingIcon = () => {
    const router = useRouter();

    return (
        <div className="flex items-center gap-4">
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Settings className="text-default-500"></Settings>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem
                        key="my_learning"
                        onClick={() => {
                            toast.success("Redirecting to my learning dashboard...");
                            router.push(siteConfig.settingsMenuItems.myLearningDashboard.href)
                        }}
                    >My learning</DropdownItem>
                    {/* <DropdownItem key="my_cart">My cart</DropdownItem> */}
                    <DropdownItem key="instructor_dashboard"
                        onClick={() => {
                            toast.success("Redirecting to instructor dashboard...");
                            router.push(siteConfig.settingsMenuItems.instructorDashboard.href)
                        }}
                    >Instructor dashboard</DropdownItem>
                    {/* <DropdownSection aria-label="Profile & Actions" showDivider>
                            .....
                    </DropdownSection> */}
                    {/* <DropdownSection aria-label="Profile & Actions" showDivider>
                        <DropdownItem key="account_settings">Account settings</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    </DropdownSection> */}
                    {/* <DropdownItem key="logout" color="danger">Log Out</DropdownItem> */}
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};

