"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"

import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	navigationMenuTriggerStyle
} from "@/ui/navigation-menu"

import { cn } from "@/utils"
import { Rose } from "@/utils/get-icon"

import profileImg from "@/img/profile.jpg"
import { aboutData } from "@/data/about-data"
import { bookmarksData } from "@/data/bookmarks-data"
import { educationData } from "@/data/education-data"

export function NavMenu() {
	return (
		<>
			<NavigationMenu className="hidden w-full flex-1 gap-4 md:flex">
				<NavigationMenuList className="flex-wrap">
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<figure className="mr-6 cursor-pointer transition active:scale-90">
								<Rose />
							</figure>
						</Link>
					</NavigationMenuItem>
					<NavigationMenuItem>
						<Link href="/" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"bg-transparent dark:hover:bg-[#181818] "
								)}
							>
								Ana Sayfa
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/blog" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"bg-transparent dark:hover:bg-[#181818] "
								)}
							>
								Blog
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-transparent">
							Hakkında
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid gap-3 p-3 md:p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
								<li className="row-span-3 hidden md:flex">
									<NavigationMenuLink asChild>
										<figure className="flex h-full w-full select-none flex-col justify-center overflow-hidden rounded-md transition">
											<Image
												src={profileImg.src}
												alt="Ömer Gülçiçek profil fotoğrafı"
												width={188}
												height={224}
												quality={100}
											/>
										</figure>
									</NavigationMenuLink>
								</li>
								{aboutData.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
										className={cn(
											"relative",
											component.soon &&
												"opacity-50 pointer-events-none cursor-default"
										)}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<NavigationMenuTrigger className="bg-transparent">
							Yer İmleri
						</NavigationMenuTrigger>
						<NavigationMenuContent>
							<ul className="grid w-full gap-3 p-3 md:p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
								{bookmarksData.map((component) => (
									<ListItem
										key={component.title}
										title={component.title}
										href={component.href}
										className={cn(
											"relative",
											component.soon &&
												"opacity-50 pointer-events-none cursor-default"
										)}
									>
										{component.description}
									</ListItem>
								))}
							</ul>
						</NavigationMenuContent>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/journey" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"bg-transparent dark:hover:bg-[#181818] "
								)}
							>
								Anlar
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>
				</NavigationMenuList>
			</NavigationMenu>
		</>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						"bg-transparent hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
						className
					)}
					{...props}
				>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = "ListItem"
