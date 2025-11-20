import { Suspense } from "react"
import type { Metadata } from "next"

import type { BlogPostType } from "@/types/blog.type"

import { Container } from "@/shared"
import { BlogList, Section } from "@/widgets"

import { getAllPosts, getFuturePosts } from "@/data/blog.data"

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Teknik, fikir ve yorumlar üzerine makalelerden oluşan bir koleksiyon"
}

export default function Blog() {
	const allPosts = getAllPosts() as BlogPostType[]
	const futurePosts =
		process.env.NODE_ENV === "production"
			? ([] as BlogPostType[])
			: (getFuturePosts() as BlogPostType[])

	return (
		<Container>
			<Section title="Blog">
				<Suspense fallback={<></>}>
					<BlogList allPosts={allPosts} futurePosts={futurePosts} />
				</Suspense>
			</Section>
		</Container>
	)
}
