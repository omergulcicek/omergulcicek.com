import { getBlogPosts } from "@/utils/get-blog-posts"
import getPostMetadata from "@/utils/get-blogs"

import { Container } from "@/shared/container"
import { BlogList } from "@/widgets/blog-list"
import { Title } from "@/ui/title"
import { BlogPostTypes } from "@/types"

export default async function Blog() {
	// const articles: BlogPostTypes[] = getBlogPosts() || []

	const articles = getPostMetadata()

	console.log(articles)

	return (
		<Container className="mt-10 md:mt-24 max-w-2xl">
			<Title tag="h1">Blog</Title>
			<Title tag="h2" className="text-tertiary-foreground">
				Kişisel düşünce, deneyim ve yorumlarım
			</Title>

			<BlogList data={articles} />
		</Container>
	)
}
