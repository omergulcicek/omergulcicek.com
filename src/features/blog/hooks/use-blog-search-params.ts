import {
	parseAsArrayOf,
	parseAsString,
	parseAsStringLiteral,
	useQueryState,
	useQueryStates
} from "nuqs"

import type { BlogCategory, BlogSort } from "@/features/blog/types/blog.types"

const blogCategoryParser = parseAsStringLiteral(["technical", "personal"])

const blogSortParser = parseAsStringLiteral(["newest", "oldest"]).withDefault(
	"newest"
)

const blogTagsParser = parseAsArrayOf(parseAsString).withDefault([])

export const blogSearchParamsParsers = {
	category: blogCategoryParser,
	tags: blogTagsParser,
	sort: blogSortParser
}

export function useBlogCategoryParam() {
	return useQueryState("category", blogCategoryParser)
}

export function useBlogTagsParam() {
	return useQueryState("tags", blogTagsParser)
}

export function useBlogSortParam() {
	return useQueryState("sort", blogSortParser)
}

export function useBlogSearchParams() {
	const [params, setParams] = useQueryStates(blogSearchParamsParsers)
	const tags = params.tags ?? []

	return {
		category: params.category as BlogCategory | null,
		tags,
		sort: params.sort as BlogSort,
		setCategory: (category: BlogCategory | null) =>
			setParams({ category }),
		setTags: (tags: string[]) => setParams({ tags }),
		setSort: (sort: BlogSort) => setParams({ sort }),
		toggleTag: (tag: string) => {
			const nextTags = tags.includes(tag)
				? tags.filter((value) => value !== tag)
				: [...tags, tag]

			setParams({ tags: nextTags })
		}
	}
}
