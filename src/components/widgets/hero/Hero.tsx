"use client"

import Image from "next/image"

import { useMediaQuery } from "usehooks-ts"

import { USER } from "@/constants/user"

import { TurkeyRounded } from "@/components/icons"
import { Socials, VerifiedUser } from "@/widgets"

export function Hero() {
	const isMobile = useMediaQuery("(max-width: 767px)")

	const imgSize = isMobile ? 112 : 160

	return (
		<section>
			<div className="flex items-end gap-4 md:gap-6">
				<figure className="relative flex items-center justify-center">
					<Image
						src={USER.avatar}
						alt={USER.displayName}
						width={imgSize}
						height={imgSize}
						quality={100}
						priority
						className="rounded-full ring-1 ring-border ring-offset-3 ring-offset-background select-none size-28 aspect-square md:size-40"
					/>

					<TurkeyRounded className="absolute bottom-0 right-0 size-10 fill-primary rounded-full ring-1 ring-border ring-offset-1 ring-offset-background select-none aspect-square bg-white" />
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
