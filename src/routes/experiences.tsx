import { createFileRoute } from "@tanstack/react-router"

import { ExperiencesPage } from "@/features/experiences"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.experiences

export const Route = createFileRoute("/experiences")({
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: ExperiencesPage
})
