import { Fragment, type ReactNode } from "react"
import { ChevronRight, Languages, Star } from "lucide-react"

import { withOutboundUtm } from "@/lib/outbound-url"
import { cn } from "@/lib/utils"

import {
	interactiveCardChevronClass,
	interactiveListRowBleedClass,
	interactiveListRowClass
} from "@/components/shared/interactive-card.styles"
import { listTitleClass } from "@/components/shared/prose.styles"
import { Badge } from "@/components/ui/badge"
import { Medium } from "@/components/ui/svgs/medium"
import { BlogPostLink } from "@/features/blog/components/BlogPostLink"
import { BlogTagBadge } from "@/features/blog/components/BlogTagBadge"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { formatBlogDate } from "@/features/blog/helpers/blog-helpers"
import type { BlogPost } from "@/features/blog/types/blog.types"

type MetaLabel = { key: string; node: ReactNode }

type BlogListPostRowProps = {
	post: BlogPost
	showDraftBadge?: boolean
	isFeatured?: boolean
	className?: string
}

export function BlogListPostRow({
	post,
	showDraftBadge = false,
	isFeatured = false,
	className
}: BlogListPostRowProps) {
	const visibleTags = post.tags.slice(0, BLOG_UI.maxVisibleTags)
	const hiddenTags = post.tags.slice(BLOG_UI.maxVisibleTags)
	const hiddenTagCount = hiddenTags.length
	// Facts about the post itself (status, language, format) share the date row; topic tags stay below.
	const metaLabelCandidates: (MetaLabel | false | undefined)[] = [
		isFeatured && {
			key: "featured",
			node: (
				<span className="flex items-center gap-1 text-xs text-amber-700 dark:text-amber-400">
					<Star
						className="size-3 shrink-0 fill-amber-400 text-amber-500"
						aria-hidden
					/>
					{BLOG_UI.featuredLabel}
				</span>
			)
		},
		post.locale === "en" && {
			key: "english",
			node: (
				<span
					className="text-muted-foreground flex items-center gap-1 text-xs"
					title={BLOG_UI.englishTooltip}
				>
					<Languages
						className="size-3.5 shrink-0 text-blue-600 dark:text-blue-400"
						aria-hidden
					/>
					{BLOG_UI.englishLabel}
				</span>
			)
		},
		post.interactive && {
			key: "interactive",
			node: (
				<span className="text-muted-foreground flex items-center gap-1 text-xs">
					<span className="text-sm leading-none" aria-hidden>
						✨
					</span>
					{BLOG_UI.interactiveLabel}
				</span>
			)
		},
		showDraftBadge &&
			!post.published && {
				key: "draft",
				node: <Badge variant="secondary">{BLOG_UI.draftBadge}</Badge>
			},
		Boolean(post.mediumUrl) && {
			key: "medium",
			node: (
				<a
					href={withOutboundUtm(post.mediumUrl ?? "")}
					target="_blank"
					rel="noopener noreferrer"
					className="hit-area focus-link text-muted-foreground hover:text-foreground pointer-events-auto -my-1 inline-flex items-center gap-1 py-1 text-xs transition-colors"
					title={BLOG_UI.mediumLinkLabel}
				>
					<Medium className="size-3.5 shrink-0" aria-hidden />
					{BLOG_UI.mediumLinkShortLabel}
				</a>
			)
		}
	]
	const metaLabels = metaLabelCandidates.filter((label): label is MetaLabel =>
		Boolean(label)
	)

	return (
		<article
			className={cn(
				interactiveListRowClass,
				"relative flex flex-col gap-1 md:gap-1.5",
				interactiveListRowBleedClass,
				className
			)}
		>
			<BlogPostLink
				category={post.category}
				slug={post.slug}
				className="absolute inset-0 z-0 rounded-xl"
				aria-label={post.title}
			/>
			<div className="pointer-events-none relative z-10 flex w-full flex-wrap items-center gap-x-2 gap-y-1">
				<time
					className="text-muted-foreground font-mono text-xs tabular-nums md:text-sm"
					dateTime={post.publishedAt}
				>
					{formatBlogDate(post.publishedAt)}
				</time>
				{metaLabels.map((label) => (
					<Fragment key={label.key}>
						<span className="text-muted-foreground text-xs" aria-hidden>
							·
						</span>
						{label.node}
					</Fragment>
				))}
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
				{visibleTags.length > 0 ? (
					<div className="mt-2 flex flex-wrap items-center gap-2">
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
					</div>
				) : null}
			</div>
		</article>
	)
}
