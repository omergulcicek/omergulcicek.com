"use client"

import Image from "next/image"

import { useMediaQuery } from "usehooks-ts"

import { USER } from "@/constants/user.constants"

import { TurkeyRounded } from "@/components/icons"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { JobSeekingBadge, Socials, VerifiedUser } from "@/shared"
import {
	RAMAZAN_DOODLE_SRC,
	SHOW_RAMAZAN_DOODLE,
	SHOW_TURKEY_DOODLE
} from "@/features/home/constants/doodle.constants"

export function Hero() {
	const isMobile = useMediaQuery("(max-width: 767px)")

	const imgSize = isMobile ? 112 : 160

	return (
		<section>
			<div className="flex items-center gap-4 md:gap-6">
				<figure className="relative flex items-center justify-center">
					<Image
						src={USER.avatar}
						alt={USER.displayName}
						width={imgSize}
						height={imgSize}
						quality={100}
						priority
						className="rounded-full ring-1 ring-border ring-offset-3 ring-offset-background select-none size-28 min-w-28 min-h-28 aspect-square md:size-40"
					/>

					{SHOW_RAMAZAN_DOODLE && (
						<Tooltip>
							<TooltipTrigger asChild>
								<Image
									src={RAMAZAN_DOODLE_SRC}
									alt="Ramazan ayı doodle"
									width={40}
									height={40}
									className="absolute -bottom-10 -right-6 size-20 animate-[ramazan-doodle_5s_ease-in-out_infinite]"
								/>
							</TooltipTrigger>
							<TooltipContent side="bottom">
								<p className="text-xs">Hoşgeldin Ya Şehr-i Ramazan</p>
							</TooltipContent>
						</Tooltip>
					)}

					{SHOW_TURKEY_DOODLE && (
						<TurkeyRounded className="absolute bottom-0 right-0 size-10 fill-primary rounded-full ring-1 ring-border ring-offset-1 ring-offset-background select-none aspect-square bg-white" />
					)}
				</figure>

				<div className="flex flex-col h-full justify-start gap-0.5">
					<VerifiedUser />

					<p className="text-muted-foreground text-base md:text-lg">
						{USER.jobTitle}
					</p>

					<Socials />
				</div>
			</div>
		</section>
	)
}
