import { sectionHeadingClass } from "@/components/shared/prose.styles"
import { JourneyEntryItem } from "@/features/journey/components/journey-entry"
import type { JourneyYearGroup } from "@/features/journey/types/journey.types"
import { cn } from "@/lib/utils"

type JourneyYearGroupProps = {
	group: JourneyYearGroup
}

export function JourneyYearGroupSection({ group }: JourneyYearGroupProps) {
	return (
		<section className="flex flex-col gap-4 md:flex-row md:gap-8">
			<h2
				className={cn(
					sectionHeadingClass,
					"shrink-0 tabular-nums md:w-12 md:self-start"
				)}
			>
				{group.year}
			</h2>
			<ol className="min-w-0 flex-1">
				{group.entries.map((entry, index) => (
					<JourneyEntryItem
						key={entry.id}
						entry={entry}
						isLast={index === group.entries.length - 1}
					/>
				))}
			</ol>
		</section>
	)
}
