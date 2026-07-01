import { createFileRoute } from "@tanstack/react-router"

import { JourneyPage } from "@/features/journey"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.journey

export const Route = createFileRoute("/journey")({
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: JourneyPage
})
