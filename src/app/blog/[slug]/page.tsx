import { notFound } from "next/navigation"

import { slugify } from "@/utils/slugify"

import { Container } from "@/shared"
import { Heading, Prose } from "@/ui"
import { BlogDetailHeader, MDX, Section } from "@/widgets"

import { findNeighbour, getAllPosts, getPostBySlug } from "@/data/blog-data"

import "./prose.css"

import { Calendar } from "lucide-react"

import { dateFormat } from "@/utils/date-format"

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

				<Prose>
					<Heading id={slugify(post.metadata.title)}>
						{post.metadata.title}
					</Heading>

					<div className="flex items-center gap-2 text-muted-foreground text-sm mb-10">
						<Calendar className="size-4" />
						<time dateTime={post.metadata.createdAt}>
							{dateFormat(post.metadata.createdAt)}
						</time>
					</div>

					<article>
						<MDX content={post.content} />
					</article>
				</Prose>
			</Section>
		</Container>
	)
}
