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
			label: "Books",
			href: "/books",
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
		}
	},
		

	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		discord: "https://discord.gg/",
		docs: "https://discord.gg"
	},
};
