"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { useMediaQuery } from "usehooks-ts"

import { USER } from "@/constants/user"

import { cn } from "@/lib/utils"

import { Socials, VerifiedUser } from "@/widgets"

export function Hero() {
	const [mounted, setMounted] = useState(false)
	const isMobile = useMediaQuery("(max-width: 767px)")

	useEffect(() => {
		setMounted(true)
	}, [])

	const imgSize = mounted && isMobile ? 112 : 160

	return (
		<section>
			<div className="flex items-end gap-6">
				<figure
					className={cn(
						"rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none relative",
						mounted && isMobile ? "size-28" : "size-40"
					)}
				>
					<Image
						src={USER.avatar}
						alt={USER.displayName}
						width={imgSize}
						height={imgSize}
						quality={100}
						priority
					/>
				</figure>

				<div className="flex flex-col gap-0.5">
					<VerifiedUser />

					<p className="text-base md:text-lg text-muted-foreground">
						{USER.jobTitle}
					</p>

					<Socials />
				</div>
			</div>
		</section>
	)
}
