import { Link } from "@tanstack/react-router"

import {
	getInteractiveCardClassName,
	interactiveRowCardVisualClass
} from "@/components/shared/interactive-card.styles"
import { InteractiveRowCard } from "@/components/shared/InteractiveRowCard"
import { cardTitleClass, pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { VirastackLogo } from "@/components/shared/VirastackLogo"
import { SITE_COPY } from "@/constants/site-copy.constants"

export function VirastackCaseStudyCard() {
	return (
		<section className={pageSectionClass}>
			<SectionHeading>ViraStack</SectionHeading>
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
					title={<h3 className={cardTitleClass}>ViraStack</h3>}
					description={SITE_COPY.projects.virastackIntro}
				/>
			</Link>
		</section>
	)
}
