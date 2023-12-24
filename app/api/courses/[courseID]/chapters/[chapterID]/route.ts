import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/ds";


export async function DELETE(
    req: Request,
    { params }: { params: { courseID: string; chapterID: string } }
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseID,
                userID: userId,
            }
        });

        if (!ownCourse) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const chapter = await db.chapter.findUnique({
            where: {
                id: params.chapterID,
                courseId: params.courseID,
            }
        });

        if (!chapter) {
            return new NextResponse("Not Found", { status: 404 });
        }

        const deletedChapter = await db.chapter.delete({
            where: {
                id: params.chapterID
            }
        });

        const publishedChaptersInCourse = await db.chapter.findMany({
            where: {
                courseId: params.courseID,
                isPublished: true,
            }
        });

        if (!publishedChaptersInCourse.length) {
            await db.course.update({
                where: {
                    id: params.courseID,
                },
                data: {
                    isPublished: false,
                }
            });
        }

        return NextResponse.json(deletedChapter);
    } catch (error) {
        console.log("[CHAPTER_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}


export async function PATCH(
    req: Request,
    { params }: { params: { courseID: string; chapterID: string } }
) {
    try {
        const { userId } = auth();
        const { isPublished, ...values } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const ownCourse = await db.course.findUnique({
            where: {
                id: params.courseID,
                userID: userId,
            }
        });

        if (!ownCourse) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const chapter = await db.chapter.update({
            where: {
                id: params.chapterID,
                courseId: params.courseID,
            },
            data: {
                ...values,
            }
        });

        return NextResponse.json(chapter);

    } catch (error) {
        console.log("[COURSES_CHAPTER_ID]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}