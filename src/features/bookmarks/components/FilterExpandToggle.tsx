import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

import { filterTextButtonClass } from "@/components/shared/filter-chip.styles"
import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"

export function FilterExpandToggle({
	expanded,
	onToggle
}: {
	expanded: boolean
	onToggle: () => void
}) {
	return (
		<button
			type="button"
			aria-expanded={expanded}
			className={filterTextButtonClass}
			onClick={onToggle}
		>
			<ChevronDown
				className={cn(
					"size-3 shrink-0 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none",
					expanded ? "rotate-180" : undefined
				)}
				aria-hidden
			/>
			{expanded ? BOOKMARK_UI.hideTags : BOOKMARK_UI.showTags}
		</button>
	)
}
