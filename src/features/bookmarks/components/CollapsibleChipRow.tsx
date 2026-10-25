import { useRef, type ReactNode } from "react"

import { useResettableState } from "@/hooks/use-resettable-state"

import { FilterChipRow } from "@/features/bookmarks/components/FilterChipRow"
import { FilterExpandToggle } from "@/features/bookmarks/components/FilterExpandToggle"
import { useCollapsedRowOverflow } from "@/features/bookmarks/hooks/use-collapsed-row-overflow"

type CollapsibleChipRowProps = {
	items: readonly string[]
	/** Collapses the row again whenever this key changes (category or chip list). */
	resetKey: string
	children: ReactNode
}

/** A chip row clamped to two lines with a "show all" toggle when it overflows. */
export function CollapsibleChipRow({
	items,
	resetKey,
	children
}: CollapsibleChipRowProps) {
	const rowRef = useRef<HTMLDivElement>(null)
	const [expanded, setExpanded] = useResettableState(false, resetKey)
	const hasOverflow = useCollapsedRowOverflow(rowRef, expanded, items)

	return (
		<div className="flex flex-col gap-2">
			<FilterChipRow expanded={expanded} rowRef={rowRef}>
				{children}
			</FilterChipRow>
			{hasOverflow ? (
				<FilterExpandToggle
					expanded={expanded}
					onToggle={() => setExpanded((previous) => !previous)}
				/>
			) : null}
		</div>
	)
}
