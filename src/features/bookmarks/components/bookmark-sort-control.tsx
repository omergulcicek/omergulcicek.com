import { Button } from "@/components/ui/button"
import { BookmarkChipLabelText } from "@/features/bookmarks/components/bookmark-chip-label"
import {
	BOOKMARK_UI,
	LIBRARY_BOOKMARK_SORT_LABELS,
	MEDIA_RATING_BOOKMARK_SORT_LABELS
} from "@/features/bookmarks/constants/bookmarks.constants"
import { blogFilterChipDesktopClass } from "@/features/blog/constants/blog-filter-chip.styles"
import type { BookmarkSort } from "@/features/bookmarks/types/bookmarks.types"
import { cn } from "@/lib/utils"

type BookmarkSortControlProps = {
	options: readonly BookmarkSort[]
	value: BookmarkSort
	onChange: (sort: BookmarkSort) => void
	className?: string
}

function getBookmarkSortLabel(sort: BookmarkSort) {
	if (sort === "title" || sort === "author") {
		return LIBRARY_BOOKMARK_SORT_LABELS[sort]
	}

	return MEDIA_RATING_BOOKMARK_SORT_LABELS[sort]
}

export function BookmarkSortControl({
	options,
	value,
	onChange,
	className
}: BookmarkSortControlProps) {
	if (options.length === 0) {
		return null
	}

	return (
		<div
			className={cn("flex flex-wrap gap-2", className)}
			role="group"
			aria-label={BOOKMARK_UI.sortAriaLabel}
		>
			{options.map((option) => {
				const isActive = value === option
				const label = getBookmarkSortLabel(option)

				return (
					<Button
						key={option}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						aria-label={label.desktop}
						className={blogFilterChipDesktopClass}
						onClick={() => onChange(option)}
					>
						<BookmarkChipLabelText label={label} />
					</Button>
				)
			})}
		</div>
	)
}
