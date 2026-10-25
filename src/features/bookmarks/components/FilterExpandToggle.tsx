import { ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"

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
			aria-label={BOOKMARK_UI.tagsToggleAriaLabel}
			className="focus-link text-muted-foreground hover:text-foreground inline-flex w-fit items-center gap-1 text-xs underline-offset-4 transition-[color,transform] duration-150 ease-out hover:underline active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100"
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
