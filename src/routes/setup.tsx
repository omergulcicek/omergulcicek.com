import { createFileRoute } from "@tanstack/react-router"

import { buildStaticPageHead } from "@/helpers/seo/build-page-head"

import { SetupPage } from "@/features/setup/components/SetupPage"

export const Route = createFileRoute("/setup")({
	head: () => buildStaticPageHead("setup"),
	component: SetupPage
})
