"use client"

import Link from "next/link"

import {
	filterPostsByTag,
	getUniqueSortedTags,
	getValidatedSortOption,
	sortPosts
} from "@/helpers/blog-helpers"
import { dateFormat, groupPostsByYear } from "@/helpers/date-format"
import { useQueryState } from "nuqs"

import type { BlogPostType } from "@/types/blog.type"
import type { SortOptionType } from "@/types/filter-sort-type"

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
		return (
			<div className="flex flex-col gap-1">
				<h2 className="text-lg leading-normal font-normal text-gray-900 dark:text-white group-hover:text-black transition-colors duration-200">
					<Link
						href={`/blog/${post.slug}`}
						className="group relative overflow-hidden flex items-start"
					>
						{post.metadata.title}
					</Link>
				</h2>
				<div className="flex flex-col md:flex-row items-start gap-2">
					<span className="text-xs text-italic font-medium leading-[22px] text-muted-foreground tracking-wide whitespace-nowrap">
						{String(post.metadata.createdAt).toLowerCase() === "soon"
							? "hazırlanıyor..."
							: dateFormat(post.metadata.createdAt)}
					</span>
					<span className="text-black/20 leading-[22px] hidden md:inline-flex">
						•
					</span>
					<TagsBadge tags={post.metadata.tags as string[]} />
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
								className="space-y-6 flex flex-col gap-1 items-start relative min-h-20"
							>
								<span className="text-2xl absolute font-medium top-5 -left-12 -rotate-90 text-gray-300 select-none hidden md:flex">
									{year}
								</span>
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
