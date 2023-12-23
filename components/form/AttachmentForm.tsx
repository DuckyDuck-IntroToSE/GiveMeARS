"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Pencil, ImagePlus, ImageIcon, File, Loader2 , X} from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Attachment, Course } from "@prisma/client";
import { Image } from "@nextui-org/react";
import { FileUpload } from "@/components/file-upload";


interface AttachmentFormProps {
    initialData: Course & { attachments: Attachment[] };
    courseID: string;
}

const formSchema = z.object({
    URL: z.string().min(1),
});

const AttachmentForm = (
    { initialData, courseID }: AttachmentFormProps
) => {
    const [isEditing, setIsEditing] = useState(false);
    const [deletingID, setDeletingID] = useState<string | null>(null);
    
    const toggleEdit = () => setIsEditing((prev) => !prev);
    const router = useRouter();

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            console.log("Sending request:", values);
            await axios.post(`/api/courses/${courseID}/attachments`, values);
            toast.success("Course Updated");
            toggleEdit();
            router.refresh();
        }
        catch {
            toast.error("Something went wrong");
        }
    }

    const onDelete = async (attachmentID: string) => {
        try { 
            setDeletingID(attachmentID);
            await axios.delete(`/api/courses/${courseID}/attachments/${attachmentID}`);
            toast.success("Attachment Deleted");
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        } finally { 
            setDeletingID(null);
        }
    }

    return (
        <div className="my-6 border rounded-xl p-4">
            <div className="font-medium flex items-center justify-between">
                <div className="mr-4">
                    Course Attachments
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
                <>
                    {initialData.attachments.length === 0 && (
                        <div className="italic">
                            No attachment provided
                        </div>
                    )}

                    {initialData.attachments.length > 0 && (
                        <div className="space-y-2">
                            {initialData.attachments.map((attachment) => (
                                <div
                                    key={attachment.id}
                                    className="flex items-center p-3 w-full border-sky-700 border text-sky-700 rounded-xl mt-3"
                                >
                                    <File className="h-4 w-4 mr-2 flex-shrink-0"></File>
                                    <p className="text-xs line-clamp-1">
                                        {attachment.name}
                                    </p>
                                    {deletingID === attachment.id && (
                                        <div>
                                            <Loader2 className="h-4 w-4 animate-spin"></Loader2>
                                        </div>
                                    )}

                                    {deletingID !== attachment.id && (
                                        <Button
                                            onClick={() => onDelete(attachment.id)}
                                            variant="ghost"
                                            color="danger"
                                            className="ml-auto p-0"
                                        >
                                            <X className="h-4 w-4"></X>
                                        </Button>
                                    )}

                                </div>
                            ))}

                        </div>
                    )}

                </>
            )}
            {isEditing && (
                <div>
                    <FileUpload
                        endpoint="courseAttachment"
                        onChange={(url) => {
                            if (url) {
                                onSubmit({ URL: url })
                            }
                        }}
                    ></FileUpload>

                    <div className="text-xs text-muted-foreground mt-4 italic">
                        Note: You can only upload one attachment at a time
                    </div>
                </div>
            )
            }

        </div>
    );
}

export default AttachmentForm;