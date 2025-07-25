"use client"

import Image from "next/image"

import { useMediaQuery } from "usehooks-ts"

import { USER } from "@/constants/user"

import { cn } from "@/lib/utils"

import { Socials, VerifiedUser } from "@/widgets"

export function Hero() {
	const isDesktop = useMediaQuery("(min-width: 768px)")
	const imgSize = isDesktop ? 160 : 112

	return (
		<section>
			<div className="flex items-end gap-6">
				<figure
					className={cn(
						"rounded-full ring-1 ring-border ring-offset-2 ring-offset-background select-none relative",
						isDesktop ? "size-40" : "size-28"
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
