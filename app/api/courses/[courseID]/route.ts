import { db } from "@/lib/ds";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { courseID: string } },

) {
    try {
        const { userId } = auth();
        const { courseID } = params;
        const values = await req.json();

        if (!userId) {
            return new NextResponse("Unauthoried", { status: 401 });
        }

        const course = await db.course.update({
            where: {
                id: courseID,
                userID: userId,
            },
            data: {
                ...values,
            }
        });

        return NextResponse.json(course);

    } catch (error) {
        console.log("[COURSE_ID]", error);
        return new NextResponse("Internal Server Error Hoho", { status: 500 })
    }
}


export async function DELETE(
    req: Request,
    { params }: { params: { courseID: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const course = await db.course.findUnique({
            where: {
                id: params.courseID,
                userID: userId,
            },
        });

        if (!course) {
            return new NextResponse("Not found", { status: 404 });
        }

        const deletedCourse = await db.course.delete({
            where: {
                id: params.courseID,
            },
        });

        return NextResponse.json(deletedCourse);
    } catch (error) {
        console.log("[COURSE_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}