import { Link } from "@tanstack/react-router"

import { ArrowLink } from "@/components/shared/ArrowLink"
import { pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { ExperienceList } from "@/features/experiences/components/experience-list"
import { getHomeExperiences } from "@/features/experiences/constants/experiences.constants"

export function ExperienceSummary() {
	const experiences = getHomeExperiences()

	return (
		<section className={pageSectionClass}>
			<SectionHeading>{SITE_CONTENT.homeSections.experiences}</SectionHeading>
			<ExperienceList experiences={experiences} />
			<div className="flex justify-center">
				<Link to="/experiences" className="group text-muted-foreground">
					<ArrowLink>{SITE_CONTENT.homeExperiencesCta}</ArrowLink>
				</Link>
			</div>
		</section>
	)
}
