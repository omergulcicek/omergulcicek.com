import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/PageHeader"
import { StaggerContainer } from "@/components/shared/StaggerContainer"
import { StaggerItem } from "@/components/shared/StaggerItem"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { JourneyTimeline } from "@/features/journey/components/JourneyTimeline"
import { JOURNEY_CONTENT } from "@/features/journey/constants/journey.constants"

export function JourneyPage() {
	return (
		<Container>
			<StaggerContainer className={pageShellClass}>
				<StaggerItem>
					<PageHeader title={JOURNEY_CONTENT.pageTitle}>
						<p className={proseParagraphClass}>{JOURNEY_CONTENT.pageDescription}</p>
					</PageHeader>
				</StaggerItem>

				<StaggerItem>
					<JourneyTimeline />
				</StaggerItem>
			</StaggerContainer>
		</Container>
	)
}
