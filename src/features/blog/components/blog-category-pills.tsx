import { Button } from "@/components/ui/button"
import { BLOG_CATEGORY_OPTIONS, BLOG_UI } from "@/features/blog/constants/blog.constants"
import { blogFilterChipDesktopClass } from "@/features/blog/constants/blog-filter-chip.styles"
import type { BlogCategory } from "@/features/blog/types/blog.types"
import { cn } from "@/lib/utils"

type BlogCategoryPillsProps = {
	value: BlogCategory | null
	onChange: (category: BlogCategory | null) => void
	className?: string
}

export function BlogCategoryPills({
	value,
	onChange,
	className
}: BlogCategoryPillsProps) {
	return (
		<div
			className={cn("flex flex-wrap gap-2", className)}
			role="group"
			aria-label={BLOG_UI.categoryAriaLabel}
		>
			{BLOG_CATEGORY_OPTIONS.map((option) => {
				const isActive = value === option.value

				return (
					<Button
						key={option.label}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						className={blogFilterChipDesktopClass}
						onClick={() => onChange(option.value)}
					>
						{option.label}
					</Button>
				)
			})}
		</div>
	)
}
