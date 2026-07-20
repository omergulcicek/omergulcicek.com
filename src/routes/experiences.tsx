import { createFileRoute } from "@tanstack/react-router"

import { ExperiencesPage } from "@/features/experiences"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/experiences")({
	head: () => buildStaticPageHead("experiences"),
	component: ExperiencesPage
})
