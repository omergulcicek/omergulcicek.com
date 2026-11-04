import type { ReactNode } from "react"
import { act, renderHook, waitFor } from "@testing-library/react"
import { NuqsTestingAdapter } from "nuqs/adapters/testing"
import { describe, expect, it, vi } from "vitest"

import { useBookmarksSearchParams } from "@/features/bookmarks/hooks/use-bookmarks-search-params"

function renderBookmarksParams(searchParams = "") {
	const onUrlUpdate = vi.fn()
	const wrapper = ({ children }: { children: ReactNode }) => (
		<NuqsTestingAdapter
			searchParams={searchParams}
			onUrlUpdate={onUrlUpdate}
			hasMemory
		>
			{children}
		</NuqsTestingAdapter>
	)

	return {
		onUrlUpdate,
		...renderHook(() => useBookmarksSearchParams(), { wrapper })
	}
}

describe("useBookmarksSearchParams", () => {
	it("falls back to the blog category when the URL has none", () => {
		const { result } = renderBookmarksParams()

		expect(result.current.category).toBe("blog")
		expect(result.current.tag).toBeNull()
	})

	it("ignores an unknown category in the URL", () => {
		const { result } = renderBookmarksParams("?category=nope")

		expect(result.current.category).toBe("blog")
	})

	it("writes the category to the URL and clears the dependent filters", async () => {
		const { result, onUrlUpdate } = renderBookmarksParams(
			"?category=blog&tag=React"
		)

		act(() => result.current.setFilters("media", null))
		await waitFor(() => expect(onUrlUpdate).toHaveBeenCalled())

		const update = onUrlUpdate.mock.calls.at(-1)?.[0]
		expect(update?.searchParams.get("category")).toBe("media")
		expect(update?.searchParams.has("tag")).toBe(false)
		expect(update?.options.history).toBe("push")
		expect(result.current.category).toBe("media")
	})

	it("does not touch the URL when the filters stay the same", () => {
		const { result, onUrlUpdate } = renderBookmarksParams("?category=blog")

		act(() => result.current.setFilters("blog", null))

		expect(onUrlUpdate).not.toHaveBeenCalled()
	})
})
