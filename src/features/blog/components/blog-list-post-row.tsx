import { Link } from "@tanstack/react-router"

import { Badge } from "@/components/ui/badge"
import { BlogTagBadge } from "@/features/blog/components/blog-tag-badge"
import {
	BLOG_CATEGORY_LABELS,
	BLOG_UI
} from "@/features/blog/constants/blog.constants"
import {
	formatBlogDate,
	slugToRouteParam
} from "@/features/blog/helpers/blog-helpers"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { cn } from "@/lib/utils"

type BlogListPostRowProps = {
	post: BlogPost
	showDraftBadge?: boolean
	className?: string
}

export function BlogListPostRow({
	post,
	showDraftBadge = false,
	className
}: BlogListPostRowProps) {
	const visibleTags = post.tags.slice(0, BLOG_UI.maxVisibleTags)

	return (
		<article
			className={cn(
				"grid grid-cols-[auto_1fr] items-start gap-x-4 gap-y-1",
				className
			)}
		>
			<div className="flex shrink-0 flex-col gap-1">
				<time
					className="text-muted-foreground pt-0.5 text-sm tabular-nums"
					dateTime={post.publishedAt}
				>
					{formatBlogDate(post.publishedAt)}
				</time>
				{post.locale === "en" ? (
					<Badge variant="outline" title={BLOG_UI.englishTooltip}>
						{BLOG_UI.englishBadge}
					</Badge>
				) : null}
				{showDraftBadge && !post.published ? (
					<Badge variant="secondary">{BLOG_UI.draftBadge}</Badge>
				) : null}
			</div>
			<div className="min-w-0">
				<h2 className="text-base leading-7 font-normal">
					<Link
						to="/blog/$slug"
						params={{ slug: slugToRouteParam(post.slug) }}
						className="text-foreground hover:text-primary transition-colors hover:underline"
					>
						{post.title}
					</Link>
				</h2>
				<p className="text-muted-foreground mt-1 text-sm leading-6">
					{post.description}
				</p>
				<div className="mt-2 flex flex-wrap items-center gap-2">
					<span className="text-muted-foreground text-xs">
						{BLOG_CATEGORY_LABELS[post.category]}
					</span>
					{visibleTags.map((tag) => (
						<BlogTagBadge key={tag} tag={tag} />
					))}
				</div>
			</div>
		</article>
	)
}
