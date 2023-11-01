export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "GiveMeARS",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
		{
			label: "About",
			href: "/about",
		},
		// {
		// 	label: "Categories",
		// 	href: "/categories",
		// },
		{
			label: "Books",
			href: "/books",
		},
		// {
		//   label: "Blog",
		//   href: "/blog",
		// },
	
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
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
	links: {
		github: "https://github.com/",
		twitter: "https://twitter.com/",
		discord: "https://discord.gg/",
	},
};
