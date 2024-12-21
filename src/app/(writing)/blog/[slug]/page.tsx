import getPostMetadata, { getPostContent } from "@/utils/get-blogs"
import Markdown from "markdown-to-jsx"

export async function generateStaticParams() {
	const articles = await getPostMetadata()

	if (!articles || articles?.length === 0) {
		return []
	}

	return articles.map((article) => ({
		slug: article.path
	}))
}

export default async function BlogDetail({ params }: any) {
	const { slug } = await params
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
