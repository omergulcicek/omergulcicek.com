import { Suspense } from "react"
import dynamic from "next/dynamic"
import type { Metadata } from "next"

import type { BlogPostType } from "@/types/blog.type"

import { SITE } from "@/constants/site"

import { Container } from "@/shared"
import { Section } from "@/widgets"

import { getAllPosts, getFuturePosts } from "@/data/blog.data"

import { BlogListSkeleton } from "@/components/widgets/blog/BlogListSkeleton"

const BlogList = dynamic(
	() => import("@/components/widgets/blog/BlogList").then((mod) => ({ default: mod.BlogList })),
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
