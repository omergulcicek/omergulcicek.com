import { Button } from "@/components/ui/button"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"

type BlogEmptyStateProps = {
	onClearFilters: () => void
}

export function BlogEmptyState({ onClearFilters }: BlogEmptyStateProps) {
	return (
		<div className="flex flex-col items-start gap-3">
			<p className="text-muted-foreground text-sm">{BLOG_UI.emptyState}</p>
			<Button type="button" variant="outline" size="sm" onClick={onClearFilters}>
				{BLOG_UI.clearFilters}
			</Button>
		</div>
	)
}
