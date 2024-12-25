import BlogDetail from "@/components/widgets/blog-detail"
import getPostMetadata, { getPostContent } from "@/utils/get-blogs"

export async function generateStaticParams() {
	const articles = await getPostMetadata()

	if (!articles || articles?.length === 0) {
		return []
	}

	return articles?.map((article) => ({
		slug: article.path
	}))
}

export default async function BlogDetailPage({ params }: any) {
	const { slug } = await params
	const post = getPostContent(slug)

	return (
		<>
			<BlogDetail post={post} />
		</>
	)
}
