"use client"

import { type ReactNode } from "react"

import { motion } from "framer-motion"

import { useMotionEnvironment } from "@/lib/motion-environment"

const listVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.11,
			delayChildren: 0.04
		}
	}
}

const itemVariants = {
	hidden: { opacity: 0, x: 22 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			type: "spring" as const,
			stiffness: 320,
			damping: 32,
			mass: 0.85
		}
	}
}

export function BlogPostStagger({
	header,
	title,
	info,
	prose
}: {
	header: ReactNode
	title: ReactNode
	info: ReactNode
	prose: ReactNode
}) {
	const { shouldUseSoftMotion } = useMotionEnvironment()

	if (shouldUseSoftMotion) {
		return (
			<div className="flex w-full flex-col gap-4">
				{header}
				{title}
				{info}
				{prose}
			</div>
		)
	}

	return (
		<motion.div
			className="flex w-full flex-col gap-4"
			initial="hidden"
			animate="visible"
			variants={listVariants}
		>
			<motion.div className="motion-gpu w-full" variants={itemVariants}>
				{header}
			</motion.div>
			<motion.div className="motion-gpu w-full" variants={itemVariants}>
				{title}
			</motion.div>
			<motion.div className="motion-gpu w-full" variants={itemVariants}>
				{info}
			</motion.div>
			<motion.div className="motion-gpu w-full" variants={itemVariants}>
				{prose}
			</motion.div>
		</motion.div>
	)
}
