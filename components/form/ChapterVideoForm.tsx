"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button, skeleton } from "@nextui-org/react";
import { useState } from "react";
import { Pencil, ImagePlus, ImageIcon, Video } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Chapter, Course } from "@prisma/client";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@nextui-org/react";
import YouTube, { YouTubeProps } from 'react-youtube';
var getYoutubeID = require('get-youtube-id');

interface ChapterVideoFormProps {
    initialData: Chapter;
    courseID: string;
    chapterID: string;
}


const formSchema = z.object({
    videoUrl: z.string().min(1, { message: "Video is required" }),
});


const ChapterVideoForm = (
    { initialData, courseID, chapterID }: ChapterVideoFormProps
) => {
    const [isEditing, setIsEditing] = useState(false);
    const toggleEdit = () => setIsEditing((prev) => !prev);
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            videoUrl: initialData?.videoUrl || ""
        },
    });

    const { isSubmitting, isValid } = form.formState;
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        try {
            await axios.patch(`/api/courses/${courseID}/chapters/${chapterID}`, values);
            toast.success("Chapter video updated");
            toggleEdit();
            router.refresh();
        }
        catch {
            toast.error("Something went wrong");
        }
    }

    const [ videoID, setVideoUrl ]  = useState(getYoutubeID(initialData.videoUrl));
    const handleInputChange = function (event: any) {
        setVideoUrl(getYoutubeID(event.target.value));
    }

    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: "520",
        width: "100%",
        playerVars: {
          autoplay: 0,
        },
    };


    return (
        <div className="my-6 border rounded-xl p-4">
            <div className="font-medium flex items-center justify-between">
                <div className="mr-4">
                    Chapter Video
                </div>
                <Button onClick={toggleEdit} variant="ghost">
                    {isEditing && (
                        <>
                            Cancel
                        </>
                    )}

                    {!isEditing && !initialData.videoUrl && (
                        <>
                            <Video className="h-5 w-5"></Video>
                            Add Youtube Link
                        </>
                    )}

                    {!isEditing && initialData.videoUrl && (
                        <>
                            <Pencil className="h-5 w-5"></Pencil>
                            Edit
                        </>
                    )}
                </Button>
            </div>
            {!isEditing && (
                !initialData.videoUrl ? (
                    <div className="flex items-center justify-center h-60 bg-slate-200 dark:bg-slate-800 rounded-xl mt-3">
                        <Video className="h-10 w-10"></Video>
                    </div>
                ) : (
                    <div className="relative aspect-video mt-3">
                        <YouTube videoId={getYoutubeID(initialData.videoUrl)} opts={opts} onReady={onPlayerReady}></YouTube>
                    </div>
                )
            )}
            {isEditing && (
                <div>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 mt-4"
                        >
                            <FormField
                                control={form.control}
                                name="videoUrl"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isSubmitting}
                                                placeholder="e.g. 'https://www.youtube.com/watch?v=...'"                               
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                    handleInputChange(e);
                                                }}
                                            />                                           
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="w-full">
                                <YouTube videoId={videoID} opts={opts} onReady={onPlayerReady} />
                            </div>
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
                    <div className="text-xs text-muted-foreground mt-4 italic">
                        <span className="font-semibold">Note:</span> Only Youtube videos are supported at the moment.
                    </div>
                </div>
            )
            }

        </div>
    );
}

export default ChapterVideoForm;

