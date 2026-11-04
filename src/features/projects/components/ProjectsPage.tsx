import {
	EXTERNAL_LINKS,
	SITE_CONTENT
} from "@/constants/site-content.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"

import { Container } from "@/components/shared/Container"
import { GitHubIcon } from "@/components/shared/icons/GitHubIcon"
import { PageHeader } from "@/components/shared/PageHeader"
import {
	pageSectionClass,
	pageShellClass,
	proseFlowClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { ProseIconLink } from "@/components/shared/ProseIconLink"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { StaggerContainer } from "@/components/shared/StaggerContainer"
import { StaggerItem } from "@/components/shared/StaggerItem"
import { VirastackLink } from "@/components/shared/VirastackLink"
import { GitHubContributionCalendar } from "@/features/projects/components/GitHubContributionCalendar"
import { ProjectSection } from "@/features/projects/components/ProjectSection"
import { getProjectsByGroup } from "@/features/projects/constants/projects.constants"

export function ProjectsPage() {
	const personalProjects = getProjectsByGroup("personal")
	const virastackProjects = getProjectsByGroup("virastack")

	return (
		<main>
			<Container>
				<StaggerContainer className={pageShellClass}>
					<StaggerItem>
						<PageHeader title={SITE_COPY.projects.title}>
							<p className={proseParagraphClass}>
								<VirastackLink>{SITE_COPY.projects.intro.link}</VirastackLink>
								{SITE_COPY.projects.intro.after}
							</p>
						</PageHeader>
					</StaggerItem>

					<StaggerItem id="virastack">
						<ProjectSection
							title={SITE_CONTENT.projectsSectionVirastack}
							projects={virastackProjects}
						>
							<div className="flex flex-col gap-4">
								<p className={proseParagraphClass}>
									{SITE_COPY.projects.virastackIntro}
								</p>
								<p className={proseParagraphClass}>
									{SITE_COPY.projects.virastackLinks.before}
									<VirastackLink>
										{SITE_COPY.projects.virastackLinks.site}
									</VirastackLink>
									{SITE_COPY.projects.virastackLinks.middle}
									<ProseIconLink
										href={EXTERNAL_LINKS.virastackGithub}
										icon={
											<GitHubIcon className="size-3.5 shrink-0 text-brand-github" />
										}
									>
										{SITE_COPY.projects.virastackLinks.github}
									</ProseIconLink>
									{SITE_COPY.projects.virastackLinks.after}
								</p>
							</div>
						</ProjectSection>
					</StaggerItem>

					<StaggerItem>
						<ProjectSection
							title={SITE_CONTENT.projectsSectionApps}
							projects={personalProjects}
						/>
					</StaggerItem>

					<StaggerItem className={pageSectionClass}>
						<SectionHeading>
							{SITE_COPY.projects.openSource.title}
						</SectionHeading>
						<div className={proseFlowClass}>
							<p className={proseParagraphClass}>
								{SITE_COPY.projects.openSource.intro}
							</p>
							<p className={proseParagraphClass}>
								{SITE_COPY.projects.openSource.calendar.before}
								<ProseIconLink
									href={EXTERNAL_LINKS.github}
									icon={
										<GitHubIcon className="size-3.5 shrink-0 text-brand-github" />
									}
								>
									{SITE_COPY.projects.openSource.calendar.link}
								</ProseIconLink>
								{SITE_COPY.projects.openSource.calendar.after}
							</p>
						</div>
					</StaggerItem>
				</StaggerContainer>
			</Container>

			<StaggerContainer>
				<StaggerItem>
					<GitHubContributionCalendar />
				</StaggerItem>
			</StaggerContainer>
		</main>
	)
}
