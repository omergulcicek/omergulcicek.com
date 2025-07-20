import { notFound } from "next/navigation"

import { slugify } from "@/utils/slugify"

import { Heading, Prose } from "@/ui"
import { BlogDetailHeader, Container, MDX, Section } from "@/widgets"

import { findNeighbour, getAllPosts, getPostBySlug } from "@/data/blog"

import "./prose.css"

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

				<Prose className="px-4">
					<Heading id={slugify(post.metadata.title)}>
						{post.metadata.title}
					</Heading>

					<div className="prose prose-sm prose-pre:bg-transparent prose-pre:p-0 prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4 prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-3 prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-2 prose-a:underline prose-a:underline-offset-4 prose-a:break-words prose-a:cursor-pointer prose-ul:marker:text-gray-500">
						<MDX content={post.content} />
					</div>
				</Prose>
			</Section>
		</Container>
	)
}
