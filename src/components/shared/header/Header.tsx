"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { Menu } from "lucide-react"
import { useMediaQuery } from "usehooks-ts"

import { USER } from "@/constants/user.constants"

import { cn } from "@/lib/utils"

import { CommandPalette, Container, ThemeToggle } from "@/shared"
import {
	Button,
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
	Separator
} from "@/ui"
import type { BlogPostType } from "@/features/blog/types/blog.types"

import { GitHub } from "@/icons"
import { navItemsData, type NavItem } from "@/data"

interface HeaderProps {
	posts: BlogPostType[]
}

export function Header({ posts }: HeaderProps) {
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
		<>
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
			>
				Ana içeriğe geç
			</a>
			<header
				role="banner"
				className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
			>
				<Container className="py-4 md:py-4 max-w-5xl">
					<div className="flex items-center justify-between">
						{isLoading ? (
							<div className="hidden md:flex items-center gap-4 py-2">
								{Array.from({ length: 4 }).map((_, i) => (
									<div
										key={i}
										className="h-4 w-18 animate-pulse rounded-sm bg-muted"
									/>
								))}
							</div>
						) : isDesktop ? (
							<>
								<nav
									role="navigation"
									aria-label="Ana navigasyon"
									className="flex items-center"
								>
									{navItemsData.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={cn(
												"cursor-pointer inline-flex items-center justify-center whitespace-nowrap text-sm font-medium rounded-md transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 px-3 h-8",
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
							</>
						) : (
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
							<div className="flex items-center gap-1.5 h-4">
								<CommandPalette posts={posts} />
								<Separator orientation="vertical" className="h-2 ml-2" />
								<Link
									href={USER.socials.github}
									target="_blank"
									rel="noreferrer noopener"
								>
									<Button
										variant="ghost"
										size="sm"
										aria-label="GitHub profilini ziyaret et"
									>
										<GitHub className="size-4" />
									</Button>
								</Link>
								<Separator orientation="vertical" className="h-2" />
								<ThemeToggle />
							</div>
						</div>
					</div>
				</Container>
			</header>
		</>
	)
}
