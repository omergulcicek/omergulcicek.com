export const BLOG_SLUG_REDIRECTS = {
	"/2025ten-2026ya-degerlendirme-ve-Yıl Değerlendirmesi":
		"/2025ten-2026ya-degerlendirme-ve-hedefler",
	"/footy-ile-rekabete-hazir-misin": "/footy-futbol-bilgini-sahaya-yansit",
	"/react-ai-stack-2026": "/2026-icin-react-ve-yapay-zeka-stacki",
	"/ai-caginda-frontend-bitti-mi": "/yapay-zeka-caginda-frontend-bitti-mi",
	"/google-maps-listelerim": "/google-maps-kisisel-listelerim",
	"/google-harita-listelerim": "/google-maps-kisisel-listelerim",
	"/takvim-abonelikleriyle-zamani-zenginlestirin":
		"/takvim-abonelikleri-zamani-zenginlestirin",
	"/kisisel-sitemin-nextjs-versiyonu": "/gatsbyden-nextjse-gecis",
	"/kisisel-sitemin-yeni-arayuzu-nextjs-ve-tailwind-css-ile-gelistirildi":
		"/nextjs-ve-shadcn-ui-ile-site-yenilemesi",
	"/sitemin-yeni-arayuzune-hosgeldiniz":
		"/nextjs-15-ile-tasarim-ve-mimari-yenilemesi",
	"/sitemin-yeni-arayuzuna-hosgeldiniz":
		"/nextjs-15-ile-tasarim-ve-mimari-yenilemesi",
	"/kisisel-sitemin-tanstack-start-versiyonu":
		"/nextjsten-tanstack-ve-supabasee-gecis"
} as const

export type BlogSlugRedirect = keyof typeof BLOG_SLUG_REDIRECTS

export function resolveBlogSlugRedirect(slug: string) {
	const normalizedSlug = slug.startsWith("/") ? slug : `/${slug}`

	return (
		BLOG_SLUG_REDIRECTS[normalizedSlug as BlogSlugRedirect] ?? normalizedSlug
	)
}
