import meJson from "@/constants/me.json"
import { meSchema } from "@/schemas/me.schema"

import type { Me, MeProject } from "@/schemas/me.schema"

/**
 * Facts about Ömer used across the site, validated from `me.json` at module load.
 * Private fields (leave reasons, education years, unverified results) are intentionally omitted from the JSON.
 */
export const ME: Me = meSchema.parse(meJson)

export const ME_EMAIL_HREF = `mailto:${ME.contact.email}`

export function getMeProject(id: string): MeProject {
	const project = ME.projects.find((item) => item.id === id)

	if (!project) {
		throw new Error(`Unknown project id in me.json: ${id}`)
	}

	return project
}
