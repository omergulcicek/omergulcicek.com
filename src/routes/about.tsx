import { createFileRoute } from "@tanstack/react-router"

import { AboutPage } from "@/features/about"
import {
	BLOG_PAGE_CACHE_CONTROL,
	BLOG_PAGE_DEV_CACHE_CONTROL
} from "@/features/blog/constants/blog-cache.constants"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

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
