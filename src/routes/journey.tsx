import { createFileRoute } from "@tanstack/react-router"

import { buildStaticPageHead } from "@/helpers/seo/build-page-head"

import { JourneyPage } from "@/features/journey/components/JourneyPage"

export const Route = createFileRoute("/journey")({
	head: () => buildStaticPageHead("journey"),
	component: JourneyPage
})
