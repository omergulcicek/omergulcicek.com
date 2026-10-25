import { createFileRoute } from "@tanstack/react-router"

import { SiteStructuredData } from "@/components/shared/SiteStructuredData"
import {
	blogPostsQueryOptions,
	getLatestTechnicalPosts,
	LatestPostsSection,
	useGetBlogPosts
} from "@/features/blog"
import { HomePage } from "@/features/home"
import { ExperienceSummary } from "@/features/experiences"
import { HERO_IMAGE } from "@/constants/hero-image.constants"
import { buildStaticPageHead } from "@/lib/seo/build-page-head"

export const Route = createFileRoute("/")({
	loader: async ({ context }) => {
		await context.queryClient.ensureQueryData(blogPostsQueryOptions())
	},
	head: () => {
		const pageHead = buildStaticPageHead("home")

		return {
			...pageHead,
			links: [
				...pageHead.links,
				...HERO_IMAGE.lcpPreload.map((preload) => ({
					rel: "preload" as const,
					as: "image" as const,
					href: preload.href,
					type: preload.type,
					...("media" in preload ? { media: preload.media } : {}),
					fetchPriority: "high" as const
				}))
			]
		}
	},
	component: HomeIndexPage
})

function HomeIndexPage() {
	const { data: posts } = useGetBlogPosts()
	return (
		<>
			<SiteStructuredData />
			<HomePage
				blogSection={<LatestPostsSection posts={getLatestTechnicalPosts(posts)} />}
				experiencesSection={<ExperienceSummary />}
			/>
		</>
	)
}
