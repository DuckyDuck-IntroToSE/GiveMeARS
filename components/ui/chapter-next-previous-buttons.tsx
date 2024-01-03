"use client";
import { Button } from "@nextui-org/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface NextChapterButtonProps {
    courseID: string;
    nextChapterID: string;
}

interface PreviousChapterButtonProps {
    courseID: string;
    previousChapterID: string;
}

export const NextChapterButton = (
    { courseID, nextChapterID }: NextChapterButtonProps
) => {
    const router = useRouter();

    const onClick = () => {
        toast.success("Loading to the next chapter...");
        router.push(`/courses/content/${courseID}/chapters/${nextChapterID}`);
    };

    return (
        <div>
            {nextChapterID !== "" && (
                <Button
                    className="bg-blue-500 dark:bg-blue-700 w-full"
                    onClick={onClick}
                    endContent={<ArrowRight />}
                >Next chapter</Button>
            )}

        </div>
    );
}


export const PreviousChapterButton = (
    { courseID, previousChapterID }: PreviousChapterButtonProps
) => {
    const router = useRouter();

    const onClick = () => {
        toast.success("Loading to the previous chapter...");
        router.push(`/courses/content/${courseID}/chapters/${previousChapterID}`);
    };

    return (
        <div>
            {previousChapterID !== "" && (
                <Button
                    className="bg-blue-500 dark:bg-blue-700 w-full"
                    onClick={onClick}
                    startContent={<ArrowLeft />}
                >Previous chapter</Button>
            )}
        </div>
    );
}

