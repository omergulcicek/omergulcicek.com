import { Button } from "@/components/ui/button"
import { BlogTagIcon } from "@/features/blog/components/blog-tag-icon"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { blogFilterChipWithIconDesktopClass } from "@/features/blog/constants/blog-filter-chip.styles"
import { cn } from "@/lib/utils"

type BlogTagChipsProps = {
	tags: readonly string[]
	selectedTag: string | null
	onSelect: (tag: string) => void
	className?: string
}

export function BlogTagChips({
	tags,
	selectedTag,
	onSelect,
	className
}: BlogTagChipsProps) {
	if (tags.length === 0) {
		return null
	}

	return (
		<div
			className={cn("flex flex-wrap gap-2", className)}
			role="group"
			aria-label={BLOG_UI.tagAriaLabel}
		>
			{tags.map((tag) => {
				const isActive = selectedTag === tag

				return (
					<Button
						key={tag}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						className={blogFilterChipWithIconDesktopClass}
						onClick={() => onSelect(tag)}
					>
						<BlogTagIcon tag={tag} className="size-3 shrink-0" />
						{tag}
					</Button>
				)
			})}
		</div>
	)
}
