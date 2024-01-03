"use client";

import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { CourseProgress } from "@/components/ui/course-progress";
import { Category, Course } from "@prisma/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { getProgress } from "@/actions/get-progress";


interface MyLearningItemProps {
    course: Course;
    index: number;
    userID: string;
}

const MyLearningItem = (
    { course, index, userID }: MyLearningItemProps
) => {
    const router = useRouter();

    const onPress = () => {
        toast.success("Redirecting to course page...");
        router.push(`/courses/content/${course.id}`);
    };
    return (
        <div>
            <Card
                shadow="sm"
                key={index}
                isPressable
                onPress={onPress}
                className="w-full mb-2"
                aria-label={course.title}
            >
                <CardBody className="overflow-visible p-0">
                    <Image
                        width={300}
                        height={100}
                        alt={course.title}
                        className="w-full object-cover h-[200px]"
                        src={course.imageURL || ""}
                    />
                </CardBody>
                <CardFooter className="text-small flex flex-col gap-4">
                    <div className="flex flex-col w-full gap-4 items-start">
                        <h3 className="text-lg font-medium text-start">
                            {course.title}
                        </h3>
                        <p className="text-sm text-start">
                            {course.shortDescription}
                        </p>
                    </div>

                    {/* <div className="w-full flex flex-col items-center">
                        {progressCount !== null && (
                            <CourseProgress
                                color={progressCount === 100 ? "success" : "default"}
                                size="sm"
                                value={progressCount}
                            />
                        )}
                    </div> */}

                </CardFooter>
            </Card>
            {/* <Button fullWidth>Subscribe</Button> */}
        </div>

    );
}

export default MyLearningItem;