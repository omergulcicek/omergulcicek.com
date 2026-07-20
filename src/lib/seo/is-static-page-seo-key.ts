import {
	STATIC_PAGE_SEO,
	type StaticPageSeoKey
} from "@/lib/seo/page-seo.constants"

export function isStaticPageSeoKey(value: string): value is StaticPageSeoKey {
	return value in STATIC_PAGE_SEO
}
