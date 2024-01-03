import { Button } from "@nextui-org/button"
import Link from "next/link"
import { db } from "@/lib/ds"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { DataTable } from "@/components/table/data-table"
import { columns } from "@/components/table/colunms"


const CoursesPage = async () => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const courses = await db.course.findMany({
    where: {
      userID: userId,
    },
    orderBy: {
      createdAt: "desc",
    }
  });

  return (
    <div className="flex flex-col items-center">
      <div className="w-full p-5">
        <DataTable columns={columns} data={courses} />
      </div>
    </div>
  )
}

export default CoursesPage
