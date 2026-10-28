import { z } from "zod"

/**
 * Inputs of the blog server functions. They live outside the `*.api.ts` files on purpose:
 * the client build strips `.validator()`, and with the schemas in their own module nothing
 * left on the client imports Zod, so it stays out of the browser bundle.
 */
export const blogSlugInputSchema = z.object({
	slug: z.string().min(1)
})

export const mdxSandboxInputSchema = z.object({
	content: z.string().min(1)
})
