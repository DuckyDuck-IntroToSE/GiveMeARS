"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { Avatar, Tooltip } from "@nextui-org/react";
import { CompaniesDropdown } from "./companies-dropdown";
import { HomeIcon } from "../icons/sidebar/home-icon";
import { PaymentsIcon } from "../icons/sidebar/payments-icon";
import { BalanceIcon } from "../icons/sidebar/balance-icon";
import { AccountsIcon } from "../icons/sidebar/accounts-icon";
import { CustomersIcon } from "../icons/sidebar/customers-icon";
import { ProductsIcon } from "../icons/sidebar/products-icon";
import { ReportsIcon } from "../icons/sidebar/reports-icon";
import { DevIcon } from "../icons/sidebar/dev-icon";
import { ViewIcon } from "../icons/sidebar/view-icon";
import { SettingsIcon } from "../icons/sidebar/settings-icon";
import { CollapseItems } from "./collapse-items";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { FilterIcon } from "../icons/sidebar/filter-icon";
import { useSidebarContext } from "../layout/layout-context";
import { ChangeLogIcon } from "../icons/sidebar/changelog-icon";
import { usePathname } from "next/navigation";
import { Logo } from "../icons";
import NextLink from "next/link";
import { ThemeSwitch } from "@/components/theme-switch";
import { UserButton } from "@clerk/nextjs";
import { Chapter, Course, UserProgress } from "@prisma/client";
import Image from "next/image";
import { Tv, Info, Paperclip } from 'lucide-react';


interface CourseSidebarProps {
  course: Course & {
    chapters: (Chapter & {
      userProgress: UserProgress[] | null;
    })[]
  };
  progressCount: number;
};


export const CourseSidebarWrapper = ({
  course,
  progressCount,
}: CourseSidebarProps
) => {
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
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              icon={<Info />}
              title="Course Infomation"
              isActive={usePathname() === `/courses/content/${course.id}`}
              href={`/courses/content/${course.id}`}
            ></SidebarItem>
            <SidebarMenu title="Course Chapter">
              {course.chapters.map((chapter) => (
                <SidebarItem
                  title={chapter.title}
                  icon={<Tv/>}
                  isActive={usePathname() === `/courses/content/${course.id}/chapters/${chapter.id}`}
                  href={`/courses/content/${course.id}/chapters/${chapter.id}`}
                />
              ))}
            </SidebarMenu>
            <SidebarMenu title="Other">
              <SidebarItem
                title="Attachments"
                icon={<Paperclip/>}
                isActive={usePathname() === `/courses/content/${course.id}/attachments`}
                href={`/courses/content/${course.id}/attachments`}
              />
            </SidebarMenu>
          </div>

          {/* <div className={Sidebar.Footer()}>
            <Tooltip content={"Settings"} color="primary">
              <div className="max-w-fit">
                <SettingsIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Adjustments"} color="primary">
              <div className="max-w-fit">
                <FilterIcon />
              </div>
            </Tooltip>
            <Tooltip content={"Theme"} color="primary">
              <div className="max-w-fit">
                <ThemeSwitch />
              </div>
            </Tooltip>

            <Tooltip content={"Account"} color="primary">
              <UserButton afterSignOutUrl="/"></UserButton>
            </Tooltip> */}

          {/* </div> */}
        </div>
      </div>
    </aside>
  );
};
