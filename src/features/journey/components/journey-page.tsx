import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"
import { JOURNEY_CONTENT } from "@/features/journey/constants/journey.constants"

export function JourneyPage() {
	return (
		<Container className={pageShellClass}>
			<PageHeader title={JOURNEY_CONTENT.pageTitle}>
				<p className={proseParagraphClass}>{JOURNEY_CONTENT.pageDescription}</p>
			</PageHeader>
		</Container>
	)
}
