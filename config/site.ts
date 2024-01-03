export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "GiveMeARS",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Courses", 
			href: "/search/courses"
		}, 
	],
	navMenuItems: [
		{
			label: "Books",
			href: "/books",
		},
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "About",
			href: "/about",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],

	settingsMenuItems: {
		instructorDashboard:{
			label: "Instructor Dashboard",
			href: "/instructor"
		},
		myLearningDashboard:{
			label: "My Learning Dashboard",
			href: "/my-learning"
		}
	},
		

	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		discord: "https://discord.gg/",
		docs: "https://discord.gg"
	},

	categories: [
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
};
