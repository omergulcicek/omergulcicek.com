import { useEffect, useRef } from "react"
import {
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

const blogTagParser = parseAsString

const blogQueryParser = parseAsString

const blogFilterHistory = { history: "push" as const }

export const blogSearchParamsParsers = {
	category: blogCategoryParser,
	tag: blogTagParser,
	sort: blogSortParser,
	q: blogQueryParser
}

export function useBlogCategoryParam() {
	return useQueryState("category", blogCategoryParser)
}

export function useBlogTagParam() {
	return useQueryState("tag", blogTagParser)
}

export function useBlogSortParam() {
	return useQueryState("sort", blogSortParser)
}

const blogSubFilterReset = { history: "replace" as const }

export function useBlogSearchParams() {
	const [params, setParams] = useQueryStates(blogSearchParamsParsers)
	const prevCategoryRef = useRef<BlogCategory | null | undefined>(undefined)
	const tag = params.tag ?? null
	const query = params.q ?? null
	const category = (params.category ?? null) as BlogCategory | null

	const clearSubFilters = () =>
		setParams({ tag: null, sort: null }, blogSubFilterReset)

	useEffect(() => {
		if (prevCategoryRef.current === undefined) {
			prevCategoryRef.current = category
			return
		}

		if (prevCategoryRef.current === category) {
			return
		}

		prevCategoryRef.current = category

		if (tag === null && params.sort === "newest") {
			return
		}

		void setParams({ tag: null, sort: null }, blogSubFilterReset)
	}, [category, params.sort, setParams, tag])

	return {
		category,
		tag,
		sort: params.sort as BlogSort,
		query,
		setCategory: (nextCategory: BlogCategory | null) => {
			if (nextCategory === category) {
				return
			}

			setParams(
				{ category: nextCategory, tag: null, sort: null },
				blogFilterHistory
			)
		},
		setTag: (nextTag: string | null) =>
			setParams({ tag: nextTag }, blogFilterHistory),
		setSort: (nextSort: BlogSort) =>
			setParams({ sort: nextSort }, blogFilterHistory),
		setQuery: (q: string | null) => setParams({ q }),
		selectTag: (nextTag: string) => {
			setParams({ tag: tag === nextTag ? null : nextTag }, blogFilterHistory)
		},
		clearSubFilters,
		clearFilters: () =>
			setParams({
				category: null,
				tag: null,
				q: null,
				sort: null
			})
	}
}
