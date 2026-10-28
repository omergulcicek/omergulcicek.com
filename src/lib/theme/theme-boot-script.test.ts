import { describe, expect, it } from "vitest"

import { THEME_BOOT_SCRIPT } from "@/lib/theme/theme-boot-script"

type BootEnvironment = {
	stored?: string | null
	cookie?: string
	systemDark?: boolean
	storageBlocked?: boolean
}

function runBootScript({
	stored = null,
	cookie = "",
	systemDark = false,
	storageBlocked = false
}: BootEnvironment): boolean {
	const classes = new Set<string>()
	const document = {
		cookie,
		documentElement: {
			classList: {
				toggle: (name: string, force: boolean) => {
					if (force) {
						classes.add(name)
					} else {
						classes.delete(name)
					}
				}
			}
		}
	}
	const localStorage = {
		getItem: () => {
			if (storageBlocked) {
				throw new Error("SecurityError")
			}

			return stored
		}
	}
	const window = { matchMedia: () => ({ matches: systemDark }) }

	new Function("document", "localStorage", "window", THEME_BOOT_SCRIPT)(
		document,
		localStorage,
		window
	)

	return classes.has("dark")
}

describe("THEME_BOOT_SCRIPT", () => {
	it("applies a saved dark theme", () => {
		expect(runBootScript({ stored: "dark" })).toBe(true)
	})

	it("keeps a saved light theme even when the OS is dark", () => {
		expect(runBootScript({ stored: "light", systemDark: true })).toBe(false)
	})

	it("falls back to the theme cookie", () => {
		expect(runBootScript({ cookie: "other=1; theme=dark" })).toBe(true)
	})

	it("follows the OS preference when nothing is saved", () => {
		expect(runBootScript({ systemDark: true })).toBe(true)
		expect(runBootScript({ systemDark: false })).toBe(false)
	})

	it("follows the OS preference when storage is blocked", () => {
		expect(runBootScript({ storageBlocked: true, systemDark: true })).toBe(true)
	})
})
