import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { ProseEmphasis } from "@/components/shared/prose-emphasis"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion.client"
import {
	pageShellClass,
	proseParagraphClass
} from "@/components/shared/prose.styles"
import { ExperienceList } from "@/features/experiences/components/experience-list"
import { ResumeModal } from "@/features/experiences/components/resume-modal"
import { EXPERIENCES } from "@/features/experiences/constants/experiences.constants"

export function ExperiencesPage() {
	return (
		<Container>
			<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader
						title="Deneyimler"
						showOpenToWork
						openToWorkPlacement="inline"
					>
						<p className={proseParagraphClass}>
							<em>10 yılı aşkın</em> tecrübemle,{" "}
							<ProseEmphasis>React</ProseEmphasis> ekosisteminde{" "}
							<em>AI destekli</em> ve{" "}
							<ProseEmphasis>yüksek performanslı mimariler</ProseEmphasis>{" "}
							kurgulayarak sürdürülebilir kullanıcı deneyimleri inşa ediyorum.
						</p>
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
