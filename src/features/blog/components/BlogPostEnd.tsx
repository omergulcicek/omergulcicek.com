import { cn } from "@/lib/utils"

import {
	cardGridGapClass,
	pageSectionClass
} from "@/components/shared/prose.styles"
import { BlogNeighbourCard } from "@/features/blog/components/BlogNeighbourCard"
import { BlogShareActions } from "@/features/blog/components/BlogShareActions"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import type { BlogCategory } from "@/features/blog/types/blog.types"

type BlogPostEndProps = {
	category: BlogCategory
	sharePath: string
	title: string
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
}

/** What a reader sees after the last line: share again, then move to a neighbouring post. */
export function BlogPostEnd({
	category,
	sharePath,
	title,
	previous,
	next
}: BlogPostEndProps) {
	return (
		<footer className={pageSectionClass}>
			<div className="flex justify-end">
				<BlogShareActions path={sharePath} title={title} />
			</div>
			{previous || next ? (
				<nav
					aria-label={BLOG_UI.postNavigationAriaLabel}
					className={cn("grid sm:grid-cols-2", cardGridGapClass)}
				>
					{previous ? (
						<BlogNeighbourCard
							category={category}
							neighbour={previous}
							direction="previous"
						/>
					) : null}
					{next ? (
						<BlogNeighbourCard
							category={category}
							neighbour={next}
							direction="next"
						/>
					) : null}
				</nav>
			) : null}
		</footer>
	)
}
