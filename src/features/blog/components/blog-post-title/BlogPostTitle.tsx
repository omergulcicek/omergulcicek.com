import { Heading } from "@/ui"

export function BlogPostTitle({
	slug,
	title,
	id
}: {
	slug: string
	title: string
	id: string
}) {
	return (
		<Heading as="h1" id={id} data-post-slug={slug}>
			{title}
		</Heading>
	)
}
