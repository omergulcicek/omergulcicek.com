import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import { buildStaticPageHead } from "@/helpers/seo/build-page-head"

import { BookmarksPage } from "@/features/bookmarks/components/BookmarksPage"
import { bookmarksSearchParamsParsers } from "@/features/bookmarks/constants/bookmarks-search-params.constants"

export const Route = createFileRoute("/bookmarks")({
	validateSearch: createStandardSchemaV1(bookmarksSearchParamsParsers, {
		partialOutput: true
	}),
	head: () => buildStaticPageHead("bookmarks"),
	component: BookmarksPage
})
