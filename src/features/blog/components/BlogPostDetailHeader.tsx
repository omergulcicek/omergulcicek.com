import { ChevronLeft } from "lucide-react"

import { ProseRouterLink } from "@/components/shared/ProseRouterLink"
import { BlogNeighbourButton } from "@/features/blog/components/BlogNeighbourButton"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import { getBlogSection } from "@/features/blog/helpers/blog-helpers"
import type { BlogCategory } from "@/features/blog/types/blog.types"

type BlogPostDetailHeaderProps = {
	category: BlogCategory
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
}

export function BlogPostDetailHeader({
	category,
	previous,
	next
}: BlogPostDetailHeaderProps) {
	const section = getBlogSection(category)

	return (
		<div className="flex items-center justify-between gap-4">
			<ProseRouterLink
				to={section.path}
				variant="muted"
				className="inline-flex items-center gap-1"
			>
				<ChevronLeft className="size-4 shrink-0" aria-hidden />
				{section.title}
			</ProseRouterLink>

			{previous || next ? (
				<div className="flex items-center gap-2">
					{previous ? (
						<BlogNeighbourButton
							category={category}
							neighbour={previous}
							direction="previous"
						/>
					) : null}
					{next ? (
						<BlogNeighbourButton
							category={category}
							neighbour={next}
							direction="next"
						/>
					) : null}
				</div>
			) : null}
		</div>
	)
}
