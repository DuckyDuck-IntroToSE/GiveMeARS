"use client";

import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { CourseProgress } from "@/components/ui/course-progress";
import { Category, Course } from "@prisma/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type CourseWithProgressWithCategory = Course & {
    category: Category | null;
    chapters: { id: string }[];
    progress: number | null;
  };

interface CourseSearchItemProps {
    item: CourseWithProgressWithCategory;
    index: number;
}

const CourseSearchItem = (
    { item, index }: CourseSearchItemProps
) => {
    const router = useRouter();
    const onPress = () => {
        toast.success("Redirecting to course page...");
        router.push(`/courses/${item.id}`);
    };
    return (
        <div>
            <Card 
                shadow="sm" 
                key={index} 
                isPressable 
                onPress={onPress} 
                className="w-full mb-2"
                aria-label={item.title}
            >

                <CardBody className="overflow-visible p-0">
                    <Image
                        width={300}
                        height={100}
                        alt={item.title}
                        className="w-full object-cover h-[200px]"
                        src={item.imageURL || ""}
                    />
                </CardBody>
                <CardFooter className="text-small flex flex-col gap-4">
                    <div className="flex flex-col w-full gap-4 items-start">
                        <Chip color="default" className="text-small justify-center" >{item.category?.name}</Chip>

                        <h3 className="text-lg font-medium text-start">
                            {item.title}
                        </h3>
                        <p className="text-sm text-start">
                            {item.shortDescription}
                        </p>
                    </div>

                    {/* <div className="w-full flex flex-col items-center">
                        {item.progress !== null && (
                            <CourseProgress
                                color={item.progress === 100 ? "success" : "default"}
                                size="sm"
                                value={item.progress}
                            />
                        )}
                    </div> */}

                </CardFooter>
            </Card>
            {/* <Button fullWidth>Subscribe</Button> */}
        </div>

    );
}

export default CourseSearchItem;