import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import {
	SearchIcon,
	CartIcon,
	NotifyIcon
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { auth, UserButton } from "@clerk/nextjs";
import { Categories } from "@/components/dropdown-items";
import { SettingIcon } from "@/components/dropdown-items";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/button";
import { LibrarySquare, Book, UserRound, BookOpenText } from 'lucide-react';



export const Navbar = () => {
	const { userId } = auth();

	return (
		<NextUINavbar maxWidth="xl" isBordered position="sticky">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">GIVEMEARs</p>
					</NextLink>
				</NavbarBrand>
				<NavbarItem className="hidden md:flex gap-2">
					<NextLink
						className="hover:text-blue-500"
						color="foreground"
						href={"/"}
					>
						Home
					</NextLink>
					<NextLink
						className="hover:text-blue-500"
						color="foreground"
						href={"/about"}
					>
						About
					</NextLink>
					<NextLink
						className="hover:text-blue-500"
						color="foreground"
						href={"/search/courses"}
					>
						Courses
					</NextLink>
				</NavbarItem>
				
			</NavbarContent>

			<NavbarContent
				className="hidden md:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">
					<NextLink href={"/instructor/"}>
						<Button
							className="hover:bg-blue-600 dark:hover:bg-blue-800"
							startContent={(<UserRound className="h-6 w-6"></UserRound>)}
						>Instructor Dashboard</Button>
					</NextLink>
					<NextLink href={"/my-learning"}>
						<Button
							className="hover:bg-blue-600 dark:hover:bg-blue-800"
							startContent={(<BookOpenText className="h-6 w-6"></BookOpenText>)}
						>My learning</Button>
					</NextLink>
				</NavbarItem>

				<NavbarItem className="hidden sm:flex gap-2">
					{/* <NotifyIcon className="text-default-500"></NotifyIcon>
					<CartIcon className="text-default-500"></CartIcon> */}
					{/* <SettingIcon></SettingIcon> */}
					<ThemeSwitch />
				</NavbarItem>

				<NavbarItem className="hidden md:flex">
					{!userId && (<>
						<NextLink href="/sign-in" className="mr-2"><Button color="default"> Sign In </Button></NextLink>
						<NextLink href="/sign-up" className="mr-2"><Button className="bg-blue-500"> Sign Up </Button></NextLink>
					</>)}

					<div>
						<UserButton afterSignOutUrl="/"></UserButton>
					</div>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="md:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<UserButton afterSignOutUrl="/"></UserButton>
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					<NavbarMenuItem>
						<Link href="/"> Home </Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link href="/about"> About </Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link href="/search/courses"> Courses </Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link href="/instructor/courses"> Instructor Dashboard </Link>
					</NavbarMenuItem>
					<NavbarMenuItem>
						<Link href="/my-learning"> My Learning </Link>
					</NavbarMenuItem>
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};



