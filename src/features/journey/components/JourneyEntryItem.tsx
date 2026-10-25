import { cardTitleClass, proseParagraphClass } from "@/components/shared/prose.styles"
import type { JourneyEntry } from "@/features/journey/types/journey.types"
import { cn } from "@/lib/utils"
import { JourneyEntryImage } from "@/features/journey/components/JourneyEntryImage"

type JourneyEntryProps = {
	entry: JourneyEntry
	isLast: boolean
}

export function JourneyEntryItem({ entry, isLast }: JourneyEntryProps) {
	return (
		<li className="relative flex gap-4 md:gap-6">
			<div
				aria-hidden
				className="flex w-6 shrink-0 flex-col items-center md:w-7"
			>
				<span className="mt-2 size-2 shrink-0 rounded-full border border-border bg-primary ring-1 ring-border ring-offset-3 ring-offset-background md:size-2.5" />
				{isLast ? null : (
					<span className="min-h-8 w-px flex-1 border-l border-dashed border-border" />
				)}
			</div>

			<div className={cn("min-w-0 flex-1", !isLast && "pb-8 md:pb-10")}>
				<h3 className={cn(cardTitleClass, "text-foreground")}>{entry.title}</h3>
				{entry.description ? (
					<p className={cn(proseParagraphClass, "mt-1")}>{entry.description}</p>
				) : null}
				<JourneyEntryImage entry={entry} />
			</div>
		</li>
	)
}

