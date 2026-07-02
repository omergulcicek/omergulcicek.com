import type { TOCItemType } from "@/components/toc-minimap"
import { BLOG_TOC_MIN_HEADINGS } from "@/features/blog/constants/blog.constants"
import type { BlogHeading } from "@/features/blog/types/blog-heading.types"

export function shouldShowBlogToc(headings: BlogHeading[]) {
	return headings.length >= BLOG_TOC_MIN_HEADINGS
}

export function mapBlogHeadingsToTocItems(
	headings: BlogHeading[]
): TOCItemType[] {
	return headings.map((heading) => ({
		title: heading.text,
		url: `#${heading.id}`,
		depth: heading.level
	}))
}
