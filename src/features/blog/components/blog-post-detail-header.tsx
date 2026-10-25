import { ChevronLeft, ChevronRight } from "lucide-react"

import { ProseRouterLink } from "@/components/shared/prose-link"
import { Button } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { BlogPostLink } from "@/features/blog/components/blog-section-links"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import { getBlogSection } from "@/features/blog/helpers/blog-helpers"
import type { BlogCategory } from "@/features/blog/types/blog.types"

type BlogPostDetailHeaderProps = {
	category: BlogCategory
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
}

type BlogNeighbourButtonProps = {
	category: BlogCategory
	neighbour: BlogNeighbour
	direction: "previous" | "next"
}

function BlogNeighbourButton({
	category,
	neighbour,
	direction
}: BlogNeighbourButtonProps) {
	const Icon = direction === "previous" ? ChevronLeft : ChevronRight
	const navLabel =
		direction === "previous" ? BLOG_UI.previousPost : BLOG_UI.nextPost

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="secondary" size="icon-sm" asChild>
					<BlogPostLink
						category={category}
						slug={neighbour.slug}
						aria-label={`${navLabel}: ${neighbour.title}`}
					>
						<Icon aria-hidden />
					</BlogPostLink>
				</Button>
			</TooltipTrigger>
			<TooltipContent side="top">{neighbour.title}</TooltipContent>
		</Tooltip>
	)
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
