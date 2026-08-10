import { lazy, Suspense } from "react"

import { Container } from "@/components/shared/Container"
import { pageShellClass, pageStackGapClass } from "@/components/shared/prose.styles"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { ExperienceSummary } from "@/features/home/components/ExperienceSummary"
import { FeaturedBlog } from "@/features/home/components/FeaturedBlog"
import { FeaturedProjects } from "@/features/home/components/FeaturedProjects"
import { Hero } from "@/features/home/components/Hero"
import { VirastackCaseStudyCard } from "@/features/home/components/virastack-case-study-card"
import { cn } from "@/lib/utils"

const StackStrip = lazy(async () => {
	const module = await import("@/features/home/components/StackStrip")
	return { default: module.StackStrip }
})

function StackStripFallback() {
	return <div className="h-24" aria-hidden />
}

type HomePageProps = {
	featuredPosts: BlogPost[]
}

export function HomePage({ featuredPosts }: HomePageProps) {
	return (
		<div className={pageShellClass}>
			<Container className={cn("flex flex-col", pageStackGapClass)}>
				<Hero />
			</Container>
			<Suspense fallback={<StackStripFallback />}>
				<StackStrip />
			</Suspense>
			<Container className={cn("flex flex-col", pageStackGapClass)}>
				<FeaturedProjects />
				<VirastackCaseStudyCard />
				<FeaturedBlog posts={featuredPosts} />
				<ExperienceSummary />
			</Container>
		</div>
	)
}
