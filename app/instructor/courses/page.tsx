import { Button } from "@nextui-org/button"
import Link from "next/link"

const CoursesPage = () => {
  return (
    <div className="flex flex-col items-center">
        <Link href="/instructor/create">
            <Button>New Course</Button>
        </Link>

    </div>
  )
}

export default CoursesPage
