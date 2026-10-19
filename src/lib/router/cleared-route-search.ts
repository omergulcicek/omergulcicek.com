export const clearedRouteSearch = {} as const

/** Search applied when a nav link opens the blog: technical posts first. */
export const blogNavSearch = { category: "technical" } as const

/** Resolves the search params a primary nav link should open with. */
export function getNavLinkSearch(href: string) {
	return href === "/blog" ? blogNavSearch : clearedRouteSearch
}
