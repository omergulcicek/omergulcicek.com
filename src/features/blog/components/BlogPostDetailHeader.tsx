import { ChevronLeft } from "lucide-react"

import { ProseRouterLink } from "@/components/shared/ProseRouterLink"
import { getBlogSection } from "@/features/blog/helpers/blog-helpers"
import type { BlogCategory } from "@/features/blog/types/blog.types"

type BlogPostDetailHeaderProps = {
	category: BlogCategory
}

export function BlogPostDetailHeader({ category }: BlogPostDetailHeaderProps) {
	const section = getBlogSection(category)

	return (
		<div className="flex items-center">
			<ProseRouterLink
				to={section.path}
				variant="muted"
				className="inline-flex items-center gap-1"
			>
				<ChevronLeft className="size-4 shrink-0" aria-hidden />
				{section.title}
			</ProseRouterLink>
		</div>
	)
}
