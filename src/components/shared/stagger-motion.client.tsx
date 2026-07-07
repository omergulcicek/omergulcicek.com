"use client"

import { motion, type HTMLMotionProps } from "motion/react"
import { forwardRef } from "react"

import {
	MOTION_ENTER_OFFSET_Y,
	MOTION_SOFT_FADE,
	MOTION_SPRING_SNAP,
	MOTION_STAGGER_DELAY
} from "@/lib/motion/motion.constants"
import { useMotionEnvironment } from "@/lib/motion/use-motion-environment"

export const StaggerContainer = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
	({ children, ...props }, ref) => {
		const { shouldUseSoftMotion, supportsViewTransitions } =
			useMotionEnvironment()

		const containerTransition = shouldUseSoftMotion
			? { ...MOTION_SOFT_FADE }
			: {
					staggerChildren: MOTION_STAGGER_DELAY,
					delayChildren: MOTION_STAGGER_DELAY
				}

		return (
			<motion.div
				ref={ref}
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
				{...props}
			>
				{children}
			</motion.div>
		)
	}
)
StaggerContainer.displayName = "StaggerContainer"

export const StaggerItem = forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
	({ children, ...props }, ref) => {
		const { shouldUseSoftMotion } = useMotionEnvironment()

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
				ref={ref}
				variants={{
					hidden: itemHidden,
					visible: itemVisible
				}}
				{...props}
			>
				{children}
			</motion.div>
		)
	}
)
StaggerItem.displayName = "StaggerItem"
