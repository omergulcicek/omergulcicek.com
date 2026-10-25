import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion"
import {
	pageShellClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { ExperienceList } from "@/features/experiences/components/experience-list"
import { ResumeModal } from "@/features/experiences/components/resume-modal"
import { EXPERIENCES } from "@/features/experiences/constants/experiences.constants"

export function ExperiencesPage() {
	return (
		<Container>
			<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader title={SITE_COPY.experiences.title}>
						<p className={proseParagraphClass}>{SITE_COPY.experiences.intro}</p>
					</PageHeader>
				</StaggerItem>

				<StaggerItem>
					<ResumeModal />
				</StaggerItem>

				<StaggerItem>
					<ExperienceList experiences={EXPERIENCES} showTechnologies />
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
