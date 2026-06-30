import { Link } from "@tanstack/react-router"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { ProseRouterLink } from "@/components/shared/prose-link"
import { Button } from "@/components/ui/button"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"
type BlogPostDetailHeaderProps = {
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
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
						<Button
							variant="secondary"
							size="icon-sm"
							asChild
							title={previous.title}
						>
							<Link
								to="/blog/$slug"
								params={{ slug: slugToRouteParam(previous.slug) }}
								aria-label={`${BLOG_UI.previousPost}: ${previous.title}`}
							>
								<ChevronLeft aria-hidden />
							</Link>
						</Button>
					) : null}
					{next ? (
						<Button
							variant="secondary"
							size="icon-sm"
							asChild
							title={next.title}
						>
							<Link
								to="/blog/$slug"
								params={{ slug: slugToRouteParam(next.slug) }}
								aria-label={`${BLOG_UI.nextPost}: ${next.title}`}
							>
								<ChevronRight aria-hidden />
							</Link>
						</Button>
					) : null}
				</div>
			) : null}
		</div>
	)
}
