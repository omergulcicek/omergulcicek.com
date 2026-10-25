import { Link } from "@tanstack/react-router"

import { SITE_CONTENT } from "@/constants/site-content.constants"

import { ArrowLink } from "@/components/shared/ArrowLink"
import { pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { BlogListPostRow } from "@/features/blog/components/BlogListPostRow"
import type { BlogPost } from "@/features/blog/types/blog.types"

type LatestPostsSectionProps = {
	posts: BlogPost[]
}

export function LatestPostsSection({ posts }: LatestPostsSectionProps) {
	return (
		<section className={pageSectionClass}>
			<SectionHeading>{SITE_CONTENT.homeSections.blog}</SectionHeading>
			<nav
				className="flex flex-col gap-2 md:gap-3"
				aria-label={SITE_CONTENT.homeBlogAria}
			>
				{posts.map((post) => (
					<BlogListPostRow key={post.slug} post={post} />
				))}
			</nav>
			<div className="flex justify-center">
				<Link to="/blog" className="group text-muted-foreground">
					<ArrowLink>{SITE_CONTENT.homeBlogCta}</ArrowLink>
				</Link>
			</div>
		</section>
	)
}
