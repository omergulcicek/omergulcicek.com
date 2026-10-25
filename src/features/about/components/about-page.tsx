import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import { ProseLink, ProseRouterLink } from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion"
import { VirastackLink } from "@/components/shared/virastack-link"
import {
	bleedSectionClass,
	pageSectionClass,
	pageShellClass,
	pageStackGapClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { getSitePrinciples } from "@/constants/me.constants"
import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { BentoInterests } from "@/features/about/components/bento-interests"
import { cn } from "@/lib/utils"

function LinkSeparator() {
	return (
		<span className="text-muted-foreground" aria-hidden>
			{" · "}
		</span>
	)
}

export function AboutPage() {
	const { about } = SITE_COPY
	const principles = getSitePrinciples()

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
					<section className={pageSectionClass}>
						<SectionHeading>{about.principlesTitle}</SectionHeading>
						<ul className={cn("flex flex-col", proseFlowClass)}>
							{principles.map((principle) => (
								<li key={principle.title} className={proseParagraphClass}>
									<ProseEmphasis>{principle.title}.</ProseEmphasis>{" "}
									{principle.text}
								</li>
							))}
						</ul>
					</section>
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
							<ProseLink href={EXTERNAL_LINKS.email}>{about.links.email}</ProseLink>
							<LinkSeparator />
							<ProseRouterLink to="/experiences">{about.links.resume}</ProseRouterLink>
							<LinkSeparator />
							<ProseLink href={EXTERNAL_LINKS.github}>{about.links.github}</ProseLink>
						</p>
					</nav>
				</Container>
			</StaggerItem>
		</StaggerContainer>
	)
}
