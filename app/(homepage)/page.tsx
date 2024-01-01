import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import Hero from "@/components/hero";
import { TopCourses, ComputerScienceCourses, DataScienceCourses, PopularCourses, SoftwareEngineeringCourse, TopBooks } from "@/components/carousel";
import {UserButton, SignedIn, SignedOut} from "@clerk/nextjs"

export default function Home() {
	return (
		<div>
			<Hero></Hero>
			<TopCourses></TopCourses>
			<PopularCourses></PopularCourses>
			<ComputerScienceCourses></ComputerScienceCourses>
			<DataScienceCourses></DataScienceCourses>
			<SoftwareEngineeringCourse></SoftwareEngineeringCourse>
			<TopBooks></TopBooks>
		</div>

	);
}
