import { Button } from "@/components/ui/button"
import { BookmarkChipLabelText } from "@/features/bookmarks/components/bookmark-chip-label"
import { blogFilterChipDesktopClass } from "@/features/blog/constants/blog-filter-chip.styles"
import {
	BOOKMARK_CATEGORY_CHIP_LABELS,
	BOOKMARK_UI,
	getSortedBookmarkCategories
} from "@/features/bookmarks/constants/bookmarks.constants"
import type { BookmarkCategoryId } from "@/features/bookmarks/types/bookmarks.types"
import { cn } from "@/lib/utils"

type BookmarkCategoryChipsProps = {
	value: BookmarkCategoryId
	onChange: (categoryId: BookmarkCategoryId) => void
	className?: string
}

export function BookmarkCategoryChips({
	value,
	onChange,
	className
}: BookmarkCategoryChipsProps) {
	return (
		<div
			className={cn("flex flex-wrap gap-2", className)}
			role="group"
			aria-label={BOOKMARK_UI.categoryAriaLabel}
		>
			{getSortedBookmarkCategories().map((category) => {
				const isActive = value === category.id
				const label = BOOKMARK_CATEGORY_CHIP_LABELS[category.id]

				return (
					<Button
						key={category.id}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						aria-label={label.desktop}
						className={blogFilterChipDesktopClass}
						onClick={() => onChange(category.id)}
					>
						<BookmarkChipLabelText label={label} />
					</Button>
				)
			})}
		</div>
	)
}
