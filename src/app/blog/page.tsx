import { Suspense } from "react"
import type { Metadata } from "next"
import dynamic from "next/dynamic"

import { SITE } from "@/constants/site.constants"

import { getAllPosts, getFuturePosts } from "@/lib/blog-posts"

import { Container, Section } from "@/shared"
import { BlogListSkeleton } from "@/features/blog"
import type { BlogPostType } from "@/features/blog/types/blog.types"

const BlogList = dynamic(
	() =>
		import("@/features/blog/components/blog-list/BlogList").then((mod) => ({
			default: mod.BlogList
		})),
	{
		loading: () => <BlogListSkeleton />
	}
)

export const metadata: Metadata = {
	title: "Blog",
	description:
		"Teknik, fikir ve yorumlar üzerine makalelerden oluşan bir koleksiyon",
	alternates: {
		canonical: `${SITE.url}/blog`
	}
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
				<Suspense fallback={<BlogListSkeleton />}>
					<BlogList allPosts={allPosts} futurePosts={futurePosts} />
				</Suspense>
			</Section>
		</Container>
	)
}
