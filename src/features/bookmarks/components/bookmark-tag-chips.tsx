import { Button } from "@/components/ui/button"
import {
	blogFilterChipDesktopClass,
	blogFilterChipWithIconDesktopClass
} from "@/features/blog/constants/blog-filter-chip.styles"
import {
	BookmarkTagIcon,
	hasBookmarkTagIcon
} from "@/features/bookmarks/components/bookmark-tag-icon"
import { BOOKMARK_UI } from "@/features/bookmarks/constants/bookmarks.constants"
import {
	getBookmarkAllTagLabel,
	getBookmarkTagLabel
} from "@/features/bookmarks/helpers/bookmark-helpers"
import type { BookmarkCategoryId } from "@/features/bookmarks/types/bookmarks.types"
import { cn } from "@/lib/utils"

type BookmarkTagChipsProps = {
	categoryId: BookmarkCategoryId
	tags: readonly string[]
	selectedTag: string | null
	onSelect: (tag: string | null) => void
	className?: string
}

export function BookmarkTagChips({
	categoryId,
	tags,
	selectedTag,
	onSelect,
	className
}: BookmarkTagChipsProps) {
	if (tags.length === 0) {
		return null
	}

	const allTagLabel = getBookmarkAllTagLabel(categoryId)

	return (
		<div
			className={cn("flex flex-wrap gap-2", className)}
			role="group"
			aria-label={BOOKMARK_UI.tagAriaLabel}
		>
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
				const hasIcon = hasBookmarkTagIcon(tag)

				return (
					<Button
						key={tag}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						className={cn(
							blogFilterChipDesktopClass,
							hasIcon && blogFilterChipWithIconDesktopClass
						)}
						onClick={() => onSelect(tag)}
					>
						{hasIcon ? <BookmarkTagIcon tag={tag} className="size-3 shrink-0" /> : null}
						{getBookmarkTagLabel(tag)}
					</Button>
				)
			})}
		</div>
	)
}
