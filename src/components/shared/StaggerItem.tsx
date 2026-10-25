"use client"

import type { ComponentProps } from "react"
import { motion, type HTMLMotionProps } from "motion/react"

import {
	MOTION_ENTER_OFFSET_Y,
	MOTION_SOFT_FADE,
	MOTION_SPRING_SNAP
} from "@/lib/motion/motion.constants"
import { useMotionEnvironment } from "@/lib/motion/use-motion-environment"

type StaggerItemProps = HTMLMotionProps<"div"> &
	Pick<ComponentProps<"div">, "ref">

export function StaggerItem({ children, ...props }: StaggerItemProps) {
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
