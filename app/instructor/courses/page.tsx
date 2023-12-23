import { Button } from "@nextui-org/button"
import Link from "next/link"
import InstructorCourseTable from "@/components/table/InstructorCourseTable"
import { db } from "@/lib/ds"
import { auth } from "@clerk/nextjs"
import { redirect } from "next/navigation"
import { TableWrapper } from "@/components/table/table"


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
      createdAt: "desc"
    }
  });

  return (
    <div className="flex flex-col items-center">
      <Link href="/instructor/create">
        <Button>New Course</Button>
      </Link>


      <div className="w-full p-4">
      <InstructorCourseTable
        courses={courses}
      ></InstructorCourseTable>
      </div>
      




    </div>
  )
}

export default CoursesPage
