import Container from "@/shared/container"
import { BlogList } from "@/widgets/blog-list"
import Title from "@/ui/title"

export default function Blog() {
	return (
		<Container className="mt-10 md:mt-24 max-w-2xl">
			<Title tag="h1">Blog</Title>
			<Title tag="h2">Kişisel düşünce, deneyim ve yorumlarım</Title>

			<BlogList />
		</Container>
	)
}
