import { Link } from "@tanstack/react-router"
import { ChevronRight, Languages } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Medium } from "@/components/ui/svgs/medium"
import {
	interactiveCardChevronClass,
	interactiveListRowBleedClass,
	interactiveListRowClass
} from "@/components/shared/interactive-card.styles"
import { BlogTagBadge } from "@/features/blog/components/blog-tag-badge"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import {
	formatBlogDate,
	slugToRouteParam
} from "@/features/blog/helpers/blog-helpers"
import { listTitleClass } from "@/components/shared/prose.styles"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { withOutboundUtm } from "@/lib/outbound-url"
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
	const hiddenTags = post.tags.slice(BLOG_UI.maxVisibleTags)
	const hiddenTagCount = hiddenTags.length

	return (
		<article
			className={cn(
				interactiveListRowClass,
				"relative flex flex-col gap-1 md:gap-1.5",
				interactiveListRowBleedClass,
				className
			)}
		>
			<Link
				to="/blog/$slug"
				params={{ slug: slugToRouteParam(post.slug) }}
				className="absolute inset-0 z-0 rounded-xl"
				aria-label={post.title}
			/>
			<div className="pointer-events-none relative z-10 flex w-full shrink-0 flex-col gap-1">
				<time
					className="text-muted-foreground text-xs md:text-sm"
					dateTime={post.publishedAt}
				>
					{formatBlogDate(post.publishedAt)}
				</time>
				{post.locale === "en" ? (
					<span
						className="text-muted-foreground flex items-center gap-1 text-xs"
						title={BLOG_UI.englishTooltip}
					>
						<Languages
							className="size-4 shrink-0 text-blue-600 dark:text-blue-400"
							aria-hidden
						/>
						<span>{BLOG_UI.englishLabel}</span>
					</span>
				) : null}
				{showDraftBadge && !post.published ? (
					<Badge variant="secondary">{BLOG_UI.draftBadge}</Badge>
				) : null}
			</div>
			<div className="pointer-events-none relative z-10 min-w-0 w-full">
				<div className="flex items-start gap-2">
					<h2 className={listTitleClass}>{post.title}</h2>
					<ChevronRight
						className={cn(interactiveCardChevronClass, "mt-1.5")}
						aria-hidden
					/>
				</div>
				<p className="text-muted-foreground mt-1 text-pretty text-xs leading-5 md:text-sm md:leading-6">
					{post.description}
				</p>
				{post.interactive ||
				visibleTags.length > 0 ||
				post.mediumUrl ? (
					<div className="mt-2 flex flex-wrap items-center gap-2">
						{post.interactive ? (
							<span className="text-muted-foreground flex items-center gap-1 text-xs">
								<span className="text-sm leading-none" aria-hidden>
									✨
								</span>
								<span>{BLOG_UI.interactiveLabel}</span>
							</span>
						) : null}
						{visibleTags.map((tag) => (
							<BlogTagBadge key={tag} tag={tag} />
						))}
						{hiddenTagCount > 0 ? (
							<Badge
								variant="outline"
								className="text-muted-foreground tabular-nums"
								title={hiddenTags.join(", ")}
							>
								+{hiddenTagCount}
							</Badge>
						) : null}
						{post.mediumUrl ? (
							<a
								href={withOutboundUtm(post.mediumUrl)}
								target="_blank"
								rel="noopener noreferrer"
							className="focus-link text-foreground hover:text-foreground/80 pointer-events-auto inline-flex size-6 items-center justify-center transition-colors"
							aria-label={BLOG_UI.mediumLinkLabel}
							title={BLOG_UI.mediumLinkLabel}
						>
							<Medium className="size-4 shrink-0" aria-hidden />
							</a>
						) : null}
					</div>
				) : null}
			</div>
		</article>
	)
}
