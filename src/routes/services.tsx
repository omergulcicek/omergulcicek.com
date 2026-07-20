import { createFileRoute } from "@tanstack/react-router"

import { ServicesPage } from "@/features/services"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/services")({
	head: () => buildStaticPageHead("services"),
	component: ServicesPage
})
