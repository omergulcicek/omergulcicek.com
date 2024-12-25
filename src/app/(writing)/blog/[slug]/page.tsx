import BlogDetail from "@/components/widgets/blog-detail"
import getPostMetadata, { getPostContent } from "@/utils/get-blogs"

export async function getStaticPaths() {
	const articles = await getPostMetadata()

	const paths = articles.map((article) => ({
		params: { slug: article.path }
	}))

	return { paths, fallback: "blocking" }
}

export default async function BlogDetailPage({ params }: any) {
	const { slug } = await params
	const post = await getPostContent(slug)

	return (
		<>
			<BlogDetail post={post} />
		</>
	)
}
