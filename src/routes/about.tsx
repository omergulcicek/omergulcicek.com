import { createFileRoute } from "@tanstack/react-router"

import { AboutPage } from "@/features/about"
import { getGitHubContributionsFn } from "@/features/about/api/get-github-contributions.api"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.about

export const Route = createFileRoute("/about")({
	loader: async () => {
		const contributions = await getGitHubContributionsFn()

		return { contributions }
	},
	head: () =>
		buildPageHead({
			title: seo.title,
			description: seo.description,
			path: seo.path
		}),
	component: AboutRoutePage
})

function AboutRoutePage() {
	const { contributions } = Route.useLoaderData()

	return <AboutPage contributions={contributions} />
}
