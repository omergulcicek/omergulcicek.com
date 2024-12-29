"use client"

import { cn } from "@/utils"

import { Container } from "@/shared/container"
import { NavMenu } from "@/widgets/nav-menu"
import { NavMenuMobile } from "@/widgets/nav-menu-mobile"

export default function Header({
	className
}: {
	className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<>
			<header
				className={cn(
					"sticky top-0 flex items-center h-12 md:h-24 w-full z-20 border-b md:border-b-0 bg-white/95 px-4",
					className
				)}
			>
				<Container className="hidden md:flex flex-row items-center justify-center gap-10 z-20">
					<NavMenu />
				</Container>

				<NavMenuMobile />
			</header>
		</>
	)
}
