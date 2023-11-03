"use client";
import React from "react";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { title, subtitle } from "@/components/primitives";
import { Divider } from "@nextui-org/divider";
import autoprefixer from "autoprefixer";
import { motion } from "framer-motion";


const list = [
    {
        title: "Orange",
        img: "/images/blog/blog-01.png",
        price: "$5.50",
    },
    {
        title: "Tangerine",
        img: "/images/blog/blog-01.png",
        price: "$3.00",
    },
    {
        title: "Raspberry",
        img: "/images/blog/blog-01.png",
        price: "$10.00",
    },
    {
        title: "Lemon",
        img: "/images/blog/blog-01.png",
        price: "$5.30",
    },
    {
        title: "Avocado",
        img: "/images/blog/blog-01.png",
        price: "$15.70",
    },
    {
        title: "Lemon 2",
        img: "/images/blog/blog-01.png",
        price: "$8.00",
    },
    {
        title: "Banana",
        img: "/images/blog/blog-01.png",
        price: "$7.50",
    },
    {
        title: "Watermelon",
        img: "/images/blog/blog-01.png",
        price: "$12.20",
    },
];

export const TopCourses = () => {
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
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={100}
                                    height={50}
                                    alt={item.title}
                                    className="w-full object-cover h-[200px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

export const PopularCourses = () => {
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">
            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="">
                    <h1 className={title()}>Popular Courses</h1>
                    <Divider className="my-3"></Divider>

                </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={100}
                                    height={50}
                                    alt={item.title}
                                    className="w-full object-cover h-[200px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>


        </div>
    );
}

export const ComputerScienceCourses = () => {
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">
            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="">
                    <h1 className={title()}>Computer Science</h1>
                    <Divider className="my-3"></Divider>

                </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={100}
                                    height={50}
                                    alt={item.title}
                                    className="w-full object-cover h-[200px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>


        </div>
    );
}

export const DataScienceCourses = () => {
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">
            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="">
                    <h1 className={title()}>Data Science</h1>
                    <Divider className="my-3"></Divider>

                </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={100}
                                    height={50}
                                    alt={item.title}
                                    className="w-full object-cover h-[200px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>


        </div>
    );
}

export const SoftwareEngineeringCourse = () => {
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">
            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="">
                    <h1 className={title()}>Software Engineering</h1>
                    <Divider className="my-3"></Divider>

                </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={100}
                                    height={50}
                                    alt={item.title}
                                    className="w-full object-cover h-[200px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>

        </div>
    );
}

export const TopBooks = () => {
    return (
        <div className="flex flex-col gap-4 py-8 md:py-10">
            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="">
                    <h1 className={title()}>Top Books</h1>
                    <Divider className="my-3"></Divider>
                </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: -20, }, visible: { opacity: 1, y: 0, }, }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="animate_top"
            >
                <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {list.map((item, index) => (
                        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                            <CardBody className="overflow-visible p-0">
                                <Image
                                    width={100}
                                    height={50}
                                    alt={item.title}
                                    className="w-full object-cover h-[200px]"
                                    src={item.img}
                                />
                            </CardBody>
                            <CardFooter className="text-small justify-between">
                                <b>{item.title}</b>
                                <p className="text-default-500">{item.price}</p>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </motion.div>


        </div>
    );
}