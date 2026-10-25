import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"

import { cn } from "@/lib/utils"

import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/PageHeader"
import {
	bleedSectionClass,
	pageSectionClass,
	pageShellClass,
	pageStackGapClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { ProseLink } from "@/components/shared/ProseLink"
import { ProseRouterLink } from "@/components/shared/ProseRouterLink"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { StaggerContainer } from "@/components/shared/StaggerContainer"
import { StaggerItem } from "@/components/shared/StaggerItem"
import { VirastackLink } from "@/components/shared/VirastackLink"
import { BentoInterests } from "@/features/about/components/BentoInterests"
import { LinkSeparator } from "@/features/about/components/LinkSeparator"

export function AboutPage() {
	const { about } = SITE_COPY

	return (
		<StaggerContainer className={pageShellClass}>
			<StaggerItem>
				<Container className={cn("flex flex-col", pageStackGapClass)}>
					<PageHeader title={about.title} className="vt-about-block">
						<div className={proseFlowClass}>
							{about.intro.map((paragraph) => (
								<p key={paragraph} className={proseParagraphClass}>
									{paragraph}
								</p>
							))}
							<p className={proseParagraphClass}>
								{about.focus.before}
								<VirastackLink>{about.focus.link}</VirastackLink>
								{about.focus.after}
							</p>
						</div>
					</PageHeader>
				</Container>
			</StaggerItem>

			<StaggerItem>
				<Container>
					<section
						id={about.workTogether.id}
						className={cn(pageSectionClass, "scroll-mt-24")}
					>
						<SectionHeading>{about.workTogether.title}</SectionHeading>
						<p className={proseParagraphClass}>
							{about.workTogether.before}
							<ProseLink href={EXTERNAL_LINKS.email}>
								{about.workTogether.link}
							</ProseLink>
							{about.workTogether.after}
						</p>
					</section>
				</Container>
			</StaggerItem>

			<StaggerItem>
				<section className={pageSectionClass}>
					<Container>
						<SectionHeading>{about.interestsTitle}</SectionHeading>
					</Container>
					<div className={bleedSectionClass}>
						<BentoInterests />
					</div>
				</section>
			</StaggerItem>

			<StaggerItem>
				<Container>
					<nav aria-label={about.links.ariaLabel}>
						<p className={proseParagraphClass}>
							<ProseLink href={EXTERNAL_LINKS.email}>
								{about.links.email}
							</ProseLink>
							<LinkSeparator />
							<ProseRouterLink to="/experiences">
								{about.links.resume}
							</ProseRouterLink>
							<LinkSeparator />
							<ProseLink href={EXTERNAL_LINKS.github}>
								{about.links.github}
							</ProseLink>
						</p>
					</nav>
				</Container>
			</StaggerItem>
		</StaggerContainer>
	)
}
