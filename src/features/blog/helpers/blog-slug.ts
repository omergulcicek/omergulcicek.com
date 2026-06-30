export function normalizeBlogSlug(slug: string) {
	return slug.startsWith("/") ? slug : `/${slug}`
}

export function routeParamToBlogSlug(routeParam: string) {
	return normalizeBlogSlug(routeParam)
}
