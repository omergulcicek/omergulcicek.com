import { Container } from "@/components/shared/Container"
import { pageShellClass, pageStackGapClass } from "@/components/shared/prose.styles"
import { ExperienceSummary } from "@/features/home/components/ExperienceSummary"
import { FeaturedBlog } from "@/features/home/components/FeaturedBlog"
import { FeaturedProjects } from "@/features/home/components/FeaturedProjects"
import { Hero } from "@/features/home/components/Hero"
import { StackStrip } from "@/features/home/components/StackStrip"
import { cn } from "@/lib/utils"

export function HomePage() {
	return (
		<div className={pageShellClass}>
			<Container className={cn("flex flex-col", pageStackGapClass)}>
				<Hero />
				<FeaturedProjects />
			</Container>
			<StackStrip />
			<Container className={cn("flex flex-col", pageStackGapClass)}>
				<FeaturedBlog />
				<ExperienceSummary />
			</Container>
		</div>
	)
}
