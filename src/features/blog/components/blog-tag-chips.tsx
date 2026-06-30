import { Button } from "@/components/ui/button"
import { BlogTagIcon } from "@/features/blog/components/blog-tag-icon"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { cn } from "@/lib/utils"

type BlogTagChipsProps = {
	tags: readonly string[]
	selectedTags: string[]
	onToggle: (tag: string) => void
	className?: string
}

export function BlogTagChips({
	tags,
	selectedTags,
	onToggle,
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
				const isActive = selectedTags.includes(tag)

				return (
					<Button
						key={tag}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						onClick={() => onToggle(tag)}
					>
						<BlogTagIcon tag={tag} className="size-3 shrink-0" />
						{tag}
					</Button>
				)
			})}
		</div>
	)
}
