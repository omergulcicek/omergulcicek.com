import { Link } from "@tanstack/react-router"

import { ArrowLink } from "@/components/shared/ArrowLink"
import { pageSectionClass } from "@/components/shared/prose.styles"
import { SectionHeading } from "@/components/shared/SectionHeading"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import { HOME_FEATURED_BLOG_PLACEHOLDER } from "@/features/home/constants/home-blog.constants"

function formatBlogDate(value: string) {
	const [year, month, day] = value.split("-")
	return `${day}/${month}/${year.slice(2)}`
}

export function FeaturedBlog() {
	return (
		<section className={pageSectionClass}>
			<SectionHeading>{SITE_CONTENT.homeSections.blog}</SectionHeading>
			<nav className="flex flex-col items-start gap-6" aria-label="Son blog yazıları">
				{HOME_FEATURED_BLOG_PLACEHOLDER.map((post) => (
					<Link
						key={post.slug}
						to="/blog/$slug"
						params={{ slug: post.slug.replace(/^\//, "") }}
						className="group flex w-full items-start gap-4"
					>
						<span className="text-muted-foreground shrink-0 text-sm tabular-nums">
							{formatBlogDate(post.publishedAt)}
						</span>
						<h3 className="text-foreground group-hover:text-primary text-base leading-7 transition-colors group-hover:underline">
							{post.title}
						</h3>
					</Link>
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
