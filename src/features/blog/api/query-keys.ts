export const blogKeys = {
	all: ["blog"] as const,
	lists: () => [...blogKeys.all, "list"] as const,
	list: () => [...blogKeys.lists()] as const,
	details: () => [...blogKeys.all, "detail"] as const,
	detail: (slug: string) => [...blogKeys.details(), slug] as const
}
