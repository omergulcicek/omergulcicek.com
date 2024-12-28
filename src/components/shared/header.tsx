"use client"

import { cn } from "@/utils"
import { Command } from "lucide-react"

import { Container } from "@/shared/container"
import { NavMenu } from "@/widgets/nav-menu"
import { Button } from "@/ui/button"
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger
} from "@/ui/drawer"

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

				<Drawer>
					<DrawerTrigger asChild>
						<Button variant="ghost" size="sm" className="size-9 px-0 md:hidden">
							<Command size={16} />
						</Button>
					</DrawerTrigger>
					<DrawerContent>
						<DrawerHeader>
							<DrawerTitle>Are you absolutely sure?</DrawerTitle>
							<DrawerDescription>
								This action cannot be undone.
							</DrawerDescription>
						</DrawerHeader>
						<DrawerFooter>
							<Button>Submit</Button>
							<DrawerClose>X</DrawerClose>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			</header>
		</>
	)
}
