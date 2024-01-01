"use client";

import { Card, CardBody, CardFooter } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { CourseProgress } from "@/components/ui/course-progress";

interface CourseSearchItemProps {
    item: any;
    index: number;
}

const CourseSearchItem = (
    { item, index }: CourseSearchItemProps
) => {
    return (
        <div>
            <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="w-full mb-2">
                <CardBody className="overflow-visible p-0">
                    <Image
                        width={300}
                        height={100}
                        alt={item.title}
                        className="w-full object-cover h-[200px]"
                        src={item.imageURL}
                    />
                </CardBody>
                <CardFooter className="text-small flex flex-col gap-4">
                    <div className="flex flex-col items-start w-full">
                        <h3 className="text-lg font-medium">
                            {item.title}
                        </h3>
                        <p className="text-sm">
                            {item.description}
                        </p>
                    </div>

                    <div className="w-full flex flex-col items-center">
                        {item.progress !== null && (
                            <CourseProgress
                                color={item.progress === 100 ? "success" : "default"}
                                size="sm"
                                value={item.progress}
                            />
                        )}
                    </div>

                </CardFooter>
            </Card>
            <Button fullWidth>Subscribe</Button>
        </div>

    );
}

export default CourseSearchItem;