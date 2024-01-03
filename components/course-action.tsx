"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import { Trash } from "lucide-react";
import { ConfirmModal } from "@/components/modals/ConfirmModal";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

interface CourseActionsProps {
    disabled: boolean;
    courseID: string;
    isPublished: boolean;
};

const CourseActions = ({
    disabled,
    courseID,
    isPublished
}: CourseActionsProps
) => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const onClick = async () => {
        try {
            setIsLoading(true);
            if (disabled)
            {
                toast.error("You must complete all fields");
                return;
            }
            else {
                if (isPublished) {
                    await axios.patch(`/api/courses/${courseID}/unpublish`);
                    toast.success("Course unpublished");
                } else {
                    await axios.patch(`/api/courses/${courseID}/publish`);
                    toast.success("Course published");
                }
            }
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    const onDelete = async () => {
        setIsLoading(true);
        try {
            await axios.delete(`/api/courses/${courseID}`);
            toast.success("Course deleted");
            router.push(`/instructor/courses/`);
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
        setIsLoading(false);
    }

    return (
        <div className="flex gap-2">
            <Button
                disabled={isLoading}
                onClick={onClick}
            >
                {isPublished ? "Unpublish" : "Publish"}
            </Button>
            <Button
                startContent={<Trash className="h-4 w-4"></Trash>}
                color="danger"
                onClick={onOpen}
                disabled={isLoading}
            >Delete</Button>

            <ConfirmModal
                isOpen={isOpen}
                onConfirm={onDelete}
                onOpen={onOpen}
                onOpenChange={onOpenChange}
            ></ConfirmModal>

        </div>
    );
}

export default CourseActions;