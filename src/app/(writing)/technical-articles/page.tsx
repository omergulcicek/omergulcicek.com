import { getBlogPosts } from "@/utils/get-blog-posts"

import { Container } from "@/shared/container"
import { BlogList } from "@/widgets/blog-list"
import { Title } from "@/ui/title"
import { BlogPostTypes } from "@/types"

export default function TechnicalArticles() {
	const articles: BlogPostTypes[] =
		getBlogPosts()?.filter((post) => post.category === "Yazılım") || []

	return (
		<Container className="mt-10 md:mt-24 max-w-2xl">
			<Title tag="h1">Teknik Yazılar</Title>
			<Title tag="h2" className="text-tertiary-foreground">
				HTML, CSS, JavaScript, ES6+, React, NextJS
			</Title>

			<BlogList data={articles} />
		</Container>
	)
}
