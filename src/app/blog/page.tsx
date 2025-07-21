import type { Metadata } from "next"
import Link from "next/link"

import type { BlogPost } from "@/types/blog-type"

import { dateFormat, groupPostsByYear } from "@/utils/date-format"

import { Container } from "@/shared"
import { Section } from "@/widgets"

import { getAllPosts } from "@/data/blog-data"

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Teknik, fikir ve yorumlar üzerine makalelerden oluşan bir koleksiyon"
}

export default function Blog() {
	const allPosts = getAllPosts() as BlogPost[]
	const postsByYear = groupPostsByYear(allPosts)

	return (
		<Container>
			<Section
				title="Blog"
				description="Teknik, fikir ve yorumlar üzerine makalelerden oluşan bir koleksiyon"
			>
				<div className="space-y-12">
					{Object.entries(postsByYear)
						.reverse()
						.map(([year, posts]) => (
							<div key={year} className="space-y-6 flex flex-col gap-1">
								<strong className="text-3xl font-bold text-gray-900">
									{year}
								</strong>
								<div className="grid grid-cols-1 gap-6">
									{posts.map((post) => (
										<Link
											key={post.slug}
											href={`/blog/${post.slug}`}
											className="group relative overflow-hidden"
										>
											<div className="flex flex-col gap-1">
												<span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
													{dateFormat(post.metadata.createdAt)}
												</span>
												<h2 className="text-lg leading-normal font-medium text-gray-900 group-hover:text-black transition-colors duration-200">
													{post.metadata.title}
												</h2>
											</div>
										</Link>
									))}
								</div>
							</div>
						))}
				</div>
			</Section>
		</Container>
	)
}
