import { z } from "zod"

export const mediaProviderSchema = z.enum([
	"local",
	"supabase",
	"supabase-transform"
])

const gaIdSchema = z
	.string()
	.regex(/^G-[A-Z0-9]+$/, "VITE_GA_ID must be a valid GA4 measurement ID")
	.optional()

/**
 * Public `VITE_*` env. Checked once when the dev server or build starts (vite.config.ts);
 * `src/env.ts` reads the inlined values without shipping Zod to the browser.
 */
export const clientEnvSchema = z
	.object({
		VITE_MEDIA_PROVIDER: mediaProviderSchema.default("local"),
		VITE_SUPABASE_URL: z.url().optional(),
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

export type MediaProvider = z.infer<typeof mediaProviderSchema>
