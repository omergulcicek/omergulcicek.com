import type { MediaProvider } from "@/schemas/client-env.schema"

export type { MediaProvider }

/**
 * Public env values, inlined by Vite at build time. They are validated against
 * `clientEnvSchema` once, when the dev server or build starts (vite.config.ts), instead
 * of in every visitor's browser, which kept Zod in the entry bundle.
 * Empty strings from `.env` count as unset.
 */
export const env = {
	VITE_MEDIA_PROVIDER: import.meta.env.VITE_MEDIA_PROVIDER || "local",
	VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || undefined,
	VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || undefined,
	VITE_GA_ID: import.meta.env.VITE_GA_ID || undefined
} as const
