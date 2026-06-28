"use client"

import { slugify } from "@/helpers/slugify"
import { motion } from "framer-motion"

import { useMotionEnvironment } from "@/lib/motion-environment"
import { cn } from "@/lib/utils"

import { Heading } from "@/ui"

const easeOut = [0.22, 1, 0.36, 1] as const

export function Section({
	title,
	type = "h1",
	titleAddon,
	className,
	children
}: {
	title?: string
	type?: string
	titleAddon?: React.ReactNode
	className?: string
	children: React.ReactNode
}) {
	const { shouldUseSoftMotion } = useMotionEnvironment()

	return (
		<section
			className={cn("flex flex-col justify-center gap-4 min-h-28", className)}
		>
			{title && (
				<div className="flex items-center justify-between gap-3">
					<Heading
						id={slugify(title)}
						as={type as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
					>
						{title}
					</Heading>

					{titleAddon && <div>{titleAddon}</div>}
				</div>
			)}

			{children}
		</section>
	)
}
