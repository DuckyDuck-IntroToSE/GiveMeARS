"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Pencil, ImagePlus, ImageIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import { Image } from "@nextui-org/react";
import { FileUpload } from "@/components/file-upload";


interface ImageFormProps {
    initialData: Course;
    courseID: string;
}

const formSchema = z.object({
    imageURL: z.string().min(1, { message: "Image is required" }),
});

const ImageForm = (
    { initialData, courseID }: ImageFormProps
) => {
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((prev) => !prev);
    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseID}`, values);
            toast.success("Course updated successfully");
            toggleEdit();
            router.refresh();
        }
        catch {
            toast.error("Something went wrong");
        }
    }

    return (
        <div className="my-6 border rounded-xl p-4">
            <div className="font-medium flex items-center justify-between">
                <div className="mr-4">
                    Course Image
                </div>
                <Button onClick={toggleEdit} variant="ghost">
                    {isEditing && (
                        <>
                            Cancel
                        </>
                    )}

                    {!isEditing && !initialData.imageURL && (
                        <>
                            <ImagePlus className="h-5 w-5"></ImagePlus>
                            Insert
                        </>
                    )}

                    {!isEditing && initialData.imageURL && (
                        <>
                            <Pencil className="h-5 w-5"></Pencil>
                            Edit
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                !initialData.imageURL ? (
                    <div className="flex items-center justify-center h-60 bg-slate-200 rounded-xl mt-3">
                        <ImageIcon className="h-10 w-10 text-slate-500 mt-2s"></ImageIcon>
                    </div>
                ) : (
                    <div className="relative aspect-video mt-3">
                        <Image
                            alt="Upload"
                            className="object-coevr"
                            src={initialData.imageURL}
                        ></Image>
                    </div>
                )
            )}
            {isEditing && (
                <div>
                    <FileUpload
                        endpoint="courseImage"
                        onChange={(url) => {
                            if (url) {
                                onSubmit({ imageURL: url })
                            }
                        }}
                    ></FileUpload>

                    <div className="text-xs text-muted-foreground mt-4 italic">
                        16:9 aspect ratio recommended
                    </div>
                </div>
            )
            }

        </div>
    );
}

export default ImageForm;