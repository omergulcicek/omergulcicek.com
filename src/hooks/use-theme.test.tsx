import { act, renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"

import { useTheme } from "@/hooks/use-theme"
import { THEME_STORAGE_KEY } from "@/helpers/theme/theme.types"

describe("useTheme", () => {
	const storage = new Map<string, string>()

	beforeEach(() => {
		document.documentElement.classList.remove("dark")
		storage.clear()
		// Node's own experimental localStorage shadows jsdom's, so give the test a plain one.
		vi.stubGlobal("localStorage", {
			getItem: (key: string) => storage.get(key) ?? null,
			setItem: (key: string, value: string) => storage.set(key, value)
		})
		vi.stubGlobal(
			"matchMedia",
			vi.fn().mockReturnValue({
				matches: false,
				addEventListener: vi.fn(),
				removeEventListener: vi.fn()
			})
		)
	})

	it("switches the document theme and remembers the choice", () => {
		const { result } = renderHook(() => useTheme())

		act(() => result.current.setTheme("dark"))

		expect(document.documentElement).toHaveClass("dark")
		expect(storage.get(THEME_STORAGE_KEY)).toBe("dark")
		expect(result.current.theme).toBe("dark")
	})

	it("toggles back to light", () => {
		const { result } = renderHook(() => useTheme())

		act(() => result.current.setTheme("dark"))
		act(() => result.current.toggleTheme())

		expect(document.documentElement).not.toHaveClass("dark")
		expect(storage.get(THEME_STORAGE_KEY)).toBe("light")
	})
})
