export const FOOTER_NAV = [
	{ label: "Deneyimler", href: "/experiences" },
	{ label: "Hizmetler", href: "/services" },
	{ label: "Yer İmleri", href: "/bookmarks" },
	{ label: "Akademi", href: "/academy" }
] as const

export const FOOTER_BUILD_CREDIT =
	"ViraStack, TanStack Start, Tailwind CSS ve shadcn/ui ile geliştirildi."

export const FOOTER_SOURCE_CODE = {
	label: "Kaynak kod GitHub'da.",
	href: "https://github.com/omergulcicek/omergulcicek.com"
} as const

export function getFooterCopyright(year = new Date().getFullYear()) {
	return `© ${year} Ömer Gülçiçek`
}
