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
import {auth, UserButton } from "@clerk/nextjs";
import { Categories } from "@/components/dropdown-items";
import { SettingIcon } from "@/components/dropdown-items";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@nextui-org/button";
import { LibrarySquare, Book } from 'lucide-react';



export const Navbar = () => {
	const { userId } = auth();

	return (
		<NextUINavbar maxWidth="xl" isBordered position="static">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
						<p className="font-bold text-inherit">GIVEMEARs</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-medium"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>

						</NavbarItem>
					))}
				</ul>
				{/* <Categories></Categories> */}
				<NextLink href={"/search/courses"}>Courses</NextLink>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex gap-2">

					{/* <NextLink href={"/search/books"}>
						<Button
							startContent={(<Book className="h-6 w-6"></Book>)}
						>Books</Button>
					</NextLink> */}
				</NavbarItem>

				<NavbarItem className="hidden sm:flex gap-2">
					{/* <NotifyIcon className="text-default-500"></NotifyIcon>
					<CartIcon className="text-default-500"></CartIcon> */}
					<SettingIcon></SettingIcon>
					<ThemeSwitch />
				</NavbarItem>

				<NavbarItem className="hidden md:flex">
					{!userId && (<>
						<NextLink href="sign-in" className="mr-2"><Button color="default"> Sign In </Button></NextLink>
						<NextLink href="sign-up" className="mr-2"><Button className="bg-blue-500"> Sign Up </Button></NextLink>
					</>)}

					<div>
						<UserButton afterSignOutUrl="/"></UserButton>
					</div>
				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navMenuItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`}>
							<Link
								color={
									index === 2
										? "primary"
										: index === siteConfig.navMenuItems.length - 1
											? "danger"
											: "foreground"
								}
								href="#"
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};



