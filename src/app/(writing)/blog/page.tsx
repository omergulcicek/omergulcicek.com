import getPostMetadata from "@/utils/get-blogs"

import { Container } from "@/shared/container"
import { BlogList } from "@/widgets/blog-list"
import { Title } from "@/ui/title"

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Kişisel düşünce, deneyim ve yorumlarım | Ömer Gülçiçek",
  description: "Kişisel düşünce, deneyim ve yorumlarım",
	alternates: {
		canonical: 'https://omergulcicek.com/blog/',
	}
}

export default async function Blog() {
	const articles = await getPostMetadata()

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
