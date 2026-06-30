import { Button } from "@/components/ui/button"
import {
	BLOG_SORT_LABELS,
	BLOG_SORT_OPTIONS,
	BLOG_UI
} from "@/features/blog/constants/blog.constants"
import type { BlogSort } from "@/features/blog/types/blog.types"
import { cn } from "@/lib/utils"

type BlogSortControlProps = {
	value: BlogSort
	onChange: (sort: BlogSort) => void
	className?: string
}

export function BlogSortControl({
	value,
	onChange,
	className
}: BlogSortControlProps) {
	return (
		<div
			className={cn("flex flex-wrap gap-2", className)}
			role="group"
			aria-label={BLOG_UI.sortAriaLabel}
		>
			{BLOG_SORT_OPTIONS.map((option) => {
				const isActive = value === option

				return (
					<Button
						key={option}
						type="button"
						size="xs"
						variant={isActive ? "secondary" : "outline"}
						aria-pressed={isActive}
						onClick={() => onChange(option)}
					>
						{BLOG_SORT_LABELS[option]}
					</Button>
				)
			})}
		</div>
	)
}
