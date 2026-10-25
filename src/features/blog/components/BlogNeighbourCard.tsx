import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"

import { getInteractiveCardClassName } from "@/components/shared/interactive-card.styles"
import { cardTitleClass } from "@/components/shared/prose.styles"
import { BlogPostLink } from "@/features/blog/components/BlogPostLink"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import type { BlogCategory } from "@/features/blog/types/blog.types"

type BlogNeighbourCardProps = {
	category: BlogCategory
	neighbour: BlogNeighbour
	direction: "previous" | "next"
}

export function BlogNeighbourCard({
	category,
	neighbour,
	direction
}: BlogNeighbourCardProps) {
	const isNext = direction === "next"
	const Icon = isNext ? ChevronRight : ChevronLeft

	return (
		<BlogPostLink
			category={category}
			slug={neighbour.slug}
			className={cn(
				getInteractiveCardClassName(),
				"gap-1 md:gap-1",
				isNext && "sm:col-start-2 sm:items-end sm:text-right"
			)}
		>
			<span
				className={cn(
					"text-muted-foreground inline-flex items-center gap-1 text-xs",
					isNext && "flex-row-reverse"
				)}
			>
				<Icon className="size-3.5 shrink-0" aria-hidden />
				{isNext ? BLOG_UI.nextPost : BLOG_UI.previousPost}
			</span>
			<span className={cn(cardTitleClass, "text-pretty")}>
				{neighbour.title}
			</span>
		</BlogPostLink>
	)
}
