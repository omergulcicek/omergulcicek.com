import { ME } from "@/constants/me.constants"

export type Hobby = {
	id: string
	title: string
	text: string
	href?: string
}

export const HOBBIES: Hobby[] = ME.hobbies.map((hobby) => ({
	id: hobby.id,
	title: hobby.name,
	text: hobby.description,
	href: hobby.url
}))
