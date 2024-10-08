"use client"

import { cn } from "@/utils"

import Container from "@/shared/container"
import { NavMenu } from "@/widgets/nav-menu"

export default function Header({
	className
}: {
	className?: string
} & React.HTMLAttributes<HTMLDivElement>) {
	return (
		<header className={cn("flex md:flex h-24 w-full z-20", className)}>
			<Container className="flex-row items-center justify-center gap-10 z-20">
				<NavMenu />
			</Container>
		</header>
	)
}
