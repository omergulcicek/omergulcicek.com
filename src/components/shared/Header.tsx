"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Menu } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"

import { USER } from "@/constants/user"

import { cn } from "@/lib/utils"

import { Container } from "@/shared"
import {
	Button,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from "@/ui"
import { CommandPalette } from "@/widgets"

import { GitHub } from "@/icons"
import { NAV_ITEMS, type NavItem } from "@/data"

export function Header() {
	const pathname = usePathname()
	const isDesktop = useMediaQuery("(min-width: 768px)")
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 200)

		return () => clearTimeout(timer)
	}, [])

	return (
		<header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<Container className="py-4 md:py-4">
				<div className="flex items-center justify-between">
					{isLoading ? (
						<div className="size-8 animate-pulse rounded-full bg-muted" />
					) : isDesktop ? (
						<Link href="/">
							<Image
								src="/omergulcicek.png"
								alt="Ömer Gülçiçek"
								width={32}
								height={32}
							/>
						</Link>
					) : (
						<Drawer shouldScaleBackground setBackgroundColorOnScale>
							<DrawerTrigger asChild>
								<Button
									variant="outline"
									size="sm"
									className="rounded-full size-8"
								>
									<Menu className="size-4" />
								</Button>
							</DrawerTrigger>
							<DrawerContent>
								<DrawerHeader>
									<DrawerTitle>Menü</DrawerTitle>
								</DrawerHeader>
								<div className="px-4 pb-4">
									<nav className="flex flex-col gap-2">
										{NAV_ITEMS.map((item: NavItem) => {
											const Icon = item.icon
											return (
												<DrawerClose asChild key={item.href}>
													<Link
														href={item.href}
														className={cn(
															"flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300",
															pathname === item.href ||
																(pathname.startsWith(item.href) &&
																	item.href !== "/")
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
					)}

					<div className="flex items-center gap-4">
						{isLoading ? (
							<div className="hidden md:flex items-center gap-4">
								<div className="h-5 w-14 animate-pulse rounded-sm bg-muted" />
								<div className="h-5 w-14 animate-pulse rounded-sm bg-muted" />
								<div className="h-5 w-14 animate-pulse rounded-sm bg-muted" />
								<div className="h-5 w-14 animate-pulse rounded-sm bg-muted" />
							</div>
						) : (
							isDesktop && (
								<nav className="flex items-center gap-4 text-sm font-medium">
									{NAV_ITEMS.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={cn(
												"text-sm font-medium transition-all duration-300",
												pathname === item.href ||
													(pathname.startsWith(item.href) && item.href !== "/")
													? "text-foreground"
													: "text-muted-foreground"
											)}
										>
											{item.label}
										</Link>
									))}
								</nav>
							)
						)}

						<div className="flex items-center gap-2">
							<CommandPalette />
							<Link
								href={USER.socials.github}
								target="_blank"
								rel="noreferrer noopener"
							>
								<Button
									variant="outline"
									size="sm"
									className="rounded-full size-8"
									aria-label="GitHub profilini ziyaret et"
								>
									<GitHub className="size-4" />
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</header>
	)
}
