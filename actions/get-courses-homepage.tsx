import { db } from "@/lib/ds";


export const getTopCourses = async () => {
    const topCourses = await db.course.findMany({
        take: 10,
        orderBy: {
            enrollments: {
                _count: "desc"
            }
        },
        select: {
            id: true,
            title: true,
            shortDescription: true,
            imageURL: true,
        }
    })
    return topCourses;
}


export const getAICourses = async () => {
    const aiCourses = await db.course.findMany({
        take: 10,
        where: {
            category: {
                name: "Artificial Intelligence"
            }
        },
        select: {
            id: true,
            title: true,
            shortDescription: true,
            imageURL: true,
        }
    })
    return aiCourses;
}

export const getDatabaseCourses = async () => {
    const databaseCourses = await db.course.findMany({
        take: 10,
        where: {
            category: {
                name: "Database Design & Implement"
            }
        },
        select: {
            id: true,
            title: true,
            shortDescription: true,
            imageURL: true,
        }
    })
    return databaseCourses;
}

export const getDevOpsCourses = async () => {
    const DevOpsCourses = await db.course.findMany({
        take: 10,
        where: {
            category: {
                name: "DevOps"
            }
        },
        select: {
            id: true,
            title: true,
            shortDescription: true,
            imageURL: true,
        }
    })
    return DevOpsCourses;
}


export const getNetworkSecurityCourses = async () => {
    const NetworkSecurityCourses = await db.course.findMany({
        take: 10,
        where: {
            category: {
                name: "Network Security"
            }
        },
        select: {
            id: true,
            title: true,
            shortDescription: true,
            imageURL: true,
        }
    })
    return NetworkSecurityCourses;
}


export const getSoftwareEngineeringCourses = async () => {
    const SoftwareEngineeringCourses = await db.course.findMany({
        take: 10,
        where: {
            category: {
                name: "Software Engineering"
            }
        },
        select: {
            id: true,
            title: true,
            shortDescription: true,
            imageURL: true,
        }
    })
    return SoftwareEngineeringCourses;
}

export const getWebDevelopmentCourses = async () => {
    const WebDevelopmentCourses = await db.course.findMany({
        take: 10,
        where: {
            category: {
                name: "Web Development"
            }
        },
        select: {
            id: true,
            title: true,
            shortDescription: true,
            imageURL: true,
        }
    })
    return WebDevelopmentCourses;
}






