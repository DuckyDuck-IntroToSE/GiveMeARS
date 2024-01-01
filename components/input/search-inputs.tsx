"use client";
import { Input } from "@nextui-org/react";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import qs from "query-string";
import { Search } from "lucide-react";


export const CoursesSearchInput = () => {
    const [value, setValue] = useState("");
    const debouncedValue = useDebounce(value);

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const currentCategoryID = searchParams.get("categoryID");
    
    useEffect(() => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                categoryID: currentCategoryID,
                title: debouncedValue,
            },
        }, { skipEmptyString: true, skipNull: true, arrayFormat: 'comma'});

        router.push(url);
    }, [debouncedValue, currentCategoryID, router, pathname]);

    return (
        <div>
            <Input
                aria-label="Search"
                classNames={{
                    inputWrapper: "bg-default-100",
                    input: "text-sm",
                }}
                labelPlacement="outside"
                placeholder="Search..."
                startContent={
                    <Search className="h-4 w-4"></Search>
                }
                type="search"
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
        </div>
    )
};
