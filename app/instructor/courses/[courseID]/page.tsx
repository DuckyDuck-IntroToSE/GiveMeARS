import { db } from "@/lib/ds";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import TitleForm from "@/components/form/Titleform";
import ShortDescriptionForm from "@/components/form/ShortDescriptionForm";
import RequirementForm from "@/components/form/RequirementForm";
import DetailedDescriptionForm from "@/components/form/DetailedDescriptionForm";
import TargetAudienceForm from "@/components/form/TargetAudienceForm";
import ImageForm from "@/components/form/ImageForm";
import CategoryForm from "@/components/form/CategoryForm";
import { Info, BookText, Component, FileType } from 'lucide-react';
import AttachmentForm from "@/components/form/AttachmentForm";
import ChaptersForm from "@/components/form/ChaptersForm";
import CourseActions from "@/components/course-action";
import { Banner } from "@/components/banner";


const CourseIdPage = async ({
    params
}: {
    params: { courseID: string }
}
) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/instructor/courses");
    }

    const course = await db.course.findUnique({
        where: {
            id: params.courseID,
            userID: userId,
        },
        include: {
            chapters: {
                orderBy: {
                    position: "asc"
                }
            },
            attachments: {
                orderBy: {
                    createdAt: "desc"
                }
            }
        }
    });

    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        },
    })

    if (!course) {
        return redirect("/instructor");
    }

    const requiredFields = [
        course.title,
        course.shortDescription,
        course.requirements,
        course.detailedDescription,
        course.targetAudience,
        course.imageURL,
        course.categoryID,
        course.chapters.some((chapter) => chapter.isPublished),
    ];

    const totalFiles = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `${completedFields} of ${totalFiles} completed`;
    const isCompleted = completedFields === totalFiles;

    return (
        <>
            {!course.isPublished && (
                <Banner
                    variant={"warning"}
                    label="This course is not published yet."
                ></Banner>
            )}
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-medium">
                            Course Setup
                        </h1>

                        <span className="text-sm">
                            {completionText}
                        </span>
                    </div>

                    <CourseActions
                        courseID={params.courseID}
                        isPublished={course.isPublished}
                        disabled={!isCompleted}
                    ></CourseActions>
                </div>

                <div className="grid grid-cols-1 gap-6 mt-16">
                    <div className="flex items-center justify-center gap-2">
                        <Info className="h-7 w-7"></Info>
                        <div className="text-2xl font-medium">
                            Course Information
                        </div>
                    </div>


                    <TitleForm
                        initialData={course}
                        courseID={params.courseID}
                    />

                    <ShortDescriptionForm
                        initialData={course}
                        courseID={params.courseID}
                    />

                    <RequirementForm
                        initialData={course}
                        courseID={params.courseID}
                    />

                    <DetailedDescriptionForm
                        initialData={course}
                        courseID={params.courseID}
                    />

                    <TargetAudienceForm
                        initialData={course}
                        courseID={params.courseID}
                    />

                    <ImageForm
                        initialData={course}
                        courseID={params.courseID}
                    />

                    <CategoryForm
                        initialData={course}
                        courseID={params.courseID}
                        options={categories.map((category) => ({
                            label: category.name,
                            value: category.id
                        }))}
                    />

                </div>

                <div className="grid grid-cols-1 gap-6 mt-16">
                    <div className="flex items-center justify-center gap-2">
                        <Component className="h-7 w-7"></Component>
                        <div className="text-2xl font-medium">
                            Course Chapter
                        </div>
                    </div>
                    <ChaptersForm
                        initialData={course}
                        courseID={params.courseID}
                    />
                    
                </div>

                <div className="grid grid-cols-1 gap-6 mt-16">
                    <div className="flex items-center justify-center gap-2">
                        <FileType className="h-7 w-7"></FileType>
                        <div className="text-2xl font-medium">
                            Resource & Attachments
                        </div>
                    </div>

                    <AttachmentForm
                        initialData={course}
                        courseID={params.courseID}
                    />
                    
                </div>

            </div>
        </>

    );
}

export default CourseIdPage;