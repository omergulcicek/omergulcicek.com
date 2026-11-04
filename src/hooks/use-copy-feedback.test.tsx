import { act, renderHook } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"

import { useCopyFeedback } from "@/hooks/use-copy-feedback"

describe("useCopyFeedback", () => {
	beforeEach(() => {
		vi.useFakeTimers()
	})

	afterEach(() => {
		vi.useRealTimers()
		vi.unstubAllGlobals()
	})

	it("confirms a copy, then resets after the feedback delay", async () => {
		const writeText = vi.fn().mockResolvedValue(undefined)
		vi.stubGlobal("navigator", { clipboard: { writeText } })
		const { result } = renderHook(() => useCopyFeedback())

		await act(async () => {
			await expect(result.current.copy("merhaba")).resolves.toBe(true)
		})

		expect(writeText).toHaveBeenCalledWith("merhaba")
		expect(result.current.copied).toBe(true)

		act(() => {
			vi.advanceTimersByTime(2000)
		})

		expect(result.current.copied).toBe(false)
	})

	it("returns false and stays unconfirmed when the clipboard rejects", async () => {
		vi.stubGlobal("navigator", {
			clipboard: { writeText: vi.fn().mockRejectedValue(new Error("denied")) }
		})
		const { result } = renderHook(() => useCopyFeedback())

		await act(async () => {
			await expect(result.current.copy("x")).resolves.toBe(false)
		})

		expect(result.current.copied).toBe(false)
	})
})
