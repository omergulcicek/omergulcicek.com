import { EXTERNAL_LINKS } from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"

import { cn } from "@/lib/utils"

import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/PageHeader"
import {
	pageSectionClass,
	pageShellClass,
	pageStackGapClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { ProseLink } from "@/components/shared/ProseLink"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { StaggerContainer } from "@/components/shared/StaggerContainer"
import { StaggerItem } from "@/components/shared/StaggerItem"
import { AboutParagraph } from "@/features/about/components/AboutParagraph"
import { BentoInterests } from "@/features/about/components/BentoInterests"
import { getAboutParagraphKey } from "@/features/about/helpers/about-paragraph.helpers"

export function AboutPage() {
	const { about } = SITE_COPY

	return (
		<StaggerContainer className={pageShellClass}>
			<StaggerItem>
				<Container className={cn("flex flex-col", pageStackGapClass)}>
					<PageHeader title={about.title} className="vt-about-block">
						<div className={proseFlowClass}>
							{about.paragraphs.map((segments) => (
								<AboutParagraph
									key={getAboutParagraphKey(segments)}
									segments={segments}
								/>
							))}
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
				<Container>
					<section className={pageSectionClass}>
						<SectionHeading>{about.interestsTitle}</SectionHeading>
						<BentoInterests />
					</section>
				</Container>
			</StaggerItem>
		</StaggerContainer>
	)
}
