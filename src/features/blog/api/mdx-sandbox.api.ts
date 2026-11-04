import { createServerFn } from "@tanstack/react-start"

import { getRuntimeIsDev } from "@/helpers/runtime/is-dev-runtime"
import { runServerWork } from "@/helpers/server-work"

import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import { enrichBlogContentHtml } from "@/features/blog/helpers/blog-content-html"
import { mdxSandboxInputSchema } from "@/features/blog/schemas/blog-server-fn.schema"

/**
 * Compiles MDX for the dev sandbox on the server, so the MDX compiler and its
 * highlighter never ship in the client bundle. MDX evaluation runs arbitrary
 * code, so the handler refuses to work outside development.
 */
export const compileMdxSandboxFn = createServerFn({ method: "POST" })
	.validator(mdxSandboxInputSchema)
	.handler(async ({ data }) =>
		runServerWork(async () => {
			if (!getRuntimeIsDev()) {
				throw new Error("MDX sandbox is only available in development")
			}

			const { compileMdxToHtml } =
				await import("@/features/blog/api/compile-mdx-content")
			const html = await compileMdxToHtml(data.content)

			return enrichBlogContentHtml(html).contentHtml
		}, BLOG_UI.postLoadError)
	)
