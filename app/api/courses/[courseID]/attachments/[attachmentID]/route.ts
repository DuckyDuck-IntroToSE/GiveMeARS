import { db } from "@/lib/ds";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function DELETE (
    req: Request,
    {params}: {params: {courseID: string, attachmentID: string}}
) {
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", {status:401});
        }

        const courseOwner = await db.course.findUnique({
            where: { 
                id: params.courseID, 
                userID: userId 
            }
        });

        if (!courseOwner) {
            return new NextResponse("Unauthorized", {status:401});
        }

        const attachment = await db.attachment.delete({
            where: {
                id: params.attachmentID,
                courseID: params.courseID
            }
        });

        return NextResponse.json(attachment);



    } catch (error) {
        console.log("ATTACHMENT_ID", error);
        return new NextResponse("Internal Error", {status:500});
    }
}