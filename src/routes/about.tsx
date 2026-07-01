import { createFileRoute } from "@tanstack/react-router"

import { AboutPage } from "@/features/about"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.about

export const Route = createFileRoute("/about")({
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: AboutPage
})
