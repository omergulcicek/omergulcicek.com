import type { Metadata } from "next"
import Link from "next/link"

import { Container, Section } from "@/widgets"

import { getAllPosts } from "@/data/blog"

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Teknik, fikir ve yorumlar üzerine makalelerden oluşan bir koleksiyon"
}

export default function Blog() {
	const allPosts = getAllPosts()

	return (
		<Container>
			<Section
				title="Blog"
				description="Teknik, fikir ve yorumlar üzerine makalelerden oluşan bir koleksiyon"
			>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
					{allPosts.slice().map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="flex flex-col gap-2 border border-gray-200 rounded-lg p-4"
						>
							<h2 className="text-lg font-medium">{post.metadata.title}</h2>
							<span className="text-gray-500 text-sm">
								{post.metadata.createdAt}
							</span>
						</Link>
					))}
				</div>
			</Section>
		</Container>
	)
}
