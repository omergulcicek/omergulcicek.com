"use client"

import Link from "next/link"

import { Languages } from "lucide-react"

import { dateFormat } from "@/lib/date-format"

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { TagsBadge } from "@/shared"
import type { BlogPostType } from "@/features/blog/types/blog.types"

export function BlogListPostRow({ post }: { post: BlogPostType }) {
	const dateLabel =
		String(post.metadata.createdAt).toLowerCase() === "soon"
			? "hazırlanıyor..."
			: dateFormat(post.metadata.createdAt, "DD/MM/YY")
	const isEn = (post.metadata.languages ?? []).includes("en")

	return (
		<div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 items-start">
			<div className="flex flex-col gap-0.5 shrink-0">
				<span className="text-muted-foreground tabular-nums text-sm pt-0.5">
					{dateLabel}
				</span>
				{isEn && (
					<Tooltip>
						<TooltipTrigger asChild>
							<span className="cursor-pointer flex items-center gap-1 text-muted-foreground text-xs">
								<Languages className="size-5 shrink-0 text-blue-600" />
								English
							</span>
						</TooltipTrigger>
						<TooltipContent>
							<p>Read in English</p>
						</TooltipContent>
					</Tooltip>
				)}
				{post.metadata.interactive && (
					<div>
						<Tooltip>
							<TooltipTrigger asChild>
								<span className="cursor-pointer text-xl leading-[22px]">
									✨
								</span>
							</TooltipTrigger>
							<TooltipContent>
								<p>Bu makale interaktiftir</p>
							</TooltipContent>
						</Tooltip>
					</div>
				)}
			</div>
			<div className="min-w-0">
				<h2 className="group text-lg leading-normal font-normal text-gray-900 dark:text-white transition-colors duration-200">
					<Link
						href={`/blog/${post.slug}`}
						className="cursor-pointer block group-hover:underline group-hover:underline-offset-4"
					>
						{post.metadata.title}
					</Link>
				</h2>
				<div className="flex flex-wrap items-center gap-2 mt-1">
					<TagsBadge tags={post.metadata.tags ?? []} />
				</div>
			</div>
		</div>
	)
}
