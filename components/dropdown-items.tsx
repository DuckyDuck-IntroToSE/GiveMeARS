"use client";

import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem
} from "@nextui-org/dropdown";
 
import { Settings } from 'lucide-react';
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import { SiteConfig, siteConfig } from "@/config/site";

export const Categories = () => {
    return (
        <div className="flex items-center gap-4">
            <Dropdown>
                <DropdownTrigger>
                    <button
                        color="foreground"> Categories</button>
                </DropdownTrigger>
                <DropdownMenu >
                    <DropdownItem key="artificial_intelligence" >Artificial Intelligence</DropdownItem>
                    <DropdownItem key="database_design_implement" >Database Design & Implement</DropdownItem>
                    <DropdownItem key="devops" >DevOps</DropdownItem>
                    <DropdownItem key="network_security" >Network Security</DropdownItem>
                    <DropdownItem key="software_engineering" >Software Engineering</DropdownItem>
                    <DropdownItem key="web_development" >Web Development</DropdownItem>
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
                    <DropdownSection aria-label="Profile & Actions" showDivider>
                        <DropdownItem key="my_learning">My learning</DropdownItem>
                        <DropdownItem key="my_cart">My cart</DropdownItem>
                        <DropdownItem key="instructor_dashboard" onClick={()=> {
                            router.push(siteConfig.settingsMenuItems.instructorDashboard.href)}}>
                            Instructor dashboard
                        </DropdownItem>
                    </DropdownSection>
                    <DropdownSection aria-label="Profile & Actions" showDivider>
                        <DropdownItem key="account_settings">Account settings</DropdownItem>
                        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                    </DropdownSection>
                    <DropdownItem key="logout" color="danger">Log Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};