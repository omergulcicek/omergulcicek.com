import type { Metadata } from "next"
import Link from "next/link"

import type { BlogPost } from "@/types/blog-type"

import { dateFormat, groupPostsByYear } from "@/utils/date-format"

import { Container } from "@/shared"
import { Section, TagsBadge } from "@/widgets"

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
								<span className="text-xl">{year}</span>
								<div className="flex flex-col gap-6 items-start">
									{posts.map((post) => (
										<div className={"flex flex-col gap-1"} key={post.slug}>
											<Link
												href={`/blog/${post.slug}`}
												className="group relative overflow-hidden"
											>
												<h2 className="text-lg leading-normal font-normal text-gray-900 group-hover:text-black transition-colors duration-200">
													{post.metadata.title}
												</h2>
											</Link>
											<div className="flex items-start gap-2">
												<span className="text-xs font-medium text-muted-foreground tracking-wide whitespace-nowrap">
													{dateFormat(post.metadata.createdAt)}
												</span>
												<TagsBadge tags={post.metadata.tags as string[]} />
											</div>
										</div>
									))}
								</div>
							</div>
						))}
				</div>
			</Section>
		</Container>
	)
}
