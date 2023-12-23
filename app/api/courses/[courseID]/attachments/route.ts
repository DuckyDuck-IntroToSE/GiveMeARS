import { db } from "@/lib/ds";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST (
    req: Request,
    {params}: {params: {courseID: string}}
) {
    try {
        const { userId } = auth();
        const { URL } = await req.json();
        console.log("Request:",req);
        console.log("Receive:", URL);


        if (!userId) {
            return new NextResponse("Unauthorized", {status:401});
        }

        const courseOwner = await db.course.findUnique({
            where: { id: params.courseID, userID: userId },
        });

        if (!courseOwner) {
            return new NextResponse("Unauthorized", {status:401});
        }

        const attachment = await db.attachment.create({
            data: {
                url: URL,
                name: URL.split("/").pop(),
                courseID: params.courseID
            },
        });

        return NextResponse.json(attachment);

    } catch (error) {
        console.log("COURSE_ID_ATTACHMENTS", error);
        return new NextResponse("Internal Error", {status:500});
    }
}