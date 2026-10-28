import { Button } from "@/components/ui/button"
import { BookmarkChipLabelText } from "@/features/bookmarks/components/BookmarkChipLabelText"
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

/** Segmented control, so the top-level category reads apart from the tag chips below it. */
export function BookmarkCategoryChips({
	value,
	onChange,
	className
}: BookmarkCategoryChipsProps) {
	return (
		<div
			className={cn("bg-muted inline-flex gap-0.5 rounded-lg p-0.5", className)}
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
						variant="ghost"
						aria-pressed={isActive}
						aria-label={label.desktop}
						className={cn(
							"text-foreground/70 h-7 rounded-md px-2.5 hover:bg-transparent dark:hover:bg-transparent",
							"aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-xs dark:aria-pressed:bg-background"
						)}
						onClick={() => onChange(category.id)}
					>
						<BookmarkChipLabelText label={label} />
					</Button>
				)
			})}
		</div>
	)
}
