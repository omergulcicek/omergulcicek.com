"use client"

import Image from "next/image"
import Link from "next/link"

import { motion } from "framer-motion"

import { useMotionEnvironment } from "@/lib/motion-environment"
import { cn } from "@/lib/utils"

const WAVE_STAGGER_SEC = 0.16

function getEntranceWave(index: number) {
	if (index === 0) return 0
	return Math.ceil(index / 2)
}

export function ProjectCard({
	project,
	index
}: {
	project: {
		image: string
		title: string
		description: string
		link: string
		tags?: string[]
		color: string
		isCompleted?: boolean
	}
	index: number
}) {
	const { shouldUseSoftMotion } = useMotionEnvironment()
	const delay = getEntranceWave(index) * WAVE_STAGGER_SEC

	return (
		<Link
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			className="group"
		>
			<motion.article
				className="flex flex-col gap-2 motion-gpu"
				initial={
					shouldUseSoftMotion ? { opacity: 1, y: 0 } : { opacity: 0.2, y: 32 }
				}
				animate={{ opacity: 1, y: 0 }}
				transition={
					shouldUseSoftMotion
						? { duration: 0 }
						: {
								duration: 0.48,
								delay,
								ease: [0.22, 1, 0.36, 1]
							}
				}
			>
				<figure
					className={cn(
						"h-32 md:h-72 w-full rounded-2xl overflow-hidden border flex items-center justify-center",
						project.color
					)}
				>
					<Image
						src={project.image}
						alt={project.title}
						loading="lazy"
						sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
						className={cn(
							"object-cover group-hover:scale-125 transition-transform duration-700 ease-in-out rounded",
							index === 0 && "origin-top",
							index === 1 && "origin-top-left",
							index === 2 && "origin-bottom-left",
							index === 3 && "origin-left",
							index === 4 && "origin-top-right",
							index === 5 && "origin-top",
							index === 6 && "origin-top-right",
							index === 7 && "origin-bottom"
						)}
						width={320}
						height={320}
					/>
				</figure>
				<div className="flex flex-col text-base">
					<strong className="font-medium">{project.title}</strong>
					<p className="text-muted-foreground text-sm">{project.description}</p>
				</div>
			</motion.article>
		</Link>
	)
}
