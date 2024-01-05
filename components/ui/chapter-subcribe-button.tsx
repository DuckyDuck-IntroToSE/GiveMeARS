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
            router.push("/sign-in");
            return;
        }

        try {
            toast.success("Subscribing...");
            await axios.post(`/api/courses/${courseID}/enrollment`);
            router.refresh();
            toast.success("Subscribe successfully");
        }
        catch {
            toast.error("Something went wrong");
        } 
    };

    const unSubcribeCourse = async () => {
        try {
            toast.success("Unsubscribing...");
            await axios.delete(`/api/courses/${courseID}/enrollment`);
            router.refresh();
            toast.success("Unsubscribe successfully");
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
                >Unsubscribe</Button>
            )}
            {!isSubcribed && (
                <Button
                    className="bg-blue-500 dark:bg-blue-700 w-full"
                    onClick={subcribeCourse}
                >Subscribe this course</Button>
            )}
        </div>
    );
}

export default ChapterSubcribeButton;