import { createFileRoute } from "@tanstack/react-router"

import { WorkspacePage } from "@/features/workspace"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.workspace

export const Route = createFileRoute("/workspace")({
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: WorkspacePage
})
