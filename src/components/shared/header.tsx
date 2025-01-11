"use client"

import { Container } from "@/shared/container"
import { GithubButton } from "@/widgets/github-button"
import { NavMenu } from "@/widgets/nav-menu"
import { NavMenuMobile } from "@/widgets/nav-menu-mobile"
import { ThemeToggleButton } from "@/widgets/theme-toggle-button"

import { cn } from "@/utils"

export default function Header({
	className
}: {
	className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<header
				className={cn(
					"sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
					className
				)}
			>
				<Container>
					<section className="flex items-center justify-between h-14">
						<NavMenu />
						<NavMenuMobile />

						<div className="flex items-center gap-0.5">
							<ThemeToggleButton />
							<GithubButton />
						</div>
					</section>
				</Container>
			</header>
		</>
	)
}
