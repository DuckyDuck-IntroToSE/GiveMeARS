import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/ds";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { CourseSidebarWrapper } from "@/components/course-sidebar/sidebar";

const CourseContentLayoutPage = async ({
    children, params
}: {
    children: React.ReactNode;
    params: { courseID: string };
}) => {
    const { userId } = auth();
    if (!userId) {
        redirect("/");
    }

    const course = await db.course.findUnique({
        where: {
            id: params.courseID,
        },
        include: {
            chapters: {
                where: {
                    isPublished: true
                },
                include: {
                    userProgress: {
                        where: {
                            userId: userId
                        }
                    }
                },
                orderBy: {
                    position: "asc"
                },
            },
        }
    });


    if (!course) {
        return redirect("/");
    }

    

    const progressCount = await getProgress(userId, params.courseID);

    return (
        <div className="h-full flex">
            <CourseSidebarWrapper
                course={course}
                progressCount={progressCount}
            ></CourseSidebarWrapper>
            <main className="h-ful w-full">
                {children}
            </main>
        </div>
    );
}

export default CourseContentLayoutPage;