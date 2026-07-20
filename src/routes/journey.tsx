import { createFileRoute } from "@tanstack/react-router"

import { JourneyPage } from "@/features/journey"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/journey")({
	head: () => buildStaticPageHead("journey"),
	component: JourneyPage
})
