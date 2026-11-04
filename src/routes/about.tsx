import { createFileRoute } from "@tanstack/react-router"

import { buildStaticPageHead } from "@/helpers/seo/build-page-head"

import { AboutPage } from "@/features/about/components/AboutPage"
import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL
} from "@/features/blog/constants/blog-cache.constants"

export const Route = createFileRoute("/about")({
	headers: () => ({
		"Cache-Control": import.meta.env.PROD
			? BLOG_PAGE_CACHE_CONTROL
			: BLOG_PAGE_DEV_CACHE_CONTROL
	}),
	head: () => buildStaticPageHead("about"),
	component: AboutRoutePage
})

function AboutRoutePage() {
	return <AboutPage />
}
