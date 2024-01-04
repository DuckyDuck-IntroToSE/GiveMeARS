"use client";
import { Button } from "@nextui-org/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

interface ChapterSubcribeButtonProps {
    userID: string;
    courseID: string;
    isSubcribed: boolean;
}

const ChapterSubcribeButton = (
    { courseID, isSubcribed, userID }: ChapterSubcribeButtonProps
) => {
    const router = useRouter();

    const subcribeCourse = async () => {
        if (!userID) {
            toast.error("You must login first");
            return;
        }

        try {
            toast.success("Subcribing...");
            await axios.post(`/api/courses/${courseID}/enrollment`);
            router.refresh();
            toast.success("Subcribe successfully");
        }
        catch {
            toast.error("Something went wrong");
        } 
    };

    const unSubcribeCourse = async () => {
        try {
            toast.success("Unsubcribing...");
            await axios.delete(`/api/courses/${courseID}/enrollment`);
            router.refresh();
            toast.success("Unsubcribe successfully");
        }
        catch {
            toast.error("Something went wrong");
        } 
    };


    return (
        <div>
            {isSubcribed && (
                <Button
                    className="w-full"
                    onClick={unSubcribeCourse}
                    color="danger"
                >Unscribe</Button>
            )}
            {!isSubcribed && (
                <Button
                    className="bg-blue-500 dark:bg-blue-700 w-full"
                    onClick={subcribeCourse}
                >Subcribe this course</Button>
            )}
        </div>
    );
}

export default ChapterSubcribeButton;