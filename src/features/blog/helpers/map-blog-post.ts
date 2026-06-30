import type { BlogPostMetadata } from "@/features/blog/schemas/blog.schema"
import type { BlogPost } from "@/features/blog/types/blog.types"

export function mapBlogPostMetadata(metadata: BlogPostMetadata): BlogPost {
	return {
		slug: metadata.slug,
		title: metadata.title,
		description: metadata.description,
		category: metadata.category,
		tags: metadata.tags,
		locale: metadata.locale,
		published: metadata.published,
		publishedAt: metadata.publishedAt,
		coverImage: metadata.coverImage,
		readingTimeMinutes: metadata.readingTimeMinutes,
		canonicalUrl: metadata.canonicalUrl,
		featured: metadata.featured,
		interactive: metadata.interactive,
		mediumUrl: metadata.mediumUrl,
		translationOf: metadata.translationOf,
		translatedTo: metadata.translatedTo,
		series: metadata.series,
		seriesOrder: metadata.seriesOrder
	}
}
