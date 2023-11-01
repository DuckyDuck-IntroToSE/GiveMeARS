"use client";
import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import {
	TwitterIcon,
	GithubIcon,
	DiscordIcon,
	HeartFilledIcon,
	SearchIcon,
	CartIcon,
	NotifyIcon
} from "@/components/icons";

import { Logo } from "@/components/icons";
import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import {
	Dropdown,
	DropdownTrigger,
	DropdownMenu,
	DropdownSection,
	DropdownItem
} from "@nextui-org/dropdown";
import { User } from "@nextui-org/user";

export const Navbar = () => {
	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	const AvatarIcon = () => {
		return (
			<div className="flex items-center gap-4">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownSection aria-label="Profile & Actions" showDivider>
							<DropdownItem key="profile" className="h-14 gap-2">
								<User
									name="Jane Doe"
									description="Product Designer"
									avatarProps={{
										src: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
									}}
								/>
							</DropdownItem>
						</DropdownSection>

						<DropdownSection aria-label="Profile & Actions" showDivider>
							<DropdownItem key="my_learning">My learning</DropdownItem>
							<DropdownItem key="my_cart">My cart</DropdownItem>
							<DropdownItem key="intructor_dashboard">Intructor dashboard</DropdownItem>
						</DropdownSection>

						<DropdownSection aria-label="Profile & Actions" showDivider>
							<DropdownItem key="account_settings">Account settings</DropdownItem>
							<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
						</DropdownSection>
						<DropdownItem key="logout" color="danger">Log Out</DropdownItem>

					</DropdownMenu>
				</Dropdown>
			</div>

		);
	};

	const Categories = () => {
		return (
			<div className="flex items-center gap-4">
				<Dropdown>
					<DropdownTrigger>
						<p className={clsx(
							linkStyles({ color: "foreground" }),
							"data-[active=true]:text-primary data-[active=true]:font-medium"
						)}
							color="foreground"> Categories</p>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="artificial_intelligence" >Artificial Intelligence</DropdownItem>
						<DropdownItem key="database_design_implement" >Database Design & Implement</DropdownItem>
						<DropdownItem key="devops" >DevOps</DropdownItem>
						<DropdownItem key="network_security" >Network Security</DropdownItem>
						<DropdownItem key="software_engineering" >Software Engineering</DropdownItem>
						<DropdownItem key="web_development" >Web Development</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>

		);
	};

	return (
		<NextUINavbar maxWidth="xl" position="sticky">
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
				<Categories></Categories>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
				<NavbarItem className="hidden sm:flex gap-2">
					{/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
						<TwitterIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.discord} aria-label="Discord">
						<DiscordIcon className="text-default-500" />
					</Link>
					<Link isExternal href={siteConfig.links.github} aria-label="Github">
						<GithubIcon className="text-default-500" />
					</Link> */}
		
					<NotifyIcon className="text-default-500"></NotifyIcon>
					<CartIcon className="text-default-500"></CartIcon>
					<ThemeSwitch />
				</NavbarItem>

				<NavbarItem className="hidden md:flex">
					{/* <Button
            isExternal
						as={Link}
						className="text-sm font-normal text-default-600 bg-default-100"
						href={siteConfig.links.sponsor}
						startContent={<HeartFilledIcon className="text-danger" />}
						variant="flat"
					>
						Sponsor
					</Button> */}
					<AvatarIcon></AvatarIcon>

				</NavbarItem>
			</NavbarContent>

			<NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
				<Link isExternal href={siteConfig.links.github} aria-label="Github">
					<GithubIcon className="text-default-500" />
				</Link>
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
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


