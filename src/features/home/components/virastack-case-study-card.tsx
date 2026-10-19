import { Link } from "@tanstack/react-router"
import { GraduationCap } from "lucide-react"

import {
	getInteractiveCardClassName,
	interactiveRowCardVisualClass
} from "@/components/shared/interactive-card.styles"
import { InteractiveRowCard } from "@/components/shared/interactive-row-card"
import { cardTitleClass, pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { VirastackLogo } from "@/components/shared/virastack-logo"
import { withOutboundUtm } from "@/lib/outbound-url"

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
					description="Frontend geliştiriciler için şablonlardan npm paketlerine uzanan açık kaynak ekosistem: ViraStack Start, ViraStack AI ve React paketleri."
				/>
			</Link>
			<a
				href={withOutboundUtm("https://virastack.com/academy")}
				target="_blank"
				rel="noopener noreferrer"
				className={getInteractiveCardClassName()}
			>
				<InteractiveRowCard
					visual={
						<span className={interactiveRowCardVisualClass}>
							<GraduationCap
								className="size-7 text-sky-500"
								strokeWidth={1.75}
								aria-hidden
							/>
						</span>
					}
					title={<h3 className={cardTitleClass}>ViraStack Academy</h3>}
					description="React ile frontend geliştirici olmak için güncel yol haritası ve ücretsiz rehberler."
				/>
			</a>
		</section>
	)
}
