"use client"

import Image from "next/image"
import Link from "next/link"

import profileImg from "@/img/profile.jpg"
import { Command } from "lucide-react"

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
						className="size-9 px-0 md:hidden"
					>
						<Command size={16} />
					</Button>
				</DrawerTrigger>
				<DrawerContent>
					<DrawerHeader>
						<DrawerTitle>
							<Link href="/" className="flex items-center gap-3 p-2 w-full">
								<figure>
									<Image
										src={profileImg.src}
										alt="Ömer Gülçiçek"
										width={40}
										height={40}
										quality={100}
										className="rounded-full size-10 object-cover border shadow-sm"
									/>
								</figure>
								<div className="flex flex-col items-start gap-0.5">
									<span className="font-semibold tracking-tight">
										Ömer Gülçiçek
									</span>
									<span className="text-neutral-400 text-sm font-normal">
										Senior Frontend Developer
									</span>
								</div>
							</Link>
						</DrawerTitle>
						<DrawerDescription>
							<nav className="flex flex-col gap-1 text-black text-left py-4">
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
