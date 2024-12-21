import { getPostContent } from "@/utils/get-blogs"
import Markdown from "markdown-to-jsx"

export default async function BlogDetail({
	params
}: {
	params: Promise<{ slug: string }>
}) {
	const slug = (await params).slug
	const post = getPostContent(slug)

	return (
		<>
			<header>
				<p>{post.date}</p>
				<p>{post.category}</p>
				<p>{post.subCategories}</p>
				<p>{post.medium}</p>
			</header>
			<article>
				<h1>{post.title}</h1>
				<Markdown>{post.content}</Markdown>
			</article>
		</>
	)
}
