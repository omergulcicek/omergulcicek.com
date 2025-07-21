import type { Metadata } from "next"
import Link from "next/link"

import { dateFormat } from "@/utils/date-format"

import { Container } from "@/shared"
import { Section } from "@/widgets"

import { getAllPosts } from "@/data/blog-data"

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
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
					{allPosts.slice().map((post) => (
						<Link
							key={post.slug}
							href={`/blog/${post.slug}`}
							className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100/50"
						>
							<div className="flex flex-col gap-3">
								<h2 className="text-lg leading-normal font-medium text-gray-900 group-hover:text-black transition-colors duration-200">
									{post.metadata.title}
								</h2>
								{post.metadata.description && (
									<p className="text-sm text-gray-600 line-clamp-2">
										{post.metadata.description}
									</p>
								)}
								<div className="flex items-center justify-between pt-2">
									<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
										{dateFormat(post.metadata.createdAt)}
									</span>
									<div className="h-1 w-8 bg-gray-200 rounded-full group-hover:bg-gray-300 transition-colors duration-200" />
								</div>
							</div>
						</Link>
					))}
				</div>
			</Section>
		</Container>
	)
}
