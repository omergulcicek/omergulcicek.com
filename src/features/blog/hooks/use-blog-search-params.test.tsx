import type { ReactNode } from "react"
import { act, renderHook, waitFor } from "@testing-library/react"
import { NuqsTestingAdapter } from "nuqs/adapters/testing"
import { describe, expect, it, vi } from "vitest"

import { useBlogSearchParams } from "@/features/blog/hooks/use-blog-search-params"

function renderBlogParams(searchParams = "") {
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
		...renderHook(() => useBlogSearchParams(), { wrapper })
	}
}

describe("useBlogSearchParams", () => {
	it("defaults to newest first with no filters", () => {
		const { result } = renderBlogParams()

		expect(result.current).toMatchObject({
			sort: "newest",
			tag: null,
			featured: false,
			query: null
		})
	})

	it("selects a tag and drops the featured filter", async () => {
		const { result, onUrlUpdate } = renderBlogParams("?featured=true")

		act(() => result.current.selectTag("React"))
		await waitFor(() => expect(onUrlUpdate).toHaveBeenCalled())

		expect(result.current.tag).toBe("React")
		expect(result.current.featured).toBe(false)
	})

	it("clears the tag when the same tag is selected again", async () => {
		const { result } = renderBlogParams("?tag=React")

		act(() => result.current.selectTag("React"))

		await waitFor(() => expect(result.current.tag).toBeNull())
	})

	it("removes every filter from the URL when they are cleared", async () => {
		const { result, onUrlUpdate } = renderBlogParams(
			"?tag=React&q=hook&sort=oldest"
		)

		act(() => result.current.clearFilters())
		await waitFor(() => expect(onUrlUpdate).toHaveBeenCalled())

		expect(onUrlUpdate.mock.calls.at(-1)?.[0].queryString).toBe("")
	})
})
