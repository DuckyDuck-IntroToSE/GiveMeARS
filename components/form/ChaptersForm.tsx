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
import { Chapter, Course } from "@prisma/client";
import { ChaptersList } from "./ChaptersList";
import { Spinner } from "@nextui-org/react";


interface ChaptersFormProps {
    initialData: Course & { chapters: Chapter[] };
    courseID: string;
}

const formSchema = z.object({
    title: z.string().min(1),
});

const ChaptersForm = (
    { initialData, courseID }: ChaptersFormProps
) => {

    const [isCreating, setIsCreating] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);

    const toggleCreating = () => {
        setIsCreating((current) => !current);
    }
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: ""
        }
    });

    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.post(`/api/courses/${courseID}/chapters`, values);
            toast.success("Chapter created");
            toggleCreating();
            router.refresh();
        }
        catch {
            toast.error("Something went wrong");
        }
    }

    const onReorder = async (updateData: { id: string; position: number }[]) => {
        try {
            setIsUpdating(true);

            await axios.put(`/api/courses/${courseID}/chapters/reorder`, {
                list: updateData
            });
            toast.success("Chapters reordered");
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        } finally {
            setIsUpdating(false);
        }
    }

    const onEdit = (id: string) => {
        router.push(`/instructor/courses/${courseID}/chapters/${id}`);
      }

    return (
        <div className="relative my-6 border rounded-xl p-4">
            {isUpdating && (
                <div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-m flex items-center justify-center">
                    <Spinner/>
                </div>
            )}

            <div className="font-medium flex items-center justify-between">
                <div className="mr-4">
                    Course Chapters
                </div>
                <Button onClick={toggleCreating} variant="ghost">
                    {isCreating ? (
                        <>
                            Cancel
                        </>
                    ) : (
                        <>
                            <Pencil className="h-5 w-5"></Pencil>
                            Add Chapter
                        </>

                    )}
                </Button>
            </div>
            {!isCreating && (
                initialData.chapters.length === 0 ? (
                    <div className="italic">
                        No chapters yet
                    </div>
                ) : (
                    <div className="italic">
                        <ChaptersList
                            onEdit={onEdit}
                            onReorder={onReorder}
                            items={initialData.chapters || []}
                        ></ChaptersList>
                    </div>
                )
            )}
            {
                isCreating && (
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 mt-4"
                        >
                            <FormField
                                control={form.control}
                                name="title"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                disabled={isSubmitting}
                                                placeholder="e.g 'Chapter 1"
                                                {...field}
                                            ></Input>
                                        </FormControl>
                                        <FormMessage></FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button
                                disabled={!isValid || isSubmitting}
                                type="submit"
                            >
                                Create
                            </Button>

                        </form>
                    </Form>
                )
            }

        </div>
    );
}

export default ChaptersForm;