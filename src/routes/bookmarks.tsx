import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import { BookmarksPage, bookmarksSearchParamsParsers } from "@/features/bookmarks"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/bookmarks")({
	validateSearch: createStandardSchemaV1(bookmarksSearchParamsParsers, {
		partialOutput: true
	}),
	head: () => buildStaticPageHead("bookmarks"),
	component: BookmarksPage
})
