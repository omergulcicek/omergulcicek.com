"use client"

import Link from "next/link"

import {
	filterPostsByTag,
	getUniqueSortedTags,
	getValidatedSortOption,
	sortPosts
} from "@/helpers/blog-helpers"
import { dateFormat, groupPostsByYear } from "@/helpers/date-format"
import { Languages } from "lucide-react"
import { useQueryState } from "nuqs"

import type { BlogPostType } from "@/types/blog.type"
import type { SortOptionType } from "@/types/filter-sort-type"

import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { FilterSort, TagsBadge } from "@/widgets"

interface BlogListProps {
	allPosts: BlogPostType[]
	futurePosts?: BlogPostType[]
}

export function BlogList({ allPosts, futurePosts = [] }: BlogListProps) {
	const [sortRaw] = useQueryState("sort")
	const [tag] = useQueryState("tag")

	const sortParam: SortOptionType = getValidatedSortOption(sortRaw || undefined)

	const filtered = filterPostsByTag(allPosts, tag || undefined)
	const sorted = sortPosts(filtered, sortParam)
	const postsByYear = groupPostsByYear(sorted)

	const allTags = getUniqueSortedTags(allPosts)

	function PostRow({ post }: { post: BlogPostType }) {
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
						<TagsBadge tags={post.metadata.tags as string[]} />
					</div>
				</div>
			</div>
		)
	}

	return (
		<>
			<FilterSort tags={allTags} currentTag={tag} />
			{sortParam === "default" && (
				<div className="space-y-6 mt-10 relative">
					{futurePosts.length > 0 && (
						<div className="space-y-6 flex flex-col gap-1 items-start relative min-h-20">
							<div className="flex flex-col gap-6 items-start">
								{futurePosts.map((post) => (
									<PostRow key={post.slug} post={post} />
								))}
							</div>
						</div>
					)}
					{Object.entries(postsByYear)
						.reverse()
						.map(([year, posts]) => (
							<div
								key={year}
								className="my-5 flex flex-col gap-4 items-stretch"
							>
								{/* <div className="flex items-center gap-3">
									<Separator className="flex-1" />
									<span className="text-lg text-muted-foreground shrink-0">
										{year}
									</span>
									<Separator className="flex-1" />
								</div> */}
								<div className="flex flex-col gap-6 items-start">
									{posts.map((post) => (
										<PostRow key={post.slug} post={post} />
									))}
								</div>
							</div>
						))}
				</div>
			)}
			{sortParam !== "default" && (
				<div className="flex flex-col gap-6 items-start mt-10">
					{sorted.map((post) => (
						<div key={post.slug} className="flex flex-col gap-6 items-start">
							<PostRow post={post} />
						</div>
					))}
				</div>
			)}
		</>
	)
}
