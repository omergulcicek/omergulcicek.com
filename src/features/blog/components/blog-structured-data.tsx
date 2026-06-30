import { SITE } from "@/constants/site.constants"
import { SITE_CONTENT } from "@/constants/site-content.constants"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"

type BlogStructuredDataProps = {
	post: BlogPost
}

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
	const articleUrl = `${SITE.url}/blog/${slugToRouteParam(post.slug)}`
	const imageUrl = post.coverImage
		? post.coverImage.startsWith("http")
			? post.coverImage
			: `${SITE.url}${post.coverImage}`
		: `${SITE.url}${SITE.defaultOgImage}`

	const articleSchema = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: post.title,
		description: post.description,
		image: imageUrl,
		datePublished: post.publishedAt,
		dateModified: post.publishedAt,
		inLanguage: post.locale === "en" ? "en" : "tr",
		author: {
			"@type": "Person",
			name: SITE_CONTENT.displayName,
			url: SITE.url
		},
		publisher: {
			"@type": "Person",
			name: SITE_CONTENT.displayName,
			url: SITE.url
		},
		mainEntityOfPage: {
			"@type": "WebPage",
			"@id": articleUrl
		},
		keywords: post.tags.join(", ")
	}

	const breadcrumbSchema = {
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: [
			{
				"@type": "ListItem",
				position: 1,
				name: "Ana Sayfa",
				item: SITE.url
			},
			{
				"@type": "ListItem",
				position: 2,
				name: "Blog",
				item: `${SITE.url}/blog`
			},
			{
				"@type": "ListItem",
				position: 3,
				name: post.title,
				item: articleUrl
			}
		]
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
			/>
		</>
	)
}
