import Hero from "@/components/hero";
import { ArtificialIntelligenceCourses, DatabaseCourses, DevOpsCourses, NetworkSecurityCourses, SoftwareEngineeringCourses, TopCourses, WebDevelopmentCourses } from "@/components/carousel";
import { getAICourses, getDatabaseCourses, getDevOpsCourses, getNetworkSecurityCourses, getSoftwareEngineeringCourses, getTopCourses, getWebDevelopmentCourses } from "@/actions/get-courses-homepage";


export default async function Home() {
	const topCourses = await getTopCourses();
	const aiCourses = await getAICourses();
	const dbCourses = await getDatabaseCourses();
	const devOpsCourses = await getDevOpsCourses();
	const networkSecurityCourses = await getNetworkSecurityCourses();
	const softwareEngineeringCourses = await getSoftwareEngineeringCourses();
	const webDevelopmentCourses = await getWebDevelopmentCourses();

	return (
		<div>
			<Hero></Hero>
			<TopCourses topCourses={topCourses}/>
			<ArtificialIntelligenceCourses aiCourses={aiCourses}/>
			<DatabaseCourses dbCourses={dbCourses}></DatabaseCourses>
			<DevOpsCourses DevOpsCourses={devOpsCourses}></DevOpsCourses>
			<NetworkSecurityCourses NetworkSecurityCourses={networkSecurityCourses}></NetworkSecurityCourses>
			<SoftwareEngineeringCourses SoftwareEngineeringCourses={softwareEngineeringCourses}></SoftwareEngineeringCourses>
			<WebDevelopmentCourses WebDevelopmentCourses={webDevelopmentCourses}></WebDevelopmentCourses>
		</div>

	);
}
