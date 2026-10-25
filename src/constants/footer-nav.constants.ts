import { EXPLORE_NAV } from "@/constants/header-nav.constants"
import { ME } from "@/constants/me.constants"

export const FOOTER_NAV = EXPLORE_NAV

export function getFooterCopyright(year = new Date().getFullYear()) {
	return `© ${year} ${ME.personal.fullName}`
}
