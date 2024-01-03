import { db } from "@/lib/ds";
import { auth } from "@clerk/nextjs";
import { get } from "http";
import { redirect } from "next/navigation";
import ChapterVideo from "@/components/chapter-video";
import { Info, Video } from "lucide-react";
import { Divider } from "@nextui-org/react";
import { Preview } from "@/components/preview";
import { NextChapterButton, PreviousChapterButton } from "@/components/ui/chapter-next-previous-buttons";


const ChapterContent = async ({
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
            isPublished: true,
        }
    });

    const nextChapter = await db.chapter.findFirst({
        where: {
            courseId: params.courseID,
            position: chapter!.position + 1
        }
    });

    const previousChapter = await db.chapter.findFirst({
        where: {
            courseId: params.courseID,
            position: chapter!.position - 1
        }
    });



    return (
        <div className="flex flex-col my-10 mx-10 gap-10">
            <div className="text-2xl font-bold">{chapter?.title}</div>
            <div className="flex flex-col">
                <div className="flex items-center justify-center gap-2 my-2">
                    <Video className="h-7 w-7"></Video>
                    <div className="text-2xl font-medium">
                        Chapter Video
                    </div>
                </div>
                <ChapterVideo
                    chapter={chapter!}
                ></ChapterVideo>
            </div>
            <div className="flex flex-col">
                <div className="flex items-center justify-center gap-2 my-2">
                    <Info className="h-7 w-7"></Info>
                    <div className="text-2xl font-medium">
                        Chapter Description
                    </div>
                </div>
                <Preview
                    value={chapter?.description || ""}
                ></Preview>
            </div>

            <div className="flex mt-6 justify-between">
                <PreviousChapterButton
                    courseID={params.courseID}
                    previousChapterID={previousChapter?.id || ""}
                ></PreviousChapterButton>

                <NextChapterButton
                    courseID={params.courseID}
                    nextChapterID={nextChapter?.id || ""}
                ></NextChapterButton>
            </div>

        </div>
    );
}

export default ChapterContent;