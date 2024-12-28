import { Suspense } from "react"

import BlogDetail from "@/components/widgets/blog-detail"
import getPostMetadata, { getPostContent } from "@/utils/get-blogs"

export async function generateStaticParams() {
	try {
		const articles = await getPostMetadata()

		if (!articles || articles?.length === 0) {
			return []
		}

		return articles?.map((article) => ({
			slug: article.path
		}))
	} catch (e) {
		console.error(e)
		return []
	}
}

export default async function BlogDetailPage({ params }: any) {
	const { slug } = params
	const post = await getPostContent(slug)

	return (
		<Suspense fallback={<>...</>}>
			<BlogDetail post={post} />
		</Suspense>
	)
}
