export const BLOG_SLUG_REDIRECTS = {
	"/2025ten-2026ya-degerlendirme-ve-Yıl Değerlendirmesi":
		"/2025ten-2026ya-degerlendirme-ve-hedefler",
	"/google-maps-listelerim": "/google-harita-listelerim"
} as const

export type BlogSlugRedirect = keyof typeof BLOG_SLUG_REDIRECTS

export function resolveBlogSlugRedirect(slug: string) {
	const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`

	return (
		BLOG_SLUG_REDIRECTS[normalizedSlug as BlogSlugRedirect] ?? normalizedSlug
	)
}
