import {
	parseAsBoolean,
	parseAsString,
	parseAsStringLiteral,
	useQueryStates
} from "nuqs"

import type { BlogSort } from "@/features/blog/types/blog.types"

const blogSortParser = parseAsStringLiteral(["newest", "oldest"]).withDefault(
	"newest"
)

const blogFilterHistory = { history: "push" as const }

const blogSubFilterReset = { history: "replace" as const }

export const blogSearchParamsParsers = {
	tag: parseAsString,
	featured: parseAsBoolean.withDefault(false),
	sort: blogSortParser,
	q: parseAsString
}

/** Legacy `?category=` links on /blog are redirected to the matching section. */
export const blogIndexSearchParamsParsers = {
	...blogSearchParamsParsers,
	category: parseAsStringLiteral(["technical", "personal"])
}

export function useBlogSearchParams() {
	const [params, setParams] = useQueryStates(blogSearchParamsParsers)

	return {
		tag: params.tag ?? null,
		featured: params.featured,
		sort: params.sort,
		query: params.q ?? null,
		setSort: (nextSort: BlogSort) =>
			setParams({ sort: nextSort }, blogFilterHistory),
		selectTag: (nextTag: string) => {
			setParams(
				{ tag: params.tag === nextTag ? null : nextTag, featured: null },
				blogFilterHistory
			)
		},
		toggleFeatured: () => {
			setParams(
				{ featured: params.featured ? null : true, tag: null },
				blogFilterHistory
			)
		},
		clearTag: () => setParams({ tag: null }, blogSubFilterReset),
		clearFilters: () =>
			setParams({ tag: null, featured: null, q: null, sort: null })
	}
}
