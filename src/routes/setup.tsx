import { createFileRoute } from "@tanstack/react-router"

import { SetupPage } from "@/features/setup"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/setup")({
	head: () => buildStaticPageHead("setup"),
	component: SetupPage
})
