import { notFound } from "next/navigation"

import { slugify } from "@/utils/slugify"

import { Container } from "@/shared"
import { Heading, Prose } from "@/ui"
import { BlogDetailHeader, BlogInfo, MDX, Section } from "@/widgets"

import { findNeighbour, getAllPosts, getPostBySlug } from "@/data/blog-data"

import "./prose.css"

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

	return {
		title: title,
		description: title
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
