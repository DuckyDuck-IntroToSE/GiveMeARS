import ChapterAccordion from "@/components/chapter-accordion";
import { Preview } from "@/components/preview";
import StartCourseButton from "@/components/ui/course-start-button";
import { db } from "@/lib/ds";
import Image from "next/image";

const CourseContentPage = async (
    {params}: {params: {courseID: string}}
) => {
    const course = await db.course.findUnique({
        where: {
            id: params.courseID
        },
    });

    const chapters = await db.chapter.findMany({
        where: {
            courseId: params.courseID,
            isPublished: true
        },
    });

    return (
        <div className="my-10 mx-10">
            <div className="flex mt-5">
                <div className="w-2/3 flex flex-col gap-5 mr-10">
                    <div className="text-4xl font-bold">{course?.title}</div>
                    <div className="text-base">{course?.shortDescription}</div>
                    <div className="">
                        <div className="text-sm italic">Created: {course?.createdAt?.toDateString()}</div>
                        <div className="text-sm italic">Updated: {course?.updatedAt?.toDateString()}</div>
                    </div>

                    <div className="mb-5">
                        {chapters.map((chapter, index) => (
                            <ChapterAccordion
                                chapterID={chapter.id}
                                chapterTitle={chapter.title}
                                chapterDescription={chapter.description || ""}
                                key={index}
                            ></ChapterAccordion>
                        ))}
                    </div>

                    <div>
                        <div className="text-2xl font-bold">Course Detailed Description</div>
                        <div className="pt-3">
                            <Preview
                                value={course?.detailedDescription!}
                            ></Preview>
                        </div>
                    </div>

                    <div>
                        <div className="text-2xl font-bold">Requirements</div>
                        <div className="pt-3">{course?.requirements}</div>
                    </div>

                    <div>
                        <div className="text-2xl font-bold">Target Audience</div>
                        <div className="pt-3">{course?.targetAudience}</div>
                    </div>

                </div>

                <div className="w-1/3 flex flex-col gap-4">
                    <Image
                        src={course?.imageURL!}
                        alt={course?.title!}
                        width={1200}
                        height={150}
                    >
                    </Image>
                    <StartCourseButton
                        courseID={course?.id!}
                        firstChapterID={chapters[0].id}
                    ></StartCourseButton>
                </div>
            </div>

        </div>
    );
}

export default CourseContentPage;