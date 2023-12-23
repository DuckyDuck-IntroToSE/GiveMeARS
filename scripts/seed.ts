const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

const categories = [
    {
        name: "Artificial Intelligence",
        cover: "",
    },
    {
        name: "Database Design & Implement",
        cover: "",
    },
    {
        name: "DevOps",
        cover: "",
    },
    {
        name: "Network Security",
        cover: "",
    },
    {
        name: "Software Engineering",
        cover: "",
    },
    {
        name: "Web Development",
        cover: "",
    },
]

async function main() {
    try {
        await database.category.createMany({
            data: categories.map((category) => ({
                name: category.name})), 
        })
        console.log("Success");
    } catch (error) {
        console.log("Error seeding the database categories:", error);
    } finally {
        await database.$disconnect();
    }
}


main();