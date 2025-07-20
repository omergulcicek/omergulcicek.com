import Link from "next/link"
import { notFound } from "next/navigation"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { slugify } from "@/utils/slugify"

import {
	Button,
	Heading,
	Prose,
	Tooltip,
	TooltipContent,
	TooltipTrigger
} from "@/ui"
import { Container, MDX, Section } from "@/widgets"

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
				<div className="flex items-center justify-between p-2 pl-4">
					<Button className="px-0 text-muted-foreground" variant="link" asChild>
						<Link href="/blog">
							<ArrowLeftIcon />
							Blog
						</Link>
					</Button>

					<div className="flex items-center gap-2">
						{previous && (
							<Tooltip>
								<TooltipTrigger>
									<Button variant="secondary" size="icon" asChild>
										<Link href={`/blog/${previous.slug}`}>
											<ArrowLeftIcon />
											<span className="sr-only">Previous</span>
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>{previous.metadata.title as string}</p>
								</TooltipContent>
							</Tooltip>
						)}

						{next && (
							<Tooltip>
								<TooltipTrigger>
									<Button variant="secondary" size="icon" asChild>
										<Link href={`/blog/${next.slug}`}>
											<ArrowRightIcon />
											<span className="sr-only">Next</span>
										</Link>
									</Button>
								</TooltipTrigger>
								<TooltipContent>
									<p>{next.metadata.title as string}</p>
								</TooltipContent>
							</Tooltip>
						)}
					</div>
				</div>

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
