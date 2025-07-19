import Link from "next/link"
import { notFound } from "next/navigation"

import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { MDX } from "@/components/widgets/mdx/MDX"
import { Prose } from "@/ui"
import { Container, Section } from "@/widgets"

import { findNeighbour, getAllPosts, getPostBySlug } from "@/data/blog"

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
					<h1 className="mb-6 font-semibold">{post.metadata.title}</h1>

					<MDX code={post.content} />
				</Prose>
			</Section>
		</Container>
	)
}
