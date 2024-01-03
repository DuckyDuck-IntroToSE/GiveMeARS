"use client";
import { SidebarMenu } from "@/components/sidebar/sidebar-menu";
import { CheckboxGroup, Checkbox } from "@nextui-org/react";
import { useState } from "react";
import { Category } from "@prisma/client";
import qs from "query-string"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import path from "path";

interface CategoriesProps {
    items: Category[];
    }

export const CoursesFilterSidebar = (
    { items }: CategoriesProps
) => {
    const [groupSelected, setGroupSelected] = useState<string[]>([]);
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentCategoryId = searchParams.get("categoryID");
    const currentTitle = searchParams.get("title");
    // console.log("currentTitle", currentTitle);

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                title: currentTitle,
                categoryID: groupSelected,
            },
        }, { skipEmptyString: true, skipNull: true, arrayFormat: 'comma'});

        router.push(url);
    }, [groupSelected, currentTitle, pathname, router]);

    return (<>
        <aside className="h-screen sticky top-0 w-60">
            <div className="flex flex-col gap-3 p-3">
                <CheckboxGroup
                    label="Categories"
                    color="default"
                    value={groupSelected}
                    onValueChange={setGroupSelected}
                >
                    {items.map((item) => (
                        <Checkbox value={item.id} key={item.name}>{item.name}</Checkbox>
                    )
                    )}

                </CheckboxGroup>
                {/* <p className="text-default-500 text-small">Selected: {groupSelected.join(", ")}</p> */}
            </div>

        </aside>
    </>);
};


export const BooksFilterSidebar = () => {
    const [groupSelected, setGroupSelected] = useState<string[]>([]);

    return (<>
        <aside className="h-screen sticky top-0 w-60">
            <div className="flex flex-col gap-3 p-3">
                <CheckboxGroup
                    label="Categories"
                    color="default"
                    value={groupSelected}
                    onValueChange={setGroupSelected}
                >
                    <Checkbox value="buenos-aires">Books1</Checkbox>
                    <Checkbox value="sydney">Books1</Checkbox>
                    <Checkbox value="san-francisco">Books1</Checkbox>
                </CheckboxGroup>
                <p className="text-default-500 text-small">Selected: {groupSelected.join(", ")}</p>
            </div>

        </aside>
    </>);
}

