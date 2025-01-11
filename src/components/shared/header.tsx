"use client"

import { cn } from "@/utils"

import { Container } from "@/shared/container"
import { NavMenu } from "@/widgets/nav-menu"
import { NavMenuMobile } from "@/widgets/nav-menu-mobile"
import { ThemeToggleButton } from "@/widgets/theme-toggle-button"

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
				<Container className="max-w-4xl">
					<section className="flex items-center justify-between h-14">
						<NavMenu />
						<NavMenuMobile />

						<ThemeToggleButton />
					</section>
				</Container>
			</header>
		</>
	)
}
