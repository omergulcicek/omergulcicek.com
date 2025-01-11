"use client"

import Link from "next/link"

import { Avatar, AvatarFallback, AvatarImage } from "@/ui/avatar"

import profileImg from "@/img/profile.jpg"

export const Me = () => {
	return (
		<>
			<Link href="/" className="flex items-center gap-3 p-2">
				<Avatar>
					<AvatarImage className="object-cover" src={profileImg.src} />
					<AvatarFallback>ÖG</AvatarFallback>
				</Avatar>

				<div className="flex flex-col items-start gap-0.5">
					<span className="font-semibold tracking-tight">Ömer Gülçiçek</span>
					<span className="text-neutral-400 text-sm font-normal">
						Senior Frontend Developer
					</span>
				</div>
			</Link>
		</>
	)
}
