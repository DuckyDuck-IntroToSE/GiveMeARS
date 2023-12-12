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
import { Input } from "@nextui-org/input";

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
import { User } from "@nextui-org/user";
import { SignInButton, SignUpButton, auth, UserButton } from "@clerk/nextjs";
import { Categories } from "@/components/dropdown-items";
import { SettingIcon } from "@/components/dropdown-items";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { DashboardNavbarRoutes } from "@/components/navbar-routes";
import { ThemeSwitch } from "@/components/theme-switch";

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
				<SearchIcon className="text-base text-default-500 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);



	const { userId } = auth();

	return (
		<NextUINavbar maxWidth="xl" position="sticky" isBordered isBlurred={true}>
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
					<SettingIcon></SettingIcon>
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

					{/* <AvatarIcon></AvatarIcon> */}
					{/* <SignInButton></SignInButton>
					<SignUpButton></SignUpButton> */}

					{!userId && (<>
						<Link href="sign-in" className="mr-4">Sign In</Link>
						<Link href="sign-up" className="mr-4">Sign Up</Link>
					</>)}

					<div>
						<UserButton afterSignOutUrl="/sign-in"></UserButton>
					</div>

					
					



				</NavbarItem>
			</NavbarContent>

			{/* <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
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
			</NavbarMenu> */}
		</NextUINavbar>
	);
};


export const DashboardNavbar = () => {
	return (
		<div className="p-5 border-b h-full flex items-center bg-white shadow-sm">
			<MobileSidebar></MobileSidebar>
			<DashboardNavbarRoutes></DashboardNavbarRoutes>
		</div>
	);
};

