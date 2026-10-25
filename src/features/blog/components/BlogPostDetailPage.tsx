import { cn } from "@/lib/utils"

import { Container } from "@/components/shared/Container"
import {
	pageShellClass,
	pageStackGapClass,
	pageTitleClass
} from "@/components/shared/prose.styles"
import { StaggerContainer } from "@/components/shared/StaggerContainer"
import { StaggerItem } from "@/components/shared/StaggerItem"
import { BlogPostDetailHeader } from "@/features/blog/components/BlogPostDetailHeader"
import { BlogPostEnd } from "@/features/blog/components/BlogPostEnd"
import { BlogPostMeta } from "@/features/blog/components/BlogPostMeta"
import { BlogPostToc } from "@/features/blog/components/BlogPostToc"
import { BlogProse } from "@/features/blog/components/BlogProse"
import { BlogShareActions } from "@/features/blog/components/BlogShareActions"
import { BlogStructuredData } from "@/features/blog/components/BlogStructuredData"
import type { BlogNeighbour } from "@/features/blog/helpers/blog-helpers"
import { getBlogPostPath } from "@/features/blog/helpers/blog-helpers"
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
	const sharePath = getBlogPostPath(post.slug, post.category)

	return (
		<>
			<BlogStructuredData post={post} />
			<div className={pageShellClass}>
				<Container>
					<StaggerContainer className={cn("flex flex-col", pageStackGapClass)}>
						<StaggerItem>
							<BlogPostDetailHeader category={post.category} />
						</StaggerItem>
						<StaggerItem data-blog-article className="flex flex-col gap-4">
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
										<BlogShareActions path={sharePath} title={post.title} />
									}
								/>
							</header>
							<BlogPostToc headings={post.headings} />
							<BlogProse key={post.slug} html={post.contentHtml} />
						</StaggerItem>
						<StaggerItem>
							<BlogPostEnd
								category={post.category}
								sharePath={sharePath}
								title={post.title}
								previous={previous}
								next={next}
							/>
						</StaggerItem>
					</StaggerContainer>
				</Container>
			</div>
		</>
	)
}
