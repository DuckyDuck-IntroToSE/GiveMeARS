"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import autoprefixer from "autoprefixer";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


interface TopCoursesProps {
    topCourses: {
        id: string;
        title: string;
        shortDescription: string | null;
        imageURL: string | null;
    }[]
}
export const TopCourses = (
    { topCourses }: TopCoursesProps
) => {
    const router = useRouter();
    const onClick = (id: string) => {
        toast.success("Loading to course page...");
        router.push(`/courses/${id}`);
    }
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">

            <div className="">
                <h1 className={title()}>Top Courses</h1>
                <Divider className="my-3"></Divider>
            </div>


            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {topCourses.map((topCourse, index) => (
                        <Card
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => onClick(topCourse.id) }
                            className="flex flex-col justify-start"

                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={300}
                                    height={150}
                                    alt={topCourse.title}
                                    className="w-full object-cover h-[200px]"
                                    src={topCourse.imageURL || ""}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col justify-start items-start">
                                <b className="text-start">{topCourse.title}</b>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

interface ArtificialIntelligenceProps {
    aiCourses: {
        id: string;
        title: string;
        shortDescription: string | null;
        imageURL: string | null;
    }[]
}
export const ArtificialIntelligenceCourses = (
    { aiCourses }: ArtificialIntelligenceProps
) => {
    const router = useRouter();
    const onClick = (id: string) => {
        toast.success("Loading to course page...");
        router.push(`/courses/${id}`);
    }
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">

            <div className="">
                <h1 className={title()}>Artificial Intelligence</h1>
                <Divider className="my-3"></Divider>
            </div>


            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {aiCourses.map((aiCourse, index) => (
                        <Card
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => onClick(aiCourse.id) }
                            className="flex flex-col justify-start"

                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={300}
                                    height={150}
                                    alt={aiCourse.title}
                                    className="w-full object-cover h-[200px]"
                                    src={aiCourse.imageURL || ""}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col justify-start items-start">
                                <b className="text-start">{aiCourse.title}</b>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

interface DatabaseCoursesProps {
    dbCourses: {
        id: string;
        title: string;
        shortDescription: string | null;
        imageURL: string | null;
    }[]
}
export const DatabaseCourses = (
    { dbCourses }: DatabaseCoursesProps
) => {
    const router = useRouter();
    const onClick = (id: string) => {
        toast.success("Loading to course page...");
        router.push(`/courses/${id}`);
    }
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">

            <div className="">
                <h1 className={title()}>Database Design & Implement</h1>
                <Divider className="my-3"></Divider>
            </div>


            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {dbCourses.map((dbCourse, index) => (
                        <Card
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => onClick(dbCourse.id) }
                            className="flex flex-col justify-start"

                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={300}
                                    height={150}
                                    alt={dbCourse.title}
                                    className="w-full object-cover h-[200px]"
                                    src={dbCourse.imageURL || ""}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col justify-start items-start">
                                <b className="text-start">{dbCourse.title}</b>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}


interface DevOpsCoursesProps {
    DevOpsCourses: {
        id: string;
        title: string;
        shortDescription: string | null;
        imageURL: string | null;
    }[]
}
export const DevOpsCourses = (
    { DevOpsCourses }: DevOpsCoursesProps
) => {
    const router = useRouter();
    const onClick = (id: string) => {
        toast.success("Loading to course page...");
        router.push(`/courses/${id}`);
    }
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">

            <div className="">
                <h1 className={title()}>DevOps</h1>
                <Divider className="my-3"></Divider>
            </div>


            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {DevOpsCourses.map((DevOpsCourse, index) => (
                        <Card
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => onClick(DevOpsCourse.id) }
                            className="flex flex-col justify-start"
                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={300}
                                    height={150}
                                    alt={DevOpsCourse.title}
                                    className="w-full object-cover h-[200px]"
                                    src={DevOpsCourse.imageURL || ""}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col justify-start items-start">
                                <b className="text-start">{DevOpsCourse.title}</b>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}


interface NetworkSecurityCoursesProps {
    NetworkSecurityCourses: {
        id: string;
        title: string;
        shortDescription: string | null;
        imageURL: string | null;
    }[]
}
export const NetworkSecurityCourses = (
    { NetworkSecurityCourses }: NetworkSecurityCoursesProps
) => {
    const router = useRouter();
    const onClick = (id: string) => {
        toast.success("Loading to course page...");
        router.push(`/courses/${id}`);
    }
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">

            <div className="">
                <h1 className={title()}>Network Security</h1>
                <Divider className="my-3"></Divider>
            </div>


            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {NetworkSecurityCourses.map((NetworkSecurityCourse, index) => (
                        <Card
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => onClick(NetworkSecurityCourse.id) }
                            className="flex flex-col justify-start"
                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={300}
                                    height={150}
                                    alt={NetworkSecurityCourse.title}
                                    className="w-full object-cover h-[200px]"
                                    src={NetworkSecurityCourse.imageURL || ""}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col justify-start items-start">
                                <b className="text-start">{NetworkSecurityCourse.title}</b>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}


interface SoftwareEngineeringCoursesProps {
    SoftwareEngineeringCourses: {
        id: string;
        title: string;
        shortDescription: string | null;
        imageURL: string | null;
    }[]
}
export const SoftwareEngineeringCourses = (
    { SoftwareEngineeringCourses }: SoftwareEngineeringCoursesProps
) => {
    const router = useRouter();
    const onClick = (id: string) => {
        toast.success("Loading to course page...");
        router.push(`/courses/${id}`);
    }
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">

            <div className="">
                <h1 className={title()}>Software Engineering</h1>
                <Divider className="my-3"></Divider>
            </div>


            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {SoftwareEngineeringCourses.map((SoftwareEngineeringCourse, index) => (
                        <Card
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => onClick(SoftwareEngineeringCourse.id) }
                            className="flex flex-col justify-start"
                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={300}
                                    height={150}
                                    alt={SoftwareEngineeringCourse.title}
                                    className="w-full object-cover h-[200px]"
                                    src={SoftwareEngineeringCourse.imageURL || ""}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col justify-start items-start">
                                <b className="text-start">{SoftwareEngineeringCourse.title}</b>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

interface WebDevelopmentCoursesProps {
    WebDevelopmentCourses: {
        id: string;
        title: string;
        shortDescription: string | null;
        imageURL: string | null;
    }[]
}
export const WebDevelopmentCourses = (
    { WebDevelopmentCourses }: WebDevelopmentCoursesProps
) => {
    const router = useRouter();
    const onClick = (id: string) => {
        toast.success("Loading to course page...");
        router.push(`/courses/${id}`);
    }
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">

            <div className="">
                <h1 className={title()}>Web Development</h1>
                <Divider className="my-3"></Divider>
            </div>


            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {WebDevelopmentCourses.map((WebDevelopmentCourse, index) => (
                        <Card
                            shadow="sm"
                            key={index}
                            isPressable
                            onPress={() => onClick(WebDevelopmentCourse.id) }
                            className="flex flex-col justify-start"
                        >
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={300}
                                    height={150}
                                    alt={WebDevelopmentCourse.title}
                                    className="w-full object-cover h-[200px]"
                                    src={WebDevelopmentCourse.imageURL || ""}
                                />
                            </CardBody>
                            <CardFooter className="text-small flex flex-col justify-start items-start">
                                <b className="text-start">{WebDevelopmentCourse.title}</b>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}