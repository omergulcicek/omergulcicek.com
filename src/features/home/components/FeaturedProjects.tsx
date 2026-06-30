import { Link } from "@tanstack/react-router"

import { ArrowLink } from "@/components/shared/ArrowLink"
import { pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { FeaturedProjectCard } from "@/features/projects/components/featured-project-card"
import { getFeaturedProjects } from "@/features/projects/constants/projects.constants"

export function FeaturedProjects() {
	const projects = getFeaturedProjects()

	return (
		<section className={pageSectionClass}>
			<SectionHeading>{SITE_CONTENT.homeSections.projects}</SectionHeading>
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
				{projects.map((project) => (
					<FeaturedProjectCard key={project.id} project={project} />
				))}
			</div>
			<div className="flex justify-center">
				<Link to="/projects" className="group text-muted-foreground">
					<ArrowLink>{SITE_CONTENT.homeProjectsCta}</ArrowLink>
				</Link>
			</div>
		</section>
	)
}
