"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { Logo } from "../icons";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { UserButton } from "@clerk/nextjs";

export const SidebarWrapper = () => {
  const pathName = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div>
          <NextLink className={Sidebar.Header()} href="/">
            <Logo />
            <p className="font-bold text-inherit">GIVEMEARs</p>
          </NextLink>

        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            {/* <SidebarItem
              title="Home"
              icon={<HomeIcon />}
              isActive={usePathname() === "/instructor"}
              href="/instructor"
            /> */}
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={usePathname().startsWith("/instructor/courses")}
                title="My courses"
                icon={<AccountsIcon />}
                href="/instructor/courses"
              />
            </SidebarMenu>

          </div>
          <div className={Sidebar.Footer()}>
            {/* <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip> */}
            <div className="max-w-fit">
              <ThemeSwitch />
            </div>

            <UserButton afterSignOutUrl="/"></UserButton>
    
          </div>
        </div>
      </div>
    </aside>
  );
};
