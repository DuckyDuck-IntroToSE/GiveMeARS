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
    });

    if (!course) {
      return new NextResponse("Not found", { status: 404 });
    }

    const unpublishedCourse = await db.course.update({
      where: {
        id: params.courseID,
        userID: userId,
      },
      data: {
        isPublished: false,
      }
    });

    return NextResponse.json(unpublishedCourse);
  } catch (error) {
    console.log("[COURSE_ID_UNPUBLISH]", error);
    return new NextResponse("Internal Error", { status: 500 });
  } 
}