import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { StaggerContainer, StaggerItem } from "@/components/shared/stagger-motion.client"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { JourneyTimeline } from "@/features/journey/components/journey-timeline"
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
