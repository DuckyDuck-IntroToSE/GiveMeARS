"use client";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface StartCourseButtonProps {
    courseID: string;
    firstChapterID: string;
}

const StartCourseButton = async (
    { courseID, firstChapterID }: StartCourseButtonProps
) => {
    const router = useRouter();

    const onClick = async () => {
        toast.success("Loading to the 1st chapter...");
        router.push(`/courses/content/${courseID}/chapters/${firstChapterID}`);
    };

    return (
        <div>
            <Button
                className="bg-blue-500 dark:bg-blue-700 w-full"
                onClick={onClick}
            >Get Started</Button>
        
        </div>
    );
}

export default StartCourseButton;