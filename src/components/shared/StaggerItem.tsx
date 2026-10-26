"use client"

import type { ComponentProps } from "react"
import { m, type HTMLMotionProps } from "motion/react"

import {
	MOTION_ENTER_BLUR,
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
		y: shouldUseSoftMotion ? 0 : MOTION_ENTER_OFFSET_Y,
		filter: shouldUseSoftMotion ? "none" : MOTION_ENTER_BLUR
	}

	const itemVisible = {
		opacity: 1,
		y: 0,
		filter: shouldUseSoftMotion ? "none" : "blur(0px)",
		transition: shouldUseSoftMotion ? MOTION_SOFT_FADE : MOTION_SPRING_SNAP,
		// Any filter but none makes this a containing block, which pins
		// position: fixed children (the blog TOC minimap) to the item.
		transitionEnd: { filter: "none" }
	}

	return (
		<m.div
			variants={{
				hidden: itemHidden,
				visible: itemVisible
			}}
			{...props}
		>
			{children}
		</m.div>
	)
}
