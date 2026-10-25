import { Mail } from "lucide-react"

import {
	getInteractiveCardClassName,
	interactiveRowCardVisualClass
} from "@/components/shared/interactive-card.styles"
import { InteractiveRowCard } from "@/components/shared/interactive-row-card"
import { cardTitleClass, pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"

export function ContactCta() {
	const { contactCta } = SITE_COPY

	return (
		<section className={pageSectionClass}>
			<SectionHeading>{contactCta.title}</SectionHeading>
			<a href={EXTERNAL_LINKS.email} className={getInteractiveCardClassName()}>
				<InteractiveRowCard
					visual={
						<span className={interactiveRowCardVisualClass}>
							<Mail className="text-muted-foreground size-5" aria-hidden />
						</span>
					}
					title={<h3 className={cardTitleClass}>{contactCta.button}</h3>}
					description={contactCta.description}
				/>
			</a>
		</section>
	)
}
