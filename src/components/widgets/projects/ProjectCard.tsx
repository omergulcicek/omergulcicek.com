"use client"

import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"

export function ProjectCard({
	project,
	index
}: {
	project: {
		icon: React.ComponentType
		image: string
		title: string
		description: string
		link: string
		tags: string[]
		color: string
	}
	index: number
}) {
	return (
		<Link
			key={project.title}
			href={project.link}
			target="_blank"
			rel="noopener noreferrer"
			className="group"
		>
			<article className="flex flex-col gap-2">
				<figure
					className={cn(
						"h-72 w-full rounded-2xl overflow-hidden border flex items-center justify-center",
						project.color
					)}
				>
					<Image
						src={project.image}
						alt={project.title}
						className={cn(
							"object-cover group-hover:scale-150 transition-transform duration-700 ease-in-out rounded",
							index === 0 && "origin-top-left",
							index === 1 && "origin-top-left",
							index === 2 && "origin-top-right",
							index === 3 && "origin-top-left"
						)}
						width={320}
						height={320}
					/>
				</figure>
				<div className="flex flex-col text-base">
					<strong className="font-medium">{project.title}</strong>
					<p className="text-muted-foreground text-sm">{project.description}</p>
				</div>
			</article>
		</Link>
	)
}
