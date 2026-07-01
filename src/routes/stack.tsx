import { createFileRoute } from "@tanstack/react-router"

import { StackToolsPage } from "@/features/stack-tools"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.stack

export const Route = createFileRoute("/stack")({
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: StackToolsPage
})
