import { z } from "zod"

const mediaProviderSchema = z.enum([
	"local",
	"supabase",
	"supabase-transform"
])

const clientEnvSchema = z
	.object({
		VITE_MEDIA_PROVIDER: mediaProviderSchema.default("local"),
		VITE_SUPABASE_URL: z.string().url().optional(),
		VITE_SUPABASE_ANON_KEY: z.string().min(1).optional()
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

export const env = clientEnvSchema.parse({
	VITE_MEDIA_PROVIDER: import.meta.env.VITE_MEDIA_PROVIDER,
	VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || undefined,
	VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || undefined
})

export type MediaProvider = z.infer<typeof mediaProviderSchema>
