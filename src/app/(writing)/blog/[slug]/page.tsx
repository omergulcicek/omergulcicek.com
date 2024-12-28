import BlogDetail from "@/components/widgets/blog-detail"
import getPostMetadata, { getPostContent } from "@/utils/get-blogs"

export async function generateStaticParams() {
	try {
		const articles = await getPostMetadata()

		return articles?.map((article: any) => ({
			slug: article.path.slice(1)
		}))
	} catch (e) {
		console.error(e)
	}
}

export default async function BlogDetailPage({ params }: any) {
	const { slug } = await params
	const post = await getPostContent(slug)

	return <BlogDetail post={post} />
}
