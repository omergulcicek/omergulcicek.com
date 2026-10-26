"use client"

import type { ComponentProps } from "react"
import { m, type HTMLMotionProps } from "motion/react"

import {
	MOTION_SOFT_FADE,
	MOTION_STAGGER_DELAY
} from "@/lib/motion/motion.constants"
import { useMotionEnvironment } from "@/lib/motion/use-motion-environment"
import { useSkipInitialMotion } from "@/lib/motion/use-skip-initial-motion"

type StaggerProps = HTMLMotionProps<"div"> & Pick<ComponentProps<"div">, "ref">

export function StaggerContainer({ children, ...props }: StaggerProps) {
	const { shouldUseSoftMotion, supportsViewTransitions } =
		useMotionEnvironment()
	const skipInitialMotion = useSkipInitialMotion()

	const containerTransition = shouldUseSoftMotion
		? { ...MOTION_SOFT_FADE }
		: {
				staggerChildren: MOTION_STAGGER_DELAY,
				delayChildren: MOTION_STAGGER_DELAY
			}

	return (
		<m.div
			data-vt-enabled={supportsViewTransitions}
			initial={skipInitialMotion ? false : "hidden"}
			animate="visible"
			variants={{
				hidden: shouldUseSoftMotion ? { opacity: 0 } : {},
				visible: {
					opacity: 1,
					transition: containerTransition
				}
			}}
			{...props}
		>
			{children}
		</m.div>
	)
}
