export type BlogMediaType = "Film" | "Dizi"

export type BlogMediaInfoProps = {
	title: string
	link: string
	type?: BlogMediaType
	imdbRating?: string
	year?: number
	director?: string
	directorLink?: string
	myRating?: number
	myScore?: number
	isFavorite?: boolean
}
