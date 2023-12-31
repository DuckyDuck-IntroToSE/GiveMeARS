import { getCourses } from "@/actions/get-courses";
import CourseSearchItem from "@/components/list/course-search-item";
import { CourseProgress } from "@/components/ui/course-progress";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";

interface SearchPageProps {
    searchParams: {
        title: string;
        categoryID: string;
    }
};

const CourseSearchPage = async (
    { searchParams }: SearchPageProps
) => {
    const { userId } = auth();
    if (!userId) {
        return redirect("/");
    }

    const categoryIDs = searchParams.categoryID?.split(",") ?? [];

    const courses = await getCourses({
        userId,
        title: searchParams.title,
        categoryID: categoryIDs,
    });

    return (
        <>
            {courses.length === 0 && (
                <div className="w-full flex flex-col items-center justify-center">
                    <Image src="/images/tonton-chick.gif" alt="No result image"></Image>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {courses.map((item, index) => (
                    <CourseSearchItem 
                        item={item}
                        index={index}
                        key={index}
                    ></CourseSearchItem>
                ))}
            </div>
        </>

    );
}

export default CourseSearchPage;