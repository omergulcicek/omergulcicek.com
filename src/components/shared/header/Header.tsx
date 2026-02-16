"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { useMediaQuery } from "usehooks-ts"

import { USER } from "@/constants/user.constants"

import { CommandPalette, Container, ThemeToggle } from "@/shared"
import { Button, Separator } from "@/ui"
import type { BlogPostType } from "@/features/blog/types/blog.types"

import { GitHub } from "@/icons"

import { HeaderNavDesktop } from "./HeaderNavDesktop"
import { HeaderNavDrawer } from "./HeaderNavDrawer"
import { HeaderSkeleton } from "./HeaderSkeleton"

interface HeaderProps {
	posts: BlogPostType[]
}

export function Header({ posts }: HeaderProps) {
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
							<HeaderSkeleton />
						) : isDesktop ? (
							<HeaderNavDesktop />
						) : (
							<HeaderNavDrawer />
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
