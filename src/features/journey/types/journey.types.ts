export type JourneyEntry = {
	id: string
	title: string
	description: string
	imageSrc?: string
	imageAlt?: string
}

export type JourneyYearGroup = {
	year: number
	entries: JourneyEntry[]
}
