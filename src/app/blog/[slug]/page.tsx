import { notFound } from "next/navigation"

import { slugify } from "@/helpers/slugify"

import { SITE } from "@/constants/site.constants"

import {
	findNeighbour,
	getAllPosts,
	getFuturePosts,
	getPostBySlug
} from "@/lib/blog-posts"

import { Container, Section, StructuredData } from "@/shared"
import { Heading, Prose } from "@/ui"
import { BlogDetailHeader, BlogInfo, MDX } from "@/features/blog"
import { extractExcerpt } from "@/features/blog/helpers/extract-excerpt"
import { extractFirstImage } from "@/features/blog/helpers/extract-first-image"

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
	const post = getPostBySlug(slug)

	if (!post) {
		notFound()
	}

	const { title, description } = post.metadata

	const excerpt = description || extractExcerpt(post.content, 160)
	const firstImage = extractFirstImage(post.content)
	const ogImage = firstImage || "/omergulcicek.png"
	const canonicalUrl = `${SITE.url}/blog/${post.slug}`

	return {
		metadataBase: new URL(SITE.url),
		title: title,
		description: excerpt,
		alternates: {
			canonical: canonicalUrl
		},
		openGraph: {
			title: title,
			description: excerpt,
			url: canonicalUrl,
			type: "article",
			publishedTime: post.metadata.createdAt as string,
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
			description: excerpt,
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
		<>
			<StructuredData type="article" article={post} />
			<StructuredData
				type="breadcrumb"
				breadcrumbs={[
					{ name: "Ana Sayfa", url: SITE.url },
					{ name: "Blog", url: `${SITE.url}/blog` },
					{ name: post.metadata.title, url: `${SITE.url}/blog/${post.slug}` }
				]}
			/>
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
		</>
	)
}
