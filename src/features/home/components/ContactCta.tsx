import { Link } from "@tanstack/react-router"

import { ArrowLink } from "@/components/shared/ArrowLink"
import { pageSectionClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SITE_CONTENT } from "@/constants/site-content.constants"

export function ContactCta() {
	return (
		<section className={pageSectionClass}>
			<SectionHeading>{SITE_CONTENT.homeContactTitle}</SectionHeading>
			<p className={proseParagraphClass}>{SITE_CONTENT.homeContactText}</p>
			<div className="flex justify-center">
				<Link to="/services" className="group text-muted-foreground">
					<ArrowLink>{SITE_CONTENT.homeContactCta}</ArrowLink>
				</Link>
			</div>
		</section>
	)
}
