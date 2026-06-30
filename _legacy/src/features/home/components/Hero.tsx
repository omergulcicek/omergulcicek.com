"use client"

import Image from "next/image"

import { motion } from "framer-motion"

import { USER } from "@/constants/user.constants"

import { useMotionEnvironment } from "@/lib/motion-environment"

import { TurkeyRounded } from "@/components/icons"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { Socials } from "@/shared"
import {
	RAMAZAN_DOODLE_SRC,
	SHOW_RAMAZAN_DOODLE,
	SHOW_TURKEY_DOODLE
} from "@/features/home/constants/doodle.constants"

const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
	const { shouldUseSoftMotion, supportsViewTransitions } =
		useMotionEnvironment()

	const heroContainerTransition = shouldUseSoftMotion
		? { duration: 0.2, ease: easeOut }
		: { staggerChildren: 0.07, delayChildren: 0.07 }

	const heroSoftTransition = { duration: 0.2, ease: easeOut }
	const heroSpringTransition = {
		type: "spring" as const,
		stiffness: 260,
		damping: 30,
		mass: 1
	}

	return (
		<section>
			<div className="flex flex-col gap-4">
				<figure
					data-vt-enabled={supportsViewTransitions}
					className="w-full aspect-square group relative overflow-hidden rounded-xl lg:rounded-3xl ring-1 ring-border ring-offset-3 ring-offset-background above-fold-native-enter above-fold-native-enter-hero motion-gpu vt-hero-image"
				>
					<Image
						src={USER.avatar}
						alt={USER.displayName}
						fill
						quality={100}
						priority
						sizes="(max-width: 1023px) 100vw, 38vw"
						className="object-cover object-bottom select-none"
					/>

					{SHOW_RAMAZAN_DOODLE && (
						<Tooltip>
							<TooltipTrigger asChild>
								<Image
									src={RAMAZAN_DOODLE_SRC}
									alt="Ramazan ayı doodle"
									width={80}
									height={80}
									className="absolute right-2 bottom-2 z-10 size-16 sm:size-20 animate-[ramazan-doodle_5s_ease-in-out_infinite] md:right-3 md:bottom-3"
								/>
							</TooltipTrigger>
							<TooltipContent side="bottom">
								<p className="text-xs">Hoşgeldin Ya Şehr-i Ramazan</p>
							</TooltipContent>
						</Tooltip>
					)}

					{SHOW_TURKEY_DOODLE && (
						<TurkeyRounded className="absolute right-3 bottom-3 z-10 size-10 fill-primary rounded-full ring-1 ring-border ring-offset-1 ring-offset-background select-none aspect-square bg-white" />
					)}
				</figure>

				<motion.div
					data-vt-enabled={supportsViewTransitions}
					initial="hidden"
					animate="visible"
					variants={{
						hidden: shouldUseSoftMotion ? { opacity: 0 } : {},
						visible: {
							opacity: 1,
							transition: heroContainerTransition
						}
					}}
					className="flex items-center justify-between gap-2 max-sm:flex-col"
				>
					<motion.div
						variants={{
							hidden: {
								opacity: 0,
								y: shouldUseSoftMotion ? 0 : 12
							},
							visible: {
								opacity: 1,
								y: 0,
								transition: shouldUseSoftMotion
									? heroSoftTransition
									: heroSpringTransition
							}
						}}
						className="flex items-center gap-3 motion-gpu vt-hero-content-title"
					>
						<h1 className="text-xl font-semibold">{USER.displayName}</h1>
						<p className="text-muted-foreground text-lg">{USER.jobTitle}</p>
					</motion.div>
					<motion.div
						variants={{
							hidden: {
								opacity: 0,
								y: shouldUseSoftMotion ? 0 : 12
							},
							visible: {
								opacity: 1,
								y: 0,
								transition: shouldUseSoftMotion
									? heroSoftTransition
									: heroSpringTransition
							}
						}}
						className="motion-gpu vt-hero-content-social"
					>
						<Socials className="mt-0 sm:-mr-2 sm:shrink-0" />
					</motion.div>
				</motion.div>
			</div>
		</section>
	)
}
