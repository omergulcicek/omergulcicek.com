import { createFileRoute } from "@tanstack/react-router"
import { createStandardSchemaV1 } from "nuqs"

import { SITE } from "@/constants/site.constants"
import { BlogPage } from "@/features/blog"
import { blogSearchParamsParsers } from "@/features/blog/hooks/use-blog-search-params"

export const Route = createFileRoute("/blog/")({
	validateSearch: createStandardSchemaV1(blogSearchParamsParsers, {
		partialOutput: true
	}),
	head: () => ({
		meta: [
			{ title: `Blog · ${SITE.name}` },
			{
				name: "description",
				content:
					"Teknik ve kişisel yazılar — React, Next.js, CSS, frontend mimarisi ve daha fazlası."
			}
		]
	}),
	component: BlogIndexPage
})

function BlogIndexPage() {
	return <BlogPage />
}
