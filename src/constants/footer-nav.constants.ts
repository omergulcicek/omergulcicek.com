import { EXTERNAL_LINKS } from "@/constants/site-content.constants"

export type FooterNavItem = {
	label: string
	href: string
	external?: boolean
}

export const FOOTER_NAV: readonly FooterNavItem[] = [
	{ label: "Deneyimler", href: "/experiences" },
	{ label: "Hizmetler", href: "/services" },
	{ label: "Yer İmleri", href: "/bookmarks" },
	{ label: "ViraStack", href: EXTERNAL_LINKS.virastack, external: true }
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
