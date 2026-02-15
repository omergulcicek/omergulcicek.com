import { SITE } from "@/constants/site.constants"
import { USER } from "@/constants/user.constants"

import type { BlogPostType } from "@/features/blog/types/blog.types"

interface StructuredDataProps {
	type: "website" | "article" | "person" | "breadcrumb"
	article?: BlogPostType
	breadcrumbs?: Array<{ name: string; url: string }>
}

export function StructuredData({
	type,
	article,
	breadcrumbs
}: StructuredDataProps) {
	const getWebsiteSchema = () => ({
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE.name,
		url: SITE.url,
		description: SITE.description,
		author: {
			"@type": "Person",
			name: USER.displayName,
			url: SITE.url
		},
		publisher: {
			"@type": "Person",
			name: USER.displayName,
			url: SITE.url
		}
	})

	const getPersonSchema = () => ({
		"@context": "https://schema.org",
		"@type": "Person",
		name: USER.displayName,
		givenName: USER.firstName,
		familyName: USER.lastName,
		jobTitle: USER.jobTitle,
		email: USER.email,
		url: SITE.url,
		image: `${SITE.url}${USER.avatar}`,
		sameAs: [
			USER.socials.github,
			USER.socials.linkedin,
			USER.socials.twitter,
			USER.socials.medium
		],
		address: {
			"@type": "PostalAddress",
			addressLocality: USER.location
		}
	})

	const getArticleSchema = () => {
		if (!article) return null

		const firstImage = article.content.match(/!\[.*?\]\((.*?)\)/)?.[1]
		const ogImage = firstImage
			? firstImage.startsWith("http")
				? firstImage
				: `${SITE.url}${firstImage}`
			: `${SITE.url}/omergulcicek.png`

		return {
			"@context": "https://schema.org",
			"@type": "BlogPosting",
			headline: article.metadata.title,
			description: article.metadata.description || article.metadata.title,
			image: ogImage,
			datePublished: article.metadata.createdAt,
			dateModified: article.metadata.createdAt,
			author: {
				"@type": "Person",
				name: USER.displayName,
				url: SITE.url
			},
			publisher: {
				"@type": "Person",
				name: USER.displayName,
				url: SITE.url,
				logo: {
					"@type": "ImageObject",
					url: `${SITE.url}${USER.avatar}`
				}
			},
			mainEntityOfPage: {
				"@type": "WebPage",
				"@id": `${SITE.url}/blog/${article.slug}`
			},
			keywords:
				(article.metadata.tags as string[] | undefined)?.join(", ") || ""
		}
	}

	const getBreadcrumbSchema = () => {
		if (!breadcrumbs || breadcrumbs.length === 0) return null

		return {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: breadcrumbs.map((crumb, index) => ({
				"@type": "ListItem",
				position: index + 1,
				name: crumb.name,
				item: crumb.url
			}))
		}
	}

	const getSchema = () => {
		switch (type) {
			case "website":
				return getWebsiteSchema()
			case "person":
				return getPersonSchema()
			case "article":
				return getArticleSchema()
			case "breadcrumb":
				return getBreadcrumbSchema()
			default:
				return null
		}
	}

	const schema = getSchema()

	if (!schema) return null

	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	)
}
