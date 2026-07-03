import { z } from "zod"

export const githubContributionSchema = z.object({
	date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
	count: z.number().nonnegative(),
	level: z.number().int().min(0).max(4)
})

export const githubContributionsResponseSchema = z.object({
	contributions: z.array(githubContributionSchema)
})

export type GitHubContribution = z.infer<typeof githubContributionSchema>
