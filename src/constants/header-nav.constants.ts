export const HEADER_NAV = [
	{ label: "Ana Sayfa", href: "/", exact: true },
	{ label: "Blog", href: "/blog" },
	{ label: "Projeler", href: "/projects" },
	{ label: "Hakkımda", href: "/about" }
] as const

export const HEADER_BRAND = {
	href: "/",
	ariaLabel: "Ana sayfa"
} as const
