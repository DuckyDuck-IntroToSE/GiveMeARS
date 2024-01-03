import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/ds";

export async function POST (
    req: Request,
    { params }: { params: { courseID: string } }
) {
    try { 
        const { userId } = auth();

        if (!userId)
        {
            return new NextResponse("Unauthoried", { status: 401 });
        }

        const enrollment = await db.enrollment.create({
            data: {
                userId: userId,
                courseId: params.courseID,
            }
        });

        return NextResponse.json(enrollment);

    } catch (error) {
        console.log("[ENROLLMENT]",error);
        return new NextResponse("Internal Server Error", { status: 500 })
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

        const deletedEnrollment = await db.enrollment.delete({
            where: {
                userId_courseId: {
                    userId: userId,
                    courseId: params.courseID,
                },
            },
        });

        return NextResponse.json(deletedEnrollment);
    } catch (error) {
        console.log("[COURSE_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}


