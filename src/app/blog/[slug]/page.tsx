import { notFound } from "next/navigation"

import { extractFirstImage } from "@/helpers/extract-first-image"

import { SITE } from "@/constants/site"

import { slugify } from "@/utils/slugify"

import { MDX } from "@/components/widgets/mdx"
import { Container } from "@/shared"
import { Heading, Prose } from "@/ui"
import { BlogDetailHeader, BlogInfo, Section } from "@/widgets"

import {
	findNeighbour,
	getAllPosts,
	getFuturePosts,
	getPostBySlug
} from "@/data/blog-data"

import "./prose.css"

export async function generateStaticParams() {
	const posts = [...getAllPosts(), ...getFuturePosts()]
	return posts.map((post) => ({
		slug: post.slug
	}))
}

export async function generateMetadata({
	params
}: {
	params: Promise<{
		slug: string
	}>
}) {
	const slug = (await params).slug
	const post = await getPostBySlug(slug)

	if (!post) {
		notFound()
	}

	const { title } = post.metadata

	const firstImage = extractFirstImage(post.content)
	const ogImage = firstImage || "/omergulcicek.png"

	return {
		metadataBase: new URL(SITE.url),
		title: title,
		description: title,
		openGraph: {
			title: title,
			description: title,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title
				}
			]
		},
		twitter: {
			card: "summary_large_image",
			title: title,
			description: title,
			images: [ogImage]
		}
	}
}

export default async function BlogPost({
	params
}: {
	params: Promise<{
		slug: string
	}>
}) {
	const slug = (await params).slug
	const post = getPostBySlug(slug)

	const allPosts = getAllPosts()
	const { previous, next } = findNeighbour(allPosts, slug)

	if (!post) {
		notFound()
	}

	return (
		<Container>
			<Section>
				<BlogDetailHeader previous={previous} next={next} />

				<Heading as="h1" id={slugify(post.metadata.title)}>
					{post.metadata.title}
				</Heading>

				<BlogInfo post={post} />

				<Prose>
					<article>
						<MDX content={post.content} />
					</article>
				</Prose>
			</Section>
		</Container>
	)
}
