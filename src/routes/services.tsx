import { createFileRoute } from "@tanstack/react-router"

import { ServicesPage } from "@/features/services"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.services

export const Route = createFileRoute("/services")({
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: ServicesPage
})
