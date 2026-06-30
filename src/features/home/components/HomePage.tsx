import { Container } from "@/components/shared/Container"
import { ExperienceSummary } from "@/features/home/components/ExperienceSummary"
import { FeaturedBlog } from "@/features/home/components/FeaturedBlog"
import { FeaturedProjects } from "@/features/home/components/FeaturedProjects"
import { Hero } from "@/features/home/components/Hero"
import { StackStrip } from "@/features/home/components/StackStrip"

export function HomePage() {
	return (
		<div className="flex flex-col gap-16 py-10 md:gap-24 md:py-16">
			<Container className="flex flex-col gap-16 md:gap-24">
				<Hero />
				<FeaturedProjects />
			</Container>
			<StackStrip />
			<Container className="flex flex-col gap-16 md:gap-24">
				<FeaturedBlog />
				<ExperienceSummary />
			</Container>
		</div>
	)
}
