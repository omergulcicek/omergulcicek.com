import { Medium } from "@/components/icons/Medium"

import { GitHub, LinkedIn, NPM, XTwitter } from "@/icons"

import { USER } from "./user.constants"

export const SOCIALS = [
	{
		title: "GitHub",
		icon: GitHub,
		href: USER.socials.github
	},
	{
		title: "LinkedIn",
		icon: LinkedIn,
		href: USER.socials.linkedin
	},
	{
		title: "Twitter",
		icon: XTwitter,
		href: USER.socials.twitter
	},
	{
		title: "Medium",
		icon: Medium,
		href: USER.socials.medium
	},
	{
		title: "NPM",
		icon: NPM,
		href: USER.socials.npm
	}
]
