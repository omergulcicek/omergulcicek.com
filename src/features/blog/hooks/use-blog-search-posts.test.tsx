import type { ReactNode } from "react"
import { QueryClientProvider } from "@tanstack/react-query"
import { createTestQueryClient } from "@/test/render"
import { renderHook } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import { blogKeys } from "@/features/blog/api/query-keys"
import { useBlogSearchPosts } from "@/features/blog/hooks/use-blog-search-posts"
import type { BlogPost } from "@/features/blog/types/blog.types"

const post = { slug: "/merhaba", title: "Merhaba" } as BlogPost

function setup(enabled: boolean, seeded: boolean) {
	const queryClient = createTestQueryClient()

	if (seeded) {
		queryClient.setQueryData(blogKeys.list(), [post])
	}

	const wrapper = ({ children }: { children: ReactNode }) => (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)

	return renderHook(() => useBlogSearchPosts(enabled), { wrapper })
}

describe("useBlogSearchPosts", () => {
	it("returns the cached posts", () => {
		expect(setup(true, true).result.current).toEqual([post])
	})

	it("returns an empty list while the palette is closed and nothing is cached", () => {
		const { result } = setup(false, false)

		expect(result.current).toEqual([])
	})
})
