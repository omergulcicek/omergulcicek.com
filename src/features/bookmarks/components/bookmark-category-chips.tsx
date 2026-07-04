import { Button } from "@/components/ui/button"
import { blogFilterChipDesktopClass } from "@/features/blog/constants/blog-filter-chip.styles"
import { BOOKMARK_UI, getSortedBookmarkCategories } from "@/features/bookmarks/constants/bookmarks.constants"
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

				return (
					<Button
						key={category.id}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						className={blogFilterChipDesktopClass}
						onClick={() => onChange(category.id)}
					>
						{category.title}
					</Button>
				)
			})}
		</div>
	)
}
