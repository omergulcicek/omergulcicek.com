import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/PageHeader"
import { StaggerContainer } from "@/components/shared/StaggerContainer"
import { StaggerItem } from "@/components/shared/StaggerItem"
import {
	pageShellClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { SITE_COPY } from "@/constants/site-copy.constants"
import { ExperienceList } from "@/features/experiences/components/ExperienceList"
import { ResumeModal } from "@/features/experiences/components/ResumeModal"
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

				<StaggerItem className="-my-4 md:my-0">
					<ResumeModal />
				</StaggerItem>

				<StaggerItem>
					<ExperienceList experiences={EXPERIENCES} showTechnologies />
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
