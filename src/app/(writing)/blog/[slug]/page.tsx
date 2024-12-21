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
				<p>{post.data.date}</p>
				<p>{post.data.category}</p>
				<p>{post.data.subCategories}</p>
				<p>{post.data.medium}</p>
			</header>
			<article>
				<h1>{post.data.title}</h1>
				<Markdown>{post.content}</Markdown>
			</article>
		</>
	)
}
