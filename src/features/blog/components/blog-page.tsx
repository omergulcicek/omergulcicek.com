import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { proseParagraphClass } from "@/components/shared/prose.styles"
import { BlogList } from "@/features/blog/components/blog-list"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { MOCK_BLOG_POSTS } from "@/features/blog/constants/mock-blog-posts.constants"
import { getVisiblePosts } from "@/features/blog/helpers/blog-helpers"

export function BlogPage() {
	const posts = getVisiblePosts(MOCK_BLOG_POSTS, import.meta.env.DEV)

	return (
		<Container className="flex flex-col gap-10 py-10 md:gap-12 md:py-16">
			<PageHeader title={BLOG_UI.pageTitle}>
				<p className={proseParagraphClass}>{BLOG_UI.pageDescription}</p>
			</PageHeader>
			<BlogList posts={posts} isDev={import.meta.env.DEV} />
		</Container>
	)
}
