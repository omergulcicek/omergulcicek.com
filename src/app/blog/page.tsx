import type { Metadata } from "next"

import type { BlogPost } from "@/types/blog-type"

import { Container } from "@/shared"
import { BlogList, Section } from "@/widgets"

import { getAllPosts } from "@/data/blog-data"

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Teknik, fikir ve yorumlar üzerine makalelerden oluşan bir koleksiyon"
}

export default function Blog() {
	const allPosts = getAllPosts() as BlogPost[]

	return (
		<Container>
			<Section title="Blog">
				<BlogList allPosts={allPosts} />
			</Section>
		</Container>
	)
}
