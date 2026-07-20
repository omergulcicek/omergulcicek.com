import { SITE } from "@/constants/site.constants"
import type { StaticPageSeoKey } from "@/lib/seo/page-seo.constants"

export function resolvePageOgImageUrl({
	pageKey
}: {
	pageKey: StaticPageSeoKey
}): string {
	return `${SITE.url}/og/page/${pageKey}`
}
