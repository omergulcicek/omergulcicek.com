export interface MediaInfoPropsType {
	/** Media title */
	title: string
	/** Link to media */
	link: string
	/** Type of media: movie or series */
	type?: "Film" | "Dizi"
	/** IMDB rating */
	imdbRating?: string
	/** Release year */
	year?: number
	/** Director or creator */
	director?: string
	/** Link to director */
	directorLink?: string
	/** Personal score out of 10 */
	myRating?: number
}
