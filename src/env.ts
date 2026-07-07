import { z } from "zod"

const mediaProviderSchema = z.enum([
	"local",
	"supabase",
	"supabase-transform"
])

const gaIdSchema = z
	.string()
	.regex(/^G-[A-Z0-9]+$/, "VITE_GA_ID must be a valid GA4 measurement ID")
	.optional()

const clientEnvSchema = z
	.object({
		VITE_MEDIA_PROVIDER: mediaProviderSchema.default("local"),
		VITE_SUPABASE_URL: z.string().url().optional(),
		VITE_SUPABASE_ANON_KEY: z.string().min(1).optional(),
		VITE_GA_ID: gaIdSchema
	})
	.superRefine((value, context) => {
		if (
			value.VITE_MEDIA_PROVIDER !== "local" &&
			!value.VITE_SUPABASE_URL
		) {
			context.addIssue({
				code: "custom",
				message:
					"VITE_SUPABASE_URL is required when VITE_MEDIA_PROVIDER is supabase or supabase-transform",
				path: ["VITE_SUPABASE_URL"]
			})
		}
	})

const metaEnv = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : process.env

export const env = clientEnvSchema.parse({
	VITE_MEDIA_PROVIDER: metaEnv.VITE_MEDIA_PROVIDER,
	VITE_SUPABASE_URL: metaEnv.VITE_SUPABASE_URL || undefined,
	VITE_SUPABASE_ANON_KEY: metaEnv.VITE_SUPABASE_ANON_KEY || undefined,
	VITE_GA_ID: metaEnv.VITE_GA_ID || undefined
})

export type MediaProvider = z.infer<typeof mediaProviderSchema>
