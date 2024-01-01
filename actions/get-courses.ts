import { Category, Course } from "@prisma/client";

import { getProgress } from "@/actions/get-progress";
import { db } from "@/lib/ds";

type CourseWithProgressWithCategory = Course & {
  category: Category | null;
  chapters: { id: string }[];
  progress: number | null;
};

type GetCourses = {
  userId: string;
  title?: string;
  categoryID?: string[];
};

type CourseWhereInput = {
  isPublished: boolean;
  title: {
    contains: string | undefined;
  };
  categoryID?: {
    in: string[] | undefined;
  };
};


export const getCourses = async ({
  userId,
  title,
  categoryID
}: GetCourses): Promise<CourseWithProgressWithCategory[]> => {
  try {  

    let whereCondition: CourseWhereInput = {
      isPublished: true,
      title: {
        contains: title,
      },
    };
    
    if (categoryID && categoryID.length > 0) {
      whereCondition = {
        ...whereCondition,
        categoryID: {
          in: categoryID,
        },
      };
    }

    const courses = await db.course.findMany({
      where: whereCondition,
      include: {
        category: true,
        chapters: {
          where: {
            isPublished: true,
          },
          select: {
            id: true,
          }
        },
        enrollments: {
            where: {
                userId: userId,
            }
        }
      },
      orderBy: {
        createdAt: "desc",
      }
    });

    const coursesWithProgress: CourseWithProgressWithCategory[] = await Promise.all(
      courses.map(async course => {
        if (course.enrollments.length === 0) {
          return {
            ...course,
            progress: null,
          }
        }

        const progressPercentage = await getProgress(userId, course.id);

        return {
          ...course,
          progress: progressPercentage,
        };
      })
    );

    return coursesWithProgress;
  } catch (error) {
    console.log("[GET_COURSES]", error);
    return [];
  }
}