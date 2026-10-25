import { pageStackGapClass } from "@/components/shared/prose.styles"
import { JourneyYearGroupSection } from "@/features/journey/components/journey-year-group"
import { JOURNEY_TIMELINE } from "@/features/journey/constants/journey.constants"
import { cn } from "@/lib/utils"

export function JourneyTimeline() {
	return (
		<div className={cn("flex flex-col", pageStackGapClass)}>
			{JOURNEY_TIMELINE.map((group) => (
				<JourneyYearGroupSection key={group.year} group={group} />
			))}
		</div>
	)
}
