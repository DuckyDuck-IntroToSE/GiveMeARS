import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { File, Info, Video } from "lucide-react";
import { db } from "@/lib/ds";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@nextui-org/button";
import { ChapterTitleForm } from "@/components/form/ChapterTitleForm";
import ChapterDescriptionForm from "@/components/form/ChapterDescriptionForm";
import ChapterVideoForm from "@/components/form/ChapterVideoForm";
import { Banner } from "@/components/banner";
import ChapterActions from "@/components/ChapterActions";


const ChapterIdPage = async ({
    params
}: {
    params: { courseID: string; chapterID: string }
}) => {
    const { userId } = auth();

    if (!userId) {
        return redirect("/");
    }

    const chapter = await db.chapter.findUnique({
        where: {
            id: params.chapterID,
            courseId: params.courseID,
        },
    })

    if (!chapter) {
        return redirect("/instructor");
    }

    const requiredFields = [
        chapter.title,
        chapter.description,
        chapter.videoUrl,
    ];


    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;

    const completionText = `${completedFields}/${totalFields} fields completed`;
    const isCompleted = completedFields === totalFields;

    return (
        <div>
            {!chapter.isPublished && (
                <Banner
                    variant={"warning"}
                    label="This chapter is not published yet."
                ></Banner>
            )}

            <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                    <div className="w-full items-center">
                        <Link
                            href={`/instructor/courses/${params.courseID}`}
                        >
                            <Button variant="ghost" startContent={<ArrowLeft></ArrowLeft>}>
                                Back to Course Setup
                            </Button>

                        </Link>
                    </div>

                    <ChapterActions
                        chapterID={params.chapterID}
                        courseID={params.courseID}
                        isPublished={chapter.isPublished}
                        disabled={!isCompleted}
                    ></ChapterActions>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-medium">
                            Chapter Setup
                        </h1>

                        <span className="text-sm">
                            {completionText}
                        </span>
                    </div>
                </div>


                <div className="grid grid-cols-1 gap-6 mt-16">
                    <div className="flex items-center justify-center gap-2">
                        <Info className="h-7 w-7"></Info>
                        <div className="text-2xl font-medium">
                            Chapter Information
                        </div>
                    </div>

                    <ChapterTitleForm
                        initialData={chapter}
                        courseID={params.courseID}
                        chapterID={params.chapterID}
                    ></ChapterTitleForm>

                    <ChapterDescriptionForm
                        initialData={chapter}
                        courseID={params.courseID}
                        chapterID={params.chapterID}
                    ></ChapterDescriptionForm>


                </div>


                <div className="grid grid-cols-1 gap-6 mt-16">
                    <div className="flex items-center justify-center gap-2">
                        <Video className="h-7 w-7"></Video>
                        <div className="text-2xl font-medium">
                            Chapter Content
                        </div>
                    </div>

                    <ChapterVideoForm
                        initialData={chapter}
                        courseID={params.courseID}
                        chapterID={params.chapterID}
                    ></ChapterVideoForm>


                </div>

            </div>
        </div>

    );
}

export default ChapterIdPage;