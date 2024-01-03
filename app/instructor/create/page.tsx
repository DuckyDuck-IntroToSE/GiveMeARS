"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormDescription, FormField, FormLabel, FormMessage, FormItem } from "@/components/ui/form";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { Info } from "lucide-react";
import { Spinner } from "@nextui-org/react";


const formSchema = z.object({
    title: z.string().min(1, { message: "Title is required" }),
})

const CreatePage = () => {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
        }
    });

    const { isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            const response = await axios.post("/api/courses", values);
            router.push(`/instructor/courses/${response.data.id}`);
            toast.success("Course created successfully");
        }
        catch {
            toast.error("Something went wrong");
        }

    };

    return (
        <div className="mx-auto flex flex-col h-full p-6">
            <div>
                <h1 className="text-2xl">Name your course</h1>
            </div>
            <p className="text-sm">
                What would you like to name your course ? Do not worry, you can change this later
            </p>


            <div className="relative my-10 border rounded-xl p-6">
                {isSubmitting && (
                    <div className="absolute h-full w-full bg-slate-500/20 top-0 right-0 rounded-m flex items-center justify-center z-50">
                        <Spinner></Spinner>
                    </div>
                )}

                <div className="font-bold">
                    Course Title
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 mt-8"
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input
                                            disabled={isSubmitting}
                                            placeholder="e.g Introduction to programming"
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <div className="text-xs text-muted-foreground italic">
                            Name your course something that describes what it is about...
                        </div>

                        <div className="flex items-center gap-x-2">
                            <Link href="/instructor/courses">
                                <Button
                                    type="button"
                                    variant="ghost">
                                    Cancel
                                </Button>
                            </Link>
                            <Button
                                type="submit"
                                disabled={!isValid || isSubmitting}
                                className={(!isValid || isSubmitting) ? "" : "bg-blue-500 hover:bg-blue-600"}
                            >
                                Continue
                            </Button>
                        </div>

                    </form>
                </Form>

            </div>




        </div>
    );
}

export default CreatePage;