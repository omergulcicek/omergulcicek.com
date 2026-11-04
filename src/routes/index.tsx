import { createFileRoute } from "@tanstack/react-router"

import { HERO_IMAGE } from "@/constants/hero-image.constants"

import { buildStaticPageHead } from "@/helpers/seo/build-page-head"

import { SiteStructuredData } from "@/components/shared/SiteStructuredData"
import { blogPostsQueryOptions } from "@/features/blog/api/blog.queries"
import { LatestPostsSection } from "@/features/blog/components/LatestPostsSection"
import { getLatestTechnicalPosts } from "@/features/blog/helpers/get-latest-technical-posts"
import { useGetBlogPosts } from "@/features/blog/hooks/use-get-blog-posts"
import { ExperienceSummary } from "@/features/experiences/components/ExperienceSummary"
import { HomePage } from "@/features/home/components/HomePage"

export const Route = createFileRoute("/")({
	loader: async ({ context }) => {
		await context.queryClient.query({
			...blogPostsQueryOptions(),
			staleTime: "static"
		})
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
				blogSection={
					<LatestPostsSection posts={getLatestTechnicalPosts(posts)} />
				}
				experiencesSection={<ExperienceSummary />}
			/>
		</>
	)
}
