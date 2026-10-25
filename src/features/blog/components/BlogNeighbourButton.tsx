import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { BlogPostLink } from "@/features/blog/components/BlogPostLink"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import type { BlogCategory } from "@/features/blog/types/blog.types"

export type BlogNeighbourButtonProps = {
	category: BlogCategory
	neighbour: BlogNeighbour
	direction: "previous" | "next"
}

export function BlogNeighbourButton({
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
