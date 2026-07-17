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
	cardGridClass
} from "@/components/shared/prose.styles"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { FeaturedProjectCard } from "@/features/projects/components/featured-project-card"
import {
	ArchiveProjectList,
	ProjectsSectionHeading
} from "@/features/projects/components/project-cards"
// import { VirastackDither } from "@/features/projects/components/virastack-dither.client"
import { getProjectsByGroup } from "@/features/projects/constants/projects.constants"

export function ProjectsPage() {
	const personalProjects = getProjectsByGroup("personal")
	const virastackProjects = getProjectsByGroup("virastack")
	const archiveProjects = getProjectsByGroup("archive")

	return (
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

				<StaggerItem className={pageSectionClass}>
					<ProjectsSectionHeading>
						{SITE_CONTENT.projectsSectionApps}
					</ProjectsSectionHeading>
					<div className={cardGridClass}>
						{personalProjects.map((project) => (
							<FeaturedProjectCard key={project.id} project={project} />
						))}
					</div>
				</StaggerItem>

				<StaggerItem id="virastack" className={pageSectionClass}>
					<ProjectsSectionHeading>
						{SITE_CONTENT.projectsSectionVirastack}
					</ProjectsSectionHeading>
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
					<div className={cardGridClass}>
						{virastackProjects.map((project) => (
							<FeaturedProjectCard key={project.id} project={project} />
						))}
					</div>
				</StaggerItem>

				<StaggerItem className={pageSectionClass}>
					<ProjectsSectionHeading>
						{SITE_CONTENT.projectsSectionArchive}
					</ProjectsSectionHeading>
					<ArchiveProjectList projects={archiveProjects} />
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
