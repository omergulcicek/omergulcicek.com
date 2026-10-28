import { meContent } from "@/lib/content/me-content"

import type { Me, MeProject } from "@/schemas/me.schema"

/**
 * Facts about Ömer used across the site, from `me.json` (validated at build time).
 * Private fields (leave reasons, education years, unverified results) are intentionally omitted from the JSON.
 */
export const ME: Me = meContent

export const ME_EMAIL_HREF = `mailto:${ME.contact.email}`

export function getMeProject(id: string): MeProject {
	const project = ME.projects.find((item) => item.id === id)

	if (!project) {
		throw new Error(`Unknown project id in me.json: ${id}`)
	}

	return project
}
