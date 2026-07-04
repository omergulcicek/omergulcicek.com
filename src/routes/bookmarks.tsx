import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import { BookmarksPage } from "@/features/bookmarks"
import { bookmarksSearchParamsParsers } from "@/features/bookmarks/hooks/use-bookmarks-search-params"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.bookmarks

export const Route = createFileRoute("/bookmarks")({
	validateSearch: createStandardSchemaV1(bookmarksSearchParamsParsers, {
		partialOutput: true
	}),
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: BookmarksPage
})
