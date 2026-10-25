import { ME } from "@/constants/me.constants"

export const SOCIAL_LINKS = [
	{
		label: "GitHub",
		href: ME.contact.github
	},
	{
		label: "npm",
		href: ME.contact.npm
	},
	{
		label: "LinkedIn",
		href: ME.contact.linkedin
	},
	{
		label: "X",
		href: ME.contact.x
	}
] as const
