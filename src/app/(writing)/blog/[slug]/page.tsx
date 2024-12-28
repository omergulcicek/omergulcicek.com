import type { Metadata } from 'next'
import BlogDetail from "@/components/widgets/blog-detail"
import getPostMetadata, { getPostContent } from "@/utils/get-blogs"

export async function generateStaticParams() {
	try {
		const articles = await getPostMetadata()

		return articles?.map((article: any) => ({
			slug: article.path.slice(1),
			title: article.title,
		}))
	} catch (e) {
		console.error(e)
	}
}

export async function generateMetadata({ params }: any) {
	const { slug } = await params
	const {title, category, subCategories } = await getPostContent(slug)

	const description = `${title} - Ömer Gülçiçek, Frontend Developer, ${category}, ${subCategories || ""}`

  return {
    title,
		description,
  }
}

export default async function BlogDetailPage({ params }: any) {
	const { slug } = await params
	const post = await getPostContent(slug)

	return <BlogDetail post={post} />
}
