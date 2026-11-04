import { SITE } from "@/constants/site.constants"

export function resolveOgImageSitePath(path: string): string {
	const hostname = new URL(SITE.url).hostname

	if (path === "/") {
		return hostname
	}

	return `${hostname}${path}`
}
