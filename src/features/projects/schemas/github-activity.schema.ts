import { z } from "zod"

export const githubCalendarSchema = z.object({
	contributions: z.array(
		z.object({ date: z.string(), count: z.number(), level: z.number() })
	)
})

export const githubEventsSchema = z.array(
	z.object({
		type: z.string(),
		repo: z.object({ name: z.string() }).optional(),
		payload: z.object({ commits: z.array(z.unknown()).optional() }).optional()
	})
)
