import { z } from "zod"

const yearMonthSchema = z.string().regex(/^\d{4}-(0[1-9]|1[0-2])$/)

export const meExperienceSchema = z.object({
	id: z.string(),
	company: z.string(),
	role: z.string(),
	startDate: yearMonthSchema,
	endDate: yearMonthSchema.nullable(),
	summary: z.string(),
	technologies: z.array(z.string())
})

export const meProjectSchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string(),
	href: z.url(),
	group: z.enum(["personal", "virastack"]),
	status: z.enum(["live", "package", "coming_soon", "paused", "archived"]),
	color: z.string().startsWith("text-")
})

export const meHobbySchema = z.object({
	id: z.string(),
	name: z.string(),
	description: z.string(),
	url: z.string().optional()
})

export const meFavoriteSchema = z.object({
	id: z.string(),
	value: z.string(),
	description: z.string(),
	url: z.url().optional()
})

export const meJourneyEntrySchema = z.object({
	id: z.string(),
	title: z.string(),
	description: z.string().optional(),
	imageSrc: z.string().startsWith("/").optional(),
	imageAlt: z.string().optional(),
	imageObjectPosition: z.string().optional()
})

export const meJourneyYearSchema = z.object({
	year: z.number().int(),
	entries: z.array(meJourneyEntrySchema).min(1)
})

export const mePrincipleSchema = z.object({
	title: z.string(),
	text: z.string()
})

export const meStackCategorySchema = z.object({
	id: z.string(),
	label: z.string(),
	itemIds: z.array(z.string()).min(1)
})

export const meSchema = z
	.object({
		personal: z.object({
			fullName: z.string(),
			title: z.string()
		}),
		contact: z.object({
			email: z.email(),
			github: z.url(),
			linkedin: z.url(),
			x: z.url(),
			xHandle: z.string().startsWith("@"),
			npm: z.url(),
			raindrop: z.url(),
			resume: z.object({
				tr: z.string().startsWith("/"),
				en: z.string().startsWith("/")
			})
		}),
		site: z.object({
			url: z.url(),
			repository: z.url()
		}),
		experiences: z.array(meExperienceSchema),
		projects: z.array(meProjectSchema),
		hobbies: z.array(meHobbySchema),
		favorites: z.array(meFavoriteSchema),
		journey: z.array(meJourneyYearSchema),
		principles: z.array(mePrincipleSchema),
		stack: z.object({
			categories: z.array(meStackCategorySchema),
			home: z.array(z.string()).min(1)
		})
	})
	.strict()

export type Me = z.infer<typeof meSchema>
export type MeExperience = z.infer<typeof meExperienceSchema>
export type MeProject = z.infer<typeof meProjectSchema>
export type MeFavorite = z.infer<typeof meFavoriteSchema>
export type MeJourneyYear = z.infer<typeof meJourneyYearSchema>
export type MeJourneyEntry = z.infer<typeof meJourneyEntrySchema>
export type MeStackCategory = z.infer<typeof meStackCategorySchema>
