import { Button } from "@/components/ui/button"
import {
	blogFilterChipDesktopClass,
	blogFilterChipWithIconDesktopClass
} from "@/features/blog/constants/blog-filter-chip.styles"
import { BookmarkTagIcon } from "@/features/bookmarks/components/bookmark-tag-icon"
import { getBookmarkAllTagLabel, getBookmarkTagLabel } from "@/features/bookmarks/helpers/bookmark-helpers"
import { cn } from "@/lib/utils"

type BookmarkTagChipsProps = {
	tags: readonly string[]
	selectedTag: string | null
	onSelect: (tag: string | null) => void
	counts: ReadonlyMap<string, number>
	ariaLabel: string
	className?: string
}

export function BookmarkTagChips({
	tags,
	selectedTag,
	onSelect,
	counts,
	ariaLabel,
	className
}: BookmarkTagChipsProps) {
	if (tags.length === 0) {
		return null
	}

	const allTagLabel = getBookmarkAllTagLabel()

	return (
		<div className={cn("flex flex-wrap gap-2", className)} role="group" aria-label={ariaLabel}>
			<Button
				type="button"
				size="xs"
				variant={selectedTag === null ? "secondary" : "outline"}
				aria-pressed={selectedTag === null}
				className={blogFilterChipDesktopClass}
				onClick={() => onSelect(null)}
			>
				{allTagLabel}
			</Button>
			{tags.map((tag) => {
				const isActive = selectedTag === tag
				const count = counts.get(tag) ?? 0
				const label = getBookmarkTagLabel(tag)

				return (
					<Button
						key={tag}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						aria-label={`${label} ${count}`}
						className={blogFilterChipWithIconDesktopClass}
						onClick={() => onSelect(tag)}
					>
						<BookmarkTagIcon tag={tag} className="size-3 shrink-0" />
						{label} <span className="tabular-nums">{count}</span>
					</Button>
				)
			})}
		</div>
	)
}
