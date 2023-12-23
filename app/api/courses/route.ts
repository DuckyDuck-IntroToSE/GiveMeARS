import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { db } from "@/lib/ds";

export async function POST (
    req: Request,
) {
    try { 
        const { userId } = auth();
        const { title } = await req.json();

        if (!userId)
        {
            return new NextResponse("Unauthoried", { status: 401 });
        }

        const course = await db.course.create({
            data: {
                userID: userId,
                title: title,
            }
        });

        return NextResponse.json(course)

    } catch (error) {
        console.log("[COURSE]",error);
        return new NextResponse("Internal Server Error", { status: 500 })
    }
}