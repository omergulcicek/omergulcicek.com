import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
	server: {},
	client: {
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional()
	},
	runtimeEnv: {
		NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
	}
})
