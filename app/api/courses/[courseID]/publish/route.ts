import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/ds";

export async function PATCH(
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
      include: {
        chapters: true,
      }
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    const hasPublishedChapter = course.chapters.some((chapter) => chapter.isPublished);

    if (!course.title || !course.description || !course.imageURL || !course.categoryID || !hasPublishedChapter) {
      return new NextResponse("Missing required fields", { status: 401 });
    }

    const publishedCourse = await db.course.update({
      where: {
        id: params.courseID,
        userID: userId,
      },
      data: {
        isPublished: true,
      }
    });

    return NextResponse.json(publishedCourse);
  } catch (error) {
    console.log("[COURSE_ID_PUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  } 
}