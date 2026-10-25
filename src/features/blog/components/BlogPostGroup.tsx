import { cn } from "@/lib/utils"

import { AnchoredHeading } from "@/components/shared/AnchoredHeading"
import { pageSectionClass } from "@/components/shared/prose.styles"
import { BlogListPostRow } from "@/features/blog/components/BlogListPostRow"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogPost } from "@/features/blog/types/blog.types"

type BlogPostGroupProps = {
	id: string
	heading: string
	posts: BlogPost[]
	featuredSlugs?: ReadonlySet<string>
	showDraftBadge?: boolean
	headingClassName?: string
}

/** One titled group in the blog list: a year or the dev-only drafts. */
export function BlogPostGroup({
	id,
	heading,
	posts,
	featuredSlugs,
	showDraftBadge = false,
	headingClassName
}: BlogPostGroupProps) {
	return (
		<section className={pageSectionClass}>
			<AnchoredHeading
				as="h2"
				id={id}
				anchorLabel={BLOG_UI.sectionAnchorLabel(heading)}
				className={cn(
					"text-muted-foreground text-sm font-medium",
					headingClassName
				)}
			>
				{heading}
			</AnchoredHeading>
			<div className="flex flex-col gap-3 overflow-visible">
				{posts.map((post) => (
					<BlogListPostRow
						key={post.slug}
						post={post}
						showDraftBadge={showDraftBadge}
						isFeatured={featuredSlugs?.has(post.slug)}
					/>
				))}
			</div>
		</section>
	)
}
