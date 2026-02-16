"use client"

import { useQueryState } from "nuqs"

import { groupPostsByYear } from "@/lib/date-format"

import { FilterSort } from "@/features/blog/components/filter-sort"
import {
	filterPostsByTag,
	getUniqueSortedTags,
	getValidatedSortOption,
	sortPosts
} from "@/features/blog/helpers/blog-helpers"
import type { BlogPostType } from "@/features/blog/types/blog.types"
import type { SortOptionType } from "@/features/blog/types/filter-sort.types"

import { BlogListPostRow } from "./BlogListPostRow"

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

	return (
		<>
			<FilterSort tags={allTags} currentTag={tag} />
			{sortParam === "default" && (
				<div className="space-y-6 mt-10 relative">
					{futurePosts.length > 0 && (
						<div className="space-y-6 flex flex-col gap-1 items-start relative min-h-20">
							<div className="flex flex-col gap-6 items-start">
								{futurePosts.map((post) => (
									<BlogListPostRow key={post.slug} post={post} />
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
								<div className="flex flex-col gap-6 items-start">
									{posts.map((post) => (
										<BlogListPostRow key={post.slug} post={post} />
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
							<BlogListPostRow post={post} />
						</div>
					))}
				</div>
			)}
		</>
	)
}
