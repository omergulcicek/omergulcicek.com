import { createFileRoute } from "@tanstack/react-router"

import { buildStaticPageHead } from "@/helpers/seo/build-page-head"

import { ExperiencesPage } from "@/features/experiences/components/ExperiencesPage"

export const Route = createFileRoute("/experiences")({
	head: () => buildStaticPageHead("experiences"),
	component: ExperiencesPage
})
