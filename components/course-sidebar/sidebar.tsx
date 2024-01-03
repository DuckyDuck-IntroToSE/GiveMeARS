"use client";
import React from "react";
import { Sidebar } from "./sidebar.styles";
import { SidebarItem } from "./sidebar-item";
import { SidebarMenu } from "./sidebar-menu";
import { useSidebarContext } from "../layout/layout-context";
import { usePathname } from "next/navigation";
import { Chapter, Course, UserProgress } from "@prisma/client";
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
              isActive={pathName === `/courses/content/${course.id}`}
              href={`/courses/content/${course.id}`}
            ></SidebarItem>
            <SidebarMenu title="Course Chapter">
              {course.chapters.map((chapter) => (
                <SidebarItem
                  key={chapter.id}
                  title={chapter.title}
                  icon={<Tv/>}
                  isActive={pathName === `/courses/content/${course.id}/chapters/${chapter.id}`}
                  href={`/courses/content/${course.id}/chapters/${chapter.id}`
                }
                />
              ))}
            </SidebarMenu>
            <SidebarMenu title="Other">
              <SidebarItem
                title="Attachments"
                icon={<Paperclip/>}
                isActive={pathName === `/courses/content/${course.id}/attachments`}
                href={`/courses/content/${course.id}/attachments`}
              />
            </SidebarMenu>
          </div>

        </div>
      </div>
    </aside>
  );
};
