import MyLearningItem from "@/components/list/mylearning-item";
import { db } from "@/lib/ds";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";


const MyLearningPage = async () => {
    const { userId } = auth();
    if (!userId) {
        redirect("/")
    }

    const EnrolledCourses = await db.enrollment.findMany({
        where: {
            userId: userId
        }, 
        include: {
            course: true
        }
    })


    return ( 

        <div className="my-10">
            <div className="text-4xl font-bold mb-6">My Learning</div>

            <div className="gap-4 grid grid-cols-2 sm:grid-cols-4">
                    {EnrolledCourses.map((enrollcourse, index) => (
                        <MyLearningItem
                            course={enrollcourse.course}
                            index={index}
                            userID={userId}
                        ></MyLearningItem>
                    ))}
                </div>
        </div>
     );
}
 
export default MyLearningPage;