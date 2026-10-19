import { Link } from "@tanstack/react-router"

import { blogNavSearch } from "@/lib/router/cleared-route-search"
import { ArrowLink } from "@/components/shared/ArrowLink"
import { pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { BlogListPostRow } from "@/features/blog/components/blog-list-post-row"
import type { BlogPost } from "@/features/blog/types/blog.types"

type FeaturedBlogProps = {
	posts: BlogPost[]
}

export function FeaturedBlog({ posts }: FeaturedBlogProps) {
	return (
		<section className={pageSectionClass}>
			<SectionHeading>{SITE_CONTENT.homeSections.blog}</SectionHeading>
			<nav
				className="flex flex-col gap-2 md:gap-3"
				aria-label="Son teknik yazılar"
			>
				{posts.map((post) => (
					<BlogListPostRow key={post.slug} post={post} />
				))}
			</nav>
			<div className="flex justify-center">
				<Link
					to="/blog"
					search={blogNavSearch}
					className="group text-muted-foreground"
				>
					<ArrowLink>{SITE_CONTENT.homeBlogCta}</ArrowLink>
				</Link>
			</div>
		</section>
	)
}
