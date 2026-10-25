import { EXPLORE_NAV } from "@/constants/header-nav.constants"
import { ME } from "@/constants/me.constants"

export const FOOTER_NAV = EXPLORE_NAV

export const FOOTER_BUILD_CREDIT =
	"ViraStack, TanStack Start, Tailwind CSS ve shadcn/ui ile geliştirildi."

export const FOOTER_SOURCE_CODE = {
	label: "Kaynak kod GitHub'da.",
	href: ME.site.repository
} as const

export function getFooterCopyright(year = new Date().getFullYear()) {
	return `© ${year} ${ME.personal.fullName}`
}
