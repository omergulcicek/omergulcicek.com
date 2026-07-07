import { createFileRoute } from "@tanstack/react-router"

import { AboutPage } from "@/features/about"
import { getGitHubContributionsFn } from "@/features/about/api/get-github-contributions.api"
import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL
} from "@/features/blog/constants/blog-cache.constants"
import { buildPageHead } from "@/lib/seo/build-page-head"
import { STATIC_PAGE_SEO } from "@/lib/seo/page-seo.constants"

const seo = STATIC_PAGE_SEO.about

export const Route = createFileRoute("/about")({
	loader: async () => {
		const contributions = await getGitHubContributionsFn()

		return { contributions }
	},
	headers: () => ({
		"Cache-Control": import.meta.env.PROD
			? BLOG_PAGE_CACHE_CONTROL
			: BLOG_PAGE_DEV_CACHE_CONTROL
	}),
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
