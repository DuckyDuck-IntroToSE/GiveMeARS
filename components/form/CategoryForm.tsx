"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Course } from "@prisma/client";
import {Select, SelectItem} from "@nextui-org/react";


interface CategoryFormProps {
    initialData: Course;
    courseID: string;
    options: { label: string; value: string;} [];
}

const formSchema = z.object({
    categoryID: z.string().min(1),
});

const CategoryForm = (
    { initialData, courseID, options }: CategoryFormProps
) => {
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((prev) => !prev);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            categoryID: initialData?.categoryID || ""
        }
    });

    const { isSubmitting, isValid } = form.formState;
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

    const selectedOption = options.find((option) => option.value === initialData.categoryID);
 
    return (
        <div className="my-6 border rounded-xl p-4">
            <div className="font-medium flex items-center justify-between">
                <div className="mr-4">
                    Course Category
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
                <div className="italic"> 
                    {selectedOption?.label || "No category provided"}
                </div>
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
                                name="categoryID"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Select
                                                items={options}
                                                label="Categories"
                                                placeholder="Select a course category"
                                                {...field}
                                            >
                                                {(option) => <SelectItem key={option.value}>{option.label}</SelectItem>}
                                            </Select>
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

export default CategoryForm;