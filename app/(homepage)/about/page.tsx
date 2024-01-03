"use client";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";


const AboutPage = () => {
    const members = [
        {
            name: "Nguyễn Hải Tuyên", 
            studentId: "21127474",
            avatar: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/327901552_511240837762435_2415432170507808960_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHTA8P03q4aOjMR1CgoIWWiuocDryosikO6hwOvKiyKQ4g6YsOcm7p-31e7NXH57YZmGYtS6Jkm9qma78i7tWXx&_nc_ohc=Y_sYupa4E-kAX9CyZAy&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfCUNnxN1XnT56SqdGVlCMjpEd5JhwYWprzmSmScPJrDCg&oe=659B1CF5",
        }, 
        {
            name: "Nguyễn Thái Huyền", 
            studentId: "21126019",
            avatar: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t39.30808-1/329632654_3136595706631722_5819662999261556043_n.jpg?stp=dst-jpg_p480x480&_nc_cat=109&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeH9ppU08z4kYyZTquLQ-yiz2iWP8Nakjv3aJY_w1qSO_WE2RB3A8Tfc1Bb7DI42POwe9-QP3SqAbZSKnjxsQaQI&_nc_ohc=_8vrp5izdB8AX_oHumQ&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfDtfosPZf3m5RGRxydtrOrr5R67AuC0z7fdqF6jOMZwBw&oe=659B2A02",
        }, 
        {
            name: "Trần Quốc Tuấn", 
            studentId: "21127199",
            avatar: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/358663934_1689516404843709_4595929228480054200_n.jpg?stp=dst-jpg_p480x480&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGVTr1vlPrmKB2T682r42IyQHikMbsg4tlAeKQxuyDi2YYLB3xHjaHOoSUOnB-7RKAdHJ-sPml3JzS-8dGjH1n5&_nc_ohc=OGvg-engUNsAX-b0nkz&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfBuxCJ8zoCs9xOYv8CrBhGL9QMDZkQWa8-x8UYvSLBCnA&oe=659B2AFC",
        },
        {
            name: "Nguyễn Trần Châu Minh", 
            studentId: "21126030",
            avatar: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/402878546_1056422162470573_6668979617915204400_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGABwndYVN5LTZXjGwOSDin_noxXnxfPMX-ejFefF88xdZSYv9A8X1k-wknh_W_pbV_XsLzDx7-PrITlh1bExY2&_nc_ohc=UjdGnVuVtikAX8loODm&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfDwCcd1r8uIrS_ZD5wYkIYywFhEMGxmheHLpXtzm9j88g&oe=659A50B2",
        }
    ];


    return (
        <div className="w-full">
            <div className="text-4xl font-bold">OUR TEAM</div>
            <div className="text-base italic">We are a team of passionate people.</div>
            <div className="text-base italic">A project of Introduction to Software Engineering course.</div>


            <div className="gap-4 grid grid-cols-4 mt-6">
                {members.map((member, index) => (
                    <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                        <CardBody className="overflow-visible p-0">
                            <Image
                                shadow="sm"
                                radius="lg"
                                width="100%"
                                alt={member.name}
                                className="w-full object-cover h-[240px]"
                                src={member.avatar}
                            />
                        </CardBody>
                        <CardFooter className="flex flex-col justify-center items-center text-small gap-3">
                            <b>{member.name}</b>
                            <div>{member.studentId}</div>
                        </CardFooter>
                    </Card>
                ))}
            </div>

        </div>
    );
}

export default AboutPage;