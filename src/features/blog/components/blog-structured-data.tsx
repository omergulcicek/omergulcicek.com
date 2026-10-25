import { SITE } from "@/constants/site.constants"
import { ME } from "@/constants/me.constants"
import type { BlogPost } from "@/features/blog/types/blog.types"
import {
	getBlogPostPath,
	getBlogSection
} from "@/features/blog/helpers/blog-helpers"
import { resolveBlogOgImageUrl } from "@/lib/seo/resolve-blog-og-image-url"

type BlogStructuredDataProps = {
	post: BlogPost
}

export function BlogStructuredData({ post }: BlogStructuredDataProps) {
	const articleUrl = `${SITE.url}${getBlogPostPath(post.slug, post.category)}`
	const imageUrl = resolveBlogOgImageUrl({
		slug: post.slug,
		coverImage: post.coverImage
	})

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
			name: ME.personal.fullName,
			url: SITE.url
		},
		publisher: {
			"@type": "Person",
			name: ME.personal.fullName,
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
				name: getBlogSection(post.category).title,
				item: `${SITE.url}${getBlogSection(post.category).path}`
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
