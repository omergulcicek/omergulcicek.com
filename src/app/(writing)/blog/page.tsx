import type { Metadata } from "next"

import { Container } from "@/shared/container"
import { BlogList } from "@/widgets/blog-list"

import getPostMetadata from "@/utils/get-blogs"

export const metadata: Metadata = {
	title: "Kişisel düşünce, deneyim ve yorumlarım | Ömer Gülçiçek",
	description: "Kişisel düşünce, deneyim ve yorumlarım",
	alternates: {
		canonical: "https://omergulcicek.com/blog/"
	}
}

export default async function Blog() {
	const articles = await getPostMetadata()

	const articleCounts = {
		personal: articles.filter((e) => e.category === "Kişisel")?.length,
		technical: articles.filter((e) => e.category === "Teknik")?.length
	}

	return (
		<Container className="mt-10 md:mt-24 max-w-3xl">
			<BlogList data={articles} articleCounts={articleCounts} />
		</Container>
	)
}
