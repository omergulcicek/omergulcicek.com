"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

export function BookmarkCard({
	title,
	description,
	link,
	color,
	bgColor
}: {
	title: string
	description: string
	link: string
	color: string
	bgColor: string
}) {
	return (
		<Link
			href={`https://raindrop.io/omergulcicek/${link}`}
			target="_blank"
			rel="noopener noreferrer"
			className="flex flex-col gap-2"
		>
			<div
				className={cn(
					"rounded border border-muted p-4 min-h-36 transition-all duration-150 flex items-center justify-center",
					color,
					bgColor
				)}
			>
				<div
					className={cn("min-h-16 min-w-16 size-16 rounded-full", color)}
				></div>
			</div>

			<div>
				<strong className="text-lg font-medium text-primary">{title}</strong>
				<p className="text-sm text-muted-foreground">{description}</p>
			</div>
		</Link>
	)
}
