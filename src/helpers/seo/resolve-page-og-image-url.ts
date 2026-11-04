import { SITE } from "@/constants/site.constants"

import type { StaticPageSeoKey } from "@/helpers/seo/page-seo.constants"

export function resolvePageOgImageUrl({
	pageKey
}: {
	pageKey: StaticPageSeoKey
}): string {
	return `${SITE.url}/og/page/${pageKey}`
}
