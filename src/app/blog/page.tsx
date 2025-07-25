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
				<div className="space-y-12 mt-10 relative">
					{Object.entries(postsByYear)
						.reverse()
						.map(([year, posts]) => (
							<div
								key={year}
								className="space-y-6 flex flex-col gap-1 items-start relative min-h-20"
							>
								<span className="text-2xl absolute font-medium top-5 -left-12 -rotate-90 text-gray-300 select-none hidden md:flex">
									{year}
								</span>
								<div className="flex flex-col gap-6 items-start">
									{posts.map((post) => (
										<div className={"flex flex-col gap-1"} key={post.slug}>
											<h2 className="text-lg leading-normal font-normal text-gray-900 group-hover:text-black transition-colors duration-200">
												<Link
													href={`/blog/${post.slug}`}
													className="group relative overflow-hidden flex items-start"
												>
													{post.metadata.title}
												</Link>
											</h2>
											<div className="flex flex-col md:flex-row items-start gap-2">
												<span className="text-xs text-italic font-medium leading-[22px] text-muted-foreground tracking-wide whitespace-nowrap">
													{dateFormat(post.metadata.createdAt)}
												</span>
												<span className="text-black/20 leading-[22px] hidden md:inline-flex">
													•
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
