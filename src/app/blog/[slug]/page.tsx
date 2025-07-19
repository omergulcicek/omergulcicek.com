import Link from "next/link"
import { notFound } from "next/navigation"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { processMdxContent } from "@/utils/processMdxContent"

import { Button } from "@/components/ui/button"
import { Heading, Prose } from "@/ui"
import { Container, Section } from "@/widgets"

import { findNeighbour, getAllPosts, getPostBySlug } from "@/data/blog"

import "./prose.css"

import { slugify } from "@/utils/slugify"

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
				<div className="flex items-center justify-between p-2 pl-4">
					<Button className="px-0 text-muted-foreground" variant="link" asChild>
						<Link href="/blog">
							<ArrowLeftIcon />
							Blog
						</Link>
					</Button>

					<div className="flex items-center gap-2">
						{previous && (
							<Button variant="secondary" size="icon" asChild>
								<Link href={`/blog/${previous.slug}`}>
									<ArrowLeftIcon />
									<span className="sr-only">Previous</span>
								</Link>
							</Button>
						)}

						{next && (
							<Button variant="secondary" size="icon" asChild>
								<Link href={`/blog/${next.slug}`}>
									<span className="sr-only">Next</span>
									<ArrowRightIcon />
								</Link>
							</Button>
						)}
					</div>
				</div>

				<Prose className="px-4">
					<Heading id={slugify(post.metadata.title)}>
						{post.metadata.title}
					</Heading>

					<div
						className="prose prose-sm prose-pre:bg-transparent prose-pre:p-0 prose-h1:text-3xl prose-h1:font-bold prose-h1:mb-4 prose-h2:text-2xl prose-h2:font-semibold prose-h2:mb-3 prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-2 prose-a:underline prose-a:underline-offset-4 prose-a:break-words prose-a:cursor-pointer prose-ul:marker:text-gray-500"
						dangerouslySetInnerHTML={{
							__html: await processMdxContent(post.content)
						}}
					/>
				</Prose>
			</Section>
		</Container>
	)
}
