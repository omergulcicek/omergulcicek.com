"use client"

import Link from "next/link"

import { Command } from "lucide-react"

import { Me } from "@/widgets/me"
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

import { mobileMenuItems } from "@/data/mobile-menu-items-data"

export const NavMenuMobile = () => {
	return (
		<>
			<Drawer>
				<DrawerTrigger asChild>
					<Button
						variant="ghost"
						size="sm"
						aria-label="Mobil menüyü aç"
						className="size-8 px-0 md:hidden"
					>
						<Command size={16} />
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>
							<Me />
						</DrawerTitle>
						<DrawerDescription>
							<nav className="flex flex-col gap-1 text-black dark:text-white text-left py-4">
								{mobileMenuItems.map((item, index) => (
									<Link key={index} href={item.href} passHref>
										<DrawerClose asChild>
											<span className="flex items-center gap-2 p-2">
												<item.icon size={16} />
												<span>{item.title}</span>
											</span>
										</DrawerClose>
									</Link>
								))}
							</nav>
						</DrawerDescription>
					</DrawerHeader>
					<DrawerFooter></DrawerFooter>
				</DrawerContent>
			</Drawer>
		</>
	)
}
