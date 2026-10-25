import { describe, expect, it } from "vitest"

import {
	EXPLORE_NAV,
	HEADER_NAV,
	MOBILE_DRAWER_NAV
} from "@/constants/header-nav.constants"
import { SEARCH_PAGES } from "@/features/search/constants/search.constants"

describe("navigation", () => {
	it("groups secondary pages under Keşfet in order", () => {
		expect(EXPLORE_NAV.map((item) => item.href)).toEqual([
			"/about",
			"/experiences",
			"/journey",
			"/setup"
		])
	})

	it("lists every page once in the drawer and search", () => {
		const hrefs = [...HEADER_NAV, ...EXPLORE_NAV].map((item) => item.href)

		expect(new Set(hrefs).size).toBe(hrefs.length)
		expect(MOBILE_DRAWER_NAV.map((item) => item.href)).toEqual(hrefs)
		expect(SEARCH_PAGES.map((item) => item.href)).toEqual(hrefs)
	})

	it("no longer links to the services page", () => {
		const hrefs = [...MOBILE_DRAWER_NAV, ...SEARCH_PAGES].map((item) => item.href)

		expect(hrefs).not.toContain("/services")
	})
})
