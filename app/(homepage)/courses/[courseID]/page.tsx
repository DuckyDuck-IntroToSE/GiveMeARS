import { db } from "@/lib/ds";
import { Image } from "@nextui-org/image";
import ChapterAccordion from "@/components/chapter-accordion";
import { Preview } from "@/components/preview";
import { Divider } from "@nextui-org/divider";
import ChapterSubcribeButton from "@/components/chapter-subcribe-button";
import { auth } from "@clerk/nextjs";


interface CourseIdPageProps {
    params: { courseID: string }
}

const CourseIdPage = async (
    { params }: CourseIdPageProps
) => {
    const { userId } = auth();
    const course = await db.course.findUnique({
        where: {
            id: params.courseID,
        },
        include: {
            chapters: {
                orderBy: {
                    position: "asc"
                },
                select: {
                    title: true,
                    id: true,
                    description: true
                }
            },
            enrollments: {
                select: {
                    userId: true
                }
            }
        }
    })

    const isSubcribed = course?.enrollments.some((enrollment) => enrollment.userId === userId) || false;

    return (
        <div className="mb-10">
            <div className="flex mt-5">
                <div className="flex flex-col gap-5 mr-10">
                    <div className="text-4xl font-bold">{course?.title}</div>
                    <div className="text-base">{course?.shortDescription}</div>
                    <div className="">
                        <div className="text-sm italic">Created: {course?.createdAt?.toDateString()}</div>
                        <div className="text-sm italic">Updated: {course?.updatedAt?.toDateString()}</div>
                    </div>

                    <div className="mb-5">
                        {course?.chapters.map((chapter, index) => (
                            <ChapterAccordion 
                                chapterID={chapter.id}
                                chapterTitle={chapter.title}
                                chapterDescription={chapter.description || ""}
                            ></ChapterAccordion>
                        ))}
                    </div>

                    <div>
                        <div className="text-2xl font-bold">Course Detailed Description</div>
                        <Divider></Divider>
                        <div className="pt-3">
                            <Preview
                                value={course?.detailedDescription!}
                            ></Preview>
                        </div>
                    </div>

                    <div>
                        <div className="text-2xl font-bold">Requirements</div>
                        <Divider></Divider>
                        <div className="pt-3">{course?.requirements}</div>
                    </div>

                    <div>
                        <div className="text-2xl font-bold">Target Audience</div>
                        <Divider></Divider>
                        <div className="pt-3">{course?.targetAudience}</div>
                    </div>

                </div>

                <div className="w-[1200px]">
                    <Image
                        src={course?.imageURL!}
                        alt={course?.title!}
                        width={1200}
                        height={150}
                    >
                    </Image>
                    
                    <div className="my-4">
                        <ChapterSubcribeButton
                            courseID={course?.id!}
                            isSubcribed={isSubcribed}
                        ></ChapterSubcribeButton>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CourseIdPage;