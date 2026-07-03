import { z } from "zod"

const blogDataSourceSchema = z.enum(["mdx", "supabase"])

const serverEnvSchema = z
	.object({
		BLOG_DATA_SOURCE: blogDataSourceSchema.default("mdx"),
		SUPABASE_URL: z.string().url().optional(),
		SUPABASE_ANON_KEY: z.string().min(1).optional(),
		SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional()
	})
	.superRefine((value, context) => {
		if (value.BLOG_DATA_SOURCE !== "supabase") {
			return
		}

		if (!value.SUPABASE_URL) {
			context.addIssue({
				code: "custom",
				message: "SUPABASE_URL is required when BLOG_DATA_SOURCE is supabase",
				path: ["SUPABASE_URL"]
			})
		}

		if (!value.SUPABASE_ANON_KEY && !value.SUPABASE_SERVICE_ROLE_KEY) {
			context.addIssue({
				code: "custom",
				message:
					"SUPABASE_ANON_KEY or SUPABASE_SERVICE_ROLE_KEY is required when BLOG_DATA_SOURCE is supabase",
				path: ["SUPABASE_ANON_KEY"]
			})
		}
	})

function readServerEnv() {
	const viteEnv = typeof import.meta !== "undefined" ? import.meta.env : undefined

	return {
		BLOG_DATA_SOURCE: process.env.BLOG_DATA_SOURCE ?? viteEnv?.VITE_BLOG_DATA_SOURCE,
		SUPABASE_URL:
			process.env.SUPABASE_URL ??
			process.env.VITE_SUPABASE_URL ??
			viteEnv?.VITE_SUPABASE_URL,
		SUPABASE_ANON_KEY:
			process.env.SUPABASE_ANON_KEY ??
			process.env.VITE_SUPABASE_ANON_KEY ??
			viteEnv?.VITE_SUPABASE_ANON_KEY,
		SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY
	}
}

export type BlogDataSource = z.infer<typeof blogDataSourceSchema>

export function getServerEnv() {
	return serverEnvSchema.parse(readServerEnv())
}
