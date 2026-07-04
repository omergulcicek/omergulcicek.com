import { SITE } from "@/constants/site.constants"
import { computeReadingTimeMinutes } from "@/features/blog/helpers/compute-reading-time"
import type {
	BlogPostListRow,
	BlogPostDetailRow
} from "@/features/blog/schemas/blog-post-row.schema"
import type { BlogPost } from "@/features/blog/types/blog.types"

function formatPublishedAt(value: string | null) {
	if (!value) {
		return new Date().toISOString().slice(0, 10)
	}

	return value.slice(0, 10)
}

function normalizeCoverImage(value: string | null) {
	if (!value) {
		return undefined
	}

	return value.startsWith("/") ? value : `/${value}`
}

export function mapBlogPostListRow(row: BlogPostListRow): BlogPost {
	const slug = row.slug.startsWith("/") ? row.slug : `/${row.slug}`

	return {
		slug,
		title: row.title,
		description: row.description,
		category: row.category,
		tags: row.tags,
		locale: row.locale,
		published: row.published,
		publishedAt: formatPublishedAt(row.published_at),
		interactive: row.interactive,
		mediumUrl: row.medium_url ?? undefined,
		canonicalUrl: `${SITE.url}/blog${slug}`
	}
}

export function mapBlogPostDetailRow(row: BlogPostDetailRow): BlogPost {
	return {
		...mapBlogPostListRow(row),
		coverImage: normalizeCoverImage(row.og_image_path),
		readingTimeMinutes: computeReadingTimeMinutes(row.content)
	}
}
