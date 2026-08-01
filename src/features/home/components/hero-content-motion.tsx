"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

import {
	MOTION_ENTER_OFFSET_Y,
	MOTION_SOFT_FADE,
	MOTION_SPRING_SNAP,
	MOTION_STAGGER_DELAY
} from "@/lib/motion/motion.constants"
import { useMotionEnvironment } from "@/lib/motion/use-motion-environment"

type HeroContentMotionProps = {
	titleRow: ReactNode
	socialLinks: ReactNode
	body: ReactNode
}

export function HeroContentMotion({
	titleRow,
	socialLinks,
	body
}: HeroContentMotionProps) {
	const { shouldUseSoftMotion, supportsViewTransitions } =
		useMotionEnvironment()

	const containerTransition = shouldUseSoftMotion
		? { ...MOTION_SOFT_FADE }
		: { staggerChildren: MOTION_STAGGER_DELAY, delayChildren: MOTION_STAGGER_DELAY }

	const itemHidden = {
		opacity: 0,
		y: shouldUseSoftMotion ? 0 : MOTION_ENTER_OFFSET_Y
	}

	const itemVisible = {
		opacity: 1,
		y: 0,
		transition: shouldUseSoftMotion ? MOTION_SOFT_FADE : MOTION_SPRING_SNAP
	}

	return (
		<motion.div
			data-vt-enabled={supportsViewTransitions}
			initial="hidden"
			animate="visible"
			variants={{
				hidden: shouldUseSoftMotion ? { opacity: 0 } : {},
				visible: {
					opacity: 1,
					transition: containerTransition
				}
			}}
			className="flex flex-col gap-4"
		>
			<div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<motion.div
					variants={{
						hidden: itemHidden,
						visible: itemVisible
					}}
					className="vt-hero-content-title"
				>
					{titleRow}
				</motion.div>
				<motion.div
					variants={{
						hidden: itemHidden,
						visible: itemVisible
					}}
					className="vt-hero-content-social sm:shrink-0"
				>
					{socialLinks}
				</motion.div>
			</div>
			<motion.div
				variants={{
					hidden: itemHidden,
					visible: itemVisible
				}}
			>
				{body}
			</motion.div>
		</motion.div>
	)
}
