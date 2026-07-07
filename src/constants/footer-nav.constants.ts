export type FooterNavItem = {
	label: string
	href: string
	external?: boolean
}

export const FOOTER_NAV: readonly FooterNavItem[] = [
	{ label: "Deneyimler", href: "/experiences" },
	{ label: "Yolculuk", href: "/journey" },
	// { label: "Çalışma Alanı", href: "/workspace" },
	{ label: "Hizmetler", href: "/services" },
	{ label: "Yer İmleri", href: "/bookmarks" }
]

export const FOOTER_BUILD_CREDIT =
	"ViraStack, TanStack Start, Tailwind CSS ve shadcn/ui ile geliştirildi."

export const FOOTER_SOURCE_CODE = {
	label: "Kaynak kod GitHub'da.",
	href: "https://github.com/omergulcicek/omergulcicek.com"
} as const

export function getFooterCopyright(year = new Date().getFullYear()) {
	return `© ${year} Ömer Gülçiçek`
}
