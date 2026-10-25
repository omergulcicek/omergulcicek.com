import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BlogTagIcon } from "@/features/blog/components/blog-tag-icon"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { blogFilterChipWithIconDesktopClass } from "@/features/blog/constants/blog-filter-chip.styles"
import { cn } from "@/lib/utils"

type BlogTagChipsProps = {
	tags: readonly string[]
	tagCounts: ReadonlyMap<string, number>
	featuredCount: number
	isFeaturedActive: boolean
	onFeaturedToggle: () => void
	selectedTag: string | null
	onSelect: (tag: string) => void
	className?: string
}

export function BlogTagChips({
	tags,
	tagCounts,
	featuredCount,
	isFeaturedActive,
	onFeaturedToggle,
	selectedTag,
	onSelect,
	className
}: BlogTagChipsProps) {
	if (tags.length === 0 && featuredCount === 0) {
		return null
	}

	return (
		<div
			className={cn(
				"flex gap-2 overflow-x-auto [scrollbar-width:none] md:flex-wrap md:overflow-visible [&::-webkit-scrollbar]:hidden",
				className
			)}
			role="group"
			aria-label={BLOG_UI.tagAriaLabel}
		>
			{featuredCount > 0 ? (
				<Button
					type="button"
					size="xs"
					variant={isFeaturedActive ? "secondary" : "outline"}
					aria-pressed={isFeaturedActive}
					className={cn("shrink-0", blogFilterChipWithIconDesktopClass)}
					onClick={onFeaturedToggle}
				>
					<Star
						className="size-3 shrink-0 fill-amber-400 text-amber-500"
						aria-hidden
					/>
					{BLOG_UI.featuredLabel}
					<span className="text-muted-foreground tabular-nums">
						{featuredCount}
					</span>
				</Button>
			) : null}
			{tags.map((tag) => {
				const isActive = selectedTag === tag

				return (
					<Button
						key={tag}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						className={cn("shrink-0", blogFilterChipWithIconDesktopClass)}
						onClick={() => onSelect(tag)}
					>
						<BlogTagIcon tag={tag} className="size-3 shrink-0" />
						{tag}
						<span className="text-muted-foreground tabular-nums">
							{tagCounts.get(tag) ?? 0}
						</span>
					</Button>
				)
			})}
		</div>
	)
}
