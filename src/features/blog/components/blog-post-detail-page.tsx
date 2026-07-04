import { cn } from "@/lib/utils"

import { Container } from "@/components/shared/Container"
import {
	pageShellClass,
	pageStackGapClass,
	pageTitleClass
} from "@/components/shared/prose.styles"
import { BlogPostDetailHeader } from "@/features/blog/components/blog-post-detail-header"
import { BlogPostMeta } from "@/features/blog/components/blog-post-meta"
import { BlogPostToc } from "@/features/blog/components/blog-post-toc"
import { BlogProse } from "@/features/blog/components/blog-prose"
import { BlogShareActionsBar } from "@/features/blog/components/blog-share-actions"
import { BlogStructuredData } from "@/features/blog/components/blog-structured-data"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"
import type { BlogPostDetail } from "@/features/blog/repositories/blog-repository.types"

type BlogPostDetailPageProps = {
	post: BlogPostDetail
	isDev: boolean
	previous: BlogNeighbour | null
	next: BlogNeighbour | null
}

export function BlogPostDetailPage({
	post,
	isDev,
	previous,
	next
}: BlogPostDetailPageProps) {
	const sharePath = `/blog/${slugToRouteParam(post.slug)}`

	return (
		<>
			<BlogStructuredData post={post} />
			<div className={pageShellClass}>
				<Container className={cn("flex flex-col", pageStackGapClass)}>
					<BlogPostDetailHeader previous={previous} next={next} />
					<article data-blog-article className="flex flex-col gap-4">
						<header className="flex flex-col gap-4">
							<h1
								className={cn(
									pageTitleClass,
									"text-balance text-xl md:text-2xl"
								)}
							>
								{post.title}
							</h1>
							<BlogPostMeta
								post={post}
								showDraftBadge={isDev}
								shareActions={
									<BlogShareActionsBar path={sharePath} title={post.title} />
								}
							/>
						</header>
						<BlogPostToc headings={post.headings} />
						<BlogProse key={post.slug} html={post.contentHtml} />
					</article>
				</Container>
			</div>
		</>
	)
}
