"use client"

import * as React from "react"
import Link from "next/link"

import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	navigationMenuTriggerStyle
} from "@/ui/navigation-menu"

import { cn } from "@/utils"
import { Rose } from "@/utils/get-icon"

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
						<Link href="/about" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"bg-transparent dark:hover:bg-[#181818] flex items-center gap-1"
								)}
							>
								Hakkında
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/bookmarks" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"bg-transparent dark:hover:bg-[#181818] flex items-center gap-1"
								)}
							>
								Yer İmleri
							</NavigationMenuLink>
						</Link>
					</NavigationMenuItem>

					<NavigationMenuItem>
						<Link href="/journey" legacyBehavior passHref>
							<NavigationMenuLink
								className={cn(
									navigationMenuTriggerStyle(),
									"bg-transparent dark:hover:bg-[#181818]"
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
