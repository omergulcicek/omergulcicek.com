import type { ReactNode } from "react"

import { Badge } from "@/components/ui/badge"
import { Medium } from "@/components/ui/svgs/medium"
import { BlogTagBadge } from "@/features/blog/components/blog-tag-badge"
import {
	BLOG_CATEGORY_LABELS,
	BLOG_UI
} from "@/features/blog/constants/blog.constants"
import { formatBlogDate } from "@/features/blog/helpers/blog-helpers"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"
import { Calendar, Clock, Languages } from "lucide-react"

type BlogPostMetaProps = {
	post: BlogPost
	showDraftBadge?: boolean
	className?: string
	shareActions?: ReactNode
}

export function BlogPostMeta({
	post,
	showDraftBadge = false,
	className,
	shareActions
}: BlogPostMetaProps) {
	const visibleTags = post.tags.slice(0, BLOG_UI.maxVisibleTags)
	const hiddenTags = post.tags.slice(BLOG_UI.maxVisibleTags)
	const hiddenTagCount = hiddenTags.length
	const hasTagsRow = visibleTags.length > 0 || shareActions

	return (
		<div className={cn("flex flex-col gap-3", className)}>
			<div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
				<span className="inline-flex items-center gap-1.5">
					<Calendar className="size-4 shrink-0" aria-hidden />
					<time dateTime={post.publishedAt}>
						{formatBlogDate(post.publishedAt)}
					</time>
				</span>
				<span aria-hidden>·</span>
				<span>{BLOG_CATEGORY_LABELS[post.category]}</span>
				{post.readingTimeMinutes ? (
					<>
						<span aria-hidden>·</span>
						<span className="inline-flex items-center gap-1.5">
							<Clock className="size-4 shrink-0" aria-hidden />
							<span>{post.readingTimeMinutes} dk</span>
						</span>
					</>
				) : null}
				{post.locale === "en" ? (
					<>
						<span aria-hidden>·</span>
						<span
							className="inline-flex items-center gap-1.5"
							title={BLOG_UI.englishTooltip}
						>
							<Languages
								className="size-4 shrink-0 text-blue-600 dark:text-blue-400"
								aria-hidden
							/>
							<span>{BLOG_UI.englishLabel}</span>
						</span>
					</>
				) : null}
				{showDraftBadge && !post.published ? (
					<Badge variant="secondary">{BLOG_UI.draftBadge}</Badge>
				) : null}
				{post.mediumUrl ? (
					<>
						<span aria-hidden>·</span>
						<a
							href={withOutboundUtm(post.mediumUrl)}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={BLOG_UI.mediumLinkLabel}
							className="focus-link text-foreground hover:text-foreground/80 inline-flex items-center gap-1.5 transition-colors"
						>
							<Medium className="size-4 shrink-0" aria-hidden />
							<span className="sm:hidden">{BLOG_UI.mediumLinkShortLabel}</span>
							<span className="hidden sm:inline">
								{BLOG_UI.mediumLinkLabel}
							</span>
						</a>
					</>
				) : null}
			</div>

			{hasTagsRow ? (
				<div className="flex w-full flex-wrap items-center gap-x-3 gap-y-2">
					{visibleTags.length > 0 ? (
						<div className="flex min-w-0 flex-wrap items-center gap-2">
							{visibleTags.map((tag) => (
								<BlogTagBadge key={tag} tag={tag} linkable />
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
						</div>
					) : null}
					{shareActions ? (
						<div className="ml-auto shrink-0">{shareActions}</div>
					) : null}
				</div>
			) : null}
		</div>
	)
}
