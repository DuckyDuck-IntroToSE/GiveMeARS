"use client";
import React from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { Edit } from "lucide-react";
import { Trash } from "lucide-react";
import { Course } from "@prisma/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";

const columns = [
    { name: "TITLE", uid: "title" },
    { name: "PUBLIC STATUS", uid: "isPublished" },
    { name: "ACTIONS", uid: "actions" },
];

interface InstructorCourseTableProps {
    courses: Course[];
}

const InstructorCourseTable = ({ courses }: InstructorCourseTableProps) => {
    const router = useRouter();

    const onDelete = async (courseID: string) => {
        try {
            await axios.delete(`/api/courses/${courseID}`);
            toast.success("Chapter deleted");
            router.refresh();
        } catch {
            toast.error("Something went wrong");
        }
    };

    const renderCell = React.useCallback((course: any, columnKey: any) => {
        const cellValue = course[columnKey];

        switch (columnKey) {
            case "name":
                return (
                    <div className="text-bold text-sm capitalize">
                        {cellValue}
                    </div>
                );

            case "isPublished":
                return (
                    <>
                        {cellValue && (
                            <Chip className={"capitalize"} size="sm" variant="flat" color="success">
                                Published
                            </Chip>
                        )}

                        {!cellValue && (
                            <Chip className={"capitalize"} size="sm" variant="flat">
                                Unpublished
                            </Chip>
                        )}


                    </>



                );

            case "actions":
                return (
                    <>
                        <div className="relative flex items-center gap-2">
                            <Link href={`/instructor/courses/${course.id}`}
                                className="text-lg text-default-400 cursor-pointer" >
                                <Edit className="h-6 w-6"></Edit>
                            </Link>

                            <span className="text-lg text-danger cursor-pointer active:opacity-50"
                                onClick={()=> onDelete(course.id)}
                            >
                                <Trash className="h-6 w-6"></Trash>
                            </span>
                        </div>

                    </>

                );
            default:
                return cellValue;
        }

    }, []);

    return (
        <div className="w-full flex">
            <Table
                aria-label="Courses Table"
                selectionMode="single"
            >
                <TableHeader columns={columns}>
                    {(column) => (
                        <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody items={courses}>
                    {(course: Course) => (
                        <TableRow key={course.id}>
                            {(columnKey) => <TableCell>{renderCell(course, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>

        </div>

    );
}

export default InstructorCourseTable;





