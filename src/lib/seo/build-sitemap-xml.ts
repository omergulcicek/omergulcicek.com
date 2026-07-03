import { SITE } from "@/constants/site.constants"
import { slugToRouteParam } from "@/features/blog/helpers/blog-helpers"
import type { BlogPost } from "@/features/blog/types/blog.types"
import { STATIC_SITEMAP_PAGES } from "@/lib/seo/page-seo.constants"

function escapeXml(value: string): string {
	return value
		.replaceAll("&", "&amp;")
		.replaceAll("<", "&lt;")
		.replaceAll(">", "&gt;")
		.replaceAll('"', "&quot;")
		.replaceAll("'", "&apos;")
}

function buildUrlEntry(
	loc: string,
	changeFrequency: string,
	priority: number,
	lastModified?: string
) {
	const lastModTag = lastModified
		? `\n\t\t<lastmod>${escapeXml(lastModified)}</lastmod>`
		: ""

	return `\t<url>
\t\t<loc>${escapeXml(loc)}</loc>${lastModTag}
\t\t<changefreq>${changeFrequency}</changefreq>
\t\t<priority>${priority.toFixed(1)}</priority>
\t</url>`
}

export function buildSitemapXml(posts: BlogPost[]): string {
	const staticEntries = STATIC_SITEMAP_PAGES.map((page) =>
		buildUrlEntry(
			`${SITE.url}${page.path}`,
			page.changeFrequency,
			page.priority
		)
	)

	const blogEntries = posts
		.filter((post) => post.published)
		.map((post) =>
			buildUrlEntry(
				`${SITE.url}/blog/${slugToRouteParam(post.slug)}`,
				"monthly",
				0.6,
				post.publishedAt
			)
		)

	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticEntries, ...blogEntries].join("\n")}
</urlset>
`
}
