"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Textarea } from "@nextui-org/react";
import { Course } from "@prisma/client";


interface RequirementFormProps {
    initialData: Course;
    courseID: string;
}

const formSchema = z.object({
    requirements: z.string().min(1, { message: "Requirement is required" }),
});

const RequirementForm = (
    { initialData, courseID }: RequirementFormProps
) => {
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((prev) => !prev);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            requirements: initialData?.requirements || ""
        }
    });

    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseID}`, values);
            toast.success("Requirment updated successfully");
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
                    Course Requirement
                </div>
                <Button onClick={toggleEdit} variant="ghost">
                    {isEditing ? (
                        <>
                            Cancel
                        </>
                    ) : (
                        <>
                            <Pencil className="h-5 w-5"></Pencil>
                            Edit
                        </>

                    )}
                </Button>
            </div>
            {!isEditing && (
                !initialData.shortDescription ? (
                    <div className="italic"> 
                        No requirements provided
                    </div>
                ) : (
                    <div className="italic"> 
                        {initialData.requirements} 
                    </div>
                )
            )}
            {
                isEditing && (
                    <Form {...form}>
                        <form 
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 mt-4"
                        >
                            <FormField
                                control={form.control}
                                name="requirements"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Textarea
                                                disabled={isSubmitting}
                                                placeholder="e.g 'Basic knowledge of HTML, CSS and Javascript'"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />

                            <div className="flex items-center gap-x-2">
                                <Button
                                    disabled={!isValid || isSubmitting}
                                    type="submit"
                                >
                                    Save 
                                </Button>
                            </div>

                        </form>
                    </Form>
                )                    
            }
            
        </div>
    );
}

export default RequirementForm;