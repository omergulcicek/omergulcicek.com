import { createFileRoute } from "@tanstack/react-router"

import { SetupPage } from "@/features/setup"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.setup

export const Route = createFileRoute("/setup")({
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: SetupPage
})
