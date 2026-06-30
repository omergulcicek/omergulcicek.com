"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { Menu } from "lucide-react"

import { cn } from "@/lib/utils"

import {
	Button,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from "@/ui"

import { navItemsData, type NavItem } from "@/data"

export function HeaderNavDrawer() {
	const pathname = usePathname()

	return (
		<Drawer shouldScaleBackground setBackgroundColorOnScale>
			<DrawerTrigger asChild>
				<Button variant="ghost" size="sm">
					<Menu className="size-4" />
				</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Menü</DrawerTitle>
				</DrawerHeader>
				<div className="px-4 pb-4">
					<nav
						role="navigation"
						aria-label="Mobil menü"
						className="flex flex-col gap-2"
					>
						{navItemsData.map((item: NavItem) => {
							const Icon = item.icon
							return (
								<DrawerClose asChild key={item.href}>
									<Link
										href={item.href}
										className={cn(
											"cursor-pointer flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
											pathname === item.href ||
												(pathname.startsWith(item.href) && item.href !== "/")
												? "bg-accent text-accent-foreground"
												: "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
										)}
									>
										<Icon className="size-4" />
										{item.label}
									</Link>
								</DrawerClose>
							)
						})}
					</nav>
				</div>
			</DrawerContent>
		</Drawer>
	)
}
