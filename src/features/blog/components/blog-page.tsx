import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { BlogList } from "@/features/blog/components/blog-list"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogPost } from "@/features/blog/types/blog.types"

type BlogPageProps = {
	posts: BlogPost[]
	isDev: boolean
}

export function BlogPage({ posts, isDev }: BlogPageProps) {
	return (
		<Container className="flex flex-col py-10 md:py-16">
			<PageHeader title={BLOG_UI.pageTitle}>
				<p className={proseParagraphClass}>{BLOG_UI.pageDescription}</p>
			</PageHeader>
			<BlogList posts={posts} isDev={isDev} className="mt-4" />
		</Container>
	)
}
