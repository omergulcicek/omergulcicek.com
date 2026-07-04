import { Link } from "@tanstack/react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ProseRouterLink } from "@/components/shared/prose-link"
import { Button } from "@/components/ui/button"
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/components/ui/tooltip"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"

type BlogPostDetailHeaderProps = {
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
}

type BlogNeighbourButtonProps = {
	neighbour: BlogNeighbour
	direction: "previous" | "next"
}

function BlogNeighbourButton({ neighbour, direction }: BlogNeighbourButtonProps) {
	const Icon = direction === "previous" ? ChevronLeft : ChevronRight
	const navLabel =
		direction === "previous" ? BLOG_UI.previousPost : BLOG_UI.nextPost

	return (
		<Tooltip>
			<TooltipTrigger asChild>
				<Button variant="secondary" size="icon-sm" asChild>
					<Link
						to="/blog/$slug"
						params={{ slug: slugToRouteParam(neighbour.slug) }}
						aria-label={`${navLabel}: ${neighbour.title}`}
					>
						<Icon aria-hidden />
					</Link>
				</Button>
			</TooltipTrigger>
			<TooltipContent side="top">{neighbour.title}</TooltipContent>
		</Tooltip>
	)
}

export function BlogPostDetailHeader({
	previous,
	next
}: BlogPostDetailHeaderProps) {
	return (
		<div className="flex items-center justify-between gap-4">
			<ProseRouterLink
				to="/blog"
				variant="muted"
				className="inline-flex items-center gap-1"
			>
				<ChevronLeft className="size-4 shrink-0" aria-hidden />
				{BLOG_UI.pageTitle}
			</ProseRouterLink>

			{previous || next ? (
				<div className="flex items-center gap-2">
					{previous ? (
						<BlogNeighbourButton neighbour={previous} direction="previous" />
					) : null}
					{next ? (
						<BlogNeighbourButton neighbour={next} direction="next" />
					) : null}
				</div>
			) : null}
		</div>
	)
}
