import { getBlogPosts } from "@/utils/get-blog-posts"

import { Container } from "@/shared/container"
import { BlogList } from "@/widgets/blog-list"
import { Title } from "@/ui/title"
import { BlogPostTypes } from "@/types"

export default function Blog() {
	const articles: BlogPostTypes[] = getBlogPosts() || []

	return (
		<Container className="mt-10 md:mt-24 max-w-2xl">
			<Title tag="h1">Blog</Title>
			<Title tag="h2">Kişisel düşünce, deneyim ve yorumlarım</Title>

			<BlogList data={articles} />
		</Container>
	)
}
