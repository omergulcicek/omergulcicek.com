import { z } from "zod"

const serverEnvSchema = z.object({
	SUPABASE_URL: z.string().url().optional(),
	SUPABASE_ANON_KEY: z.string().min(1).optional(),
	SUPABASE_SERVICE_ROLE_KEY: z.string().min(1).optional()
})

function readServerEnv() {
	const viteEnv = typeof import.meta !== "undefined" ? import.meta.env : undefined

	return {
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

export function getServerEnv() {
	return serverEnvSchema.parse(readServerEnv())
}
