import { Link } from "@tanstack/react-router"

import { SITE_CONTENT } from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"

import {
	getInteractiveCardClassName,
	interactiveRowCardVisualClass
} from "@/components/shared/interactive-card.styles"
import { InteractiveRowCard } from "@/components/shared/InteractiveRowCard"
import {
	cardTitleClass,
	pageSectionClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { VirastackLogo } from "@/components/shared/VirastackLogo"
import { VirastackProductLinks } from "@/components/shared/VirastackProductLinks"

export function VirastackCaseStudyCard() {
	return (
		<section className={pageSectionClass}>
			<SectionHeading>{SITE_CONTENT.homeProjectsTitle}</SectionHeading>
			<Link
				to="/projects"
				hash="virastack"
				className={getInteractiveCardClassName()}
			>
				<InteractiveRowCard
					visual={
						<span className={interactiveRowCardVisualClass}>
							<VirastackLogo className="size-7" />
						</span>
					}
					title={
						<h3 className={cardTitleClass}>
							{SITE_CONTENT.projectsSectionVirastack}
						</h3>
					}
					description={SITE_COPY.projects.virastackIntro}
				/>
			</Link>
			<VirastackProductLinks
				ariaLabel={SITE_CONTENT.homeVirastackProductsAria}
				className="justify-center px-1"
			/>
		</section>
	)
}
