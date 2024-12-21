import getPostMetadata from "@/utils/get-blogs"

import { Container } from "@/shared/container"
import { BlogList } from "@/widgets/blog-list"
import { Title } from "@/ui/title"

export default async function Blog() {
	const articles = getPostMetadata()

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
