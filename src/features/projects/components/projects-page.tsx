import { GitHubIcon } from "@/components/icons"
import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseIconLink } from "@/components/shared/prose-link"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion.client"
import { VirastackLink } from "@/components/shared/virastack-link"
import {
	proseParagraphClass,
	pageSectionClass,
	pageShellClass,
	proseFlowClass
} from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { EXTERNAL_LINKS, SITE_CONTENT } from "@/constants/site-content.constants"
import {
	ArchiveProjectList,
	ProjectsSectionHeading
} from "@/features/projects/components/project-cards"
import { ProjectSection } from "@/features/projects/components/project-section.client"
import { GitHubContributionCalendar } from "@/features/projects/components/github-contribution-calendar.client"
import { getProjectsByGroup } from "@/features/projects/constants/projects.constants"

export function ProjectsPage() {
	const personalProjects = getProjectsByGroup("personal")
	const virastackProjects = getProjectsByGroup("virastack")
	const archiveProjects = getProjectsByGroup("archive")

	return (
		<main>
			<Container>
				<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader title="Projeler">
						<p className={proseParagraphClass}>
							Kişisel uygulamalarım ve frontend geliştiriciler için kurduğum{" "}
							<VirastackLink>ViraStack</VirastackLink>{" "}
							ekosistemindeki araçlar.
						</p>
					</PageHeader>
				</StaggerItem>

				<StaggerItem>
					<ProjectSection title={SITE_CONTENT.projectsSectionApps} projects={personalProjects} />
				</StaggerItem>

				<StaggerItem id="virastack">
					<ProjectSection title={SITE_CONTENT.projectsSectionVirastack} projects={virastackProjects}>
						<div className="flex flex-col gap-4">
							<p className={proseParagraphClass}>
								{SITE_CONTENT.virastackSectionIntro}
							</p>
							{/* <VirastackDither /> */}
							<p className={proseParagraphClass}>
								Ekosistemi{" "}
								<VirastackLink>ViraStack</VirastackLink>{" "}
								üzerinden keşfedebilir ya da{" "}
								<ProseIconLink
									href="https://github.com/virastack"
									icon={
										<GitHubIcon className="size-3.5 shrink-0 text-[#181717] dark:text-[#f0f6fc]" />
									}
								>
									GitHub
								</ProseIconLink>{" "}
								organizasyonundaki projelere göz atabilirsiniz.
							</p>
						</div>
					</ProjectSection>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<ProjectsSectionHeading>
						{SITE_CONTENT.projectsSectionArchive}
					</ProjectsSectionHeading>
					<ArchiveProjectList projects={archiveProjects} />
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<SectionHeading>Üretim Kültürü</SectionHeading>
					<div className={proseFlowClass}>
						<p className={proseParagraphClass}>
							Projelerimi açık kaynakta, tecrübelerimi blogda paylaşıyorum.
						</p>
						<p className={proseParagraphClass}>
							Son bir yıldaki{" "}
							<ProseIconLink
								href={EXTERNAL_LINKS.github}
								icon={
									<GitHubIcon className="size-3.5 shrink-0 text-[#181717] dark:text-[#f0f6fc]" />
								}
							>
								GitHub
							</ProseIconLink>{" "}
							katkılarım:
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
