import { createFileRoute } from "@tanstack/react-router"

import { ProjectsPage } from "@/features/projects"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.projects

export const Route = createFileRoute("/projects")({
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: ProjectsPage
})
