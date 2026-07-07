export function isExternalHref(href: string) {
	return /^https?:\/\//i.test(href.trim())
}
