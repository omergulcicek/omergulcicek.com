export interface BookInfoPropsType {
	/** Book title (optional, can be inferred from context) */
	title?: string
	/** Book link */
	bookLink?: string
	/** Author name */
	author: string
	/** Author link */
	authorLink?: string
	/** Translator name if any */
	translator?: string
	/** Translator link */
	translatorLink?: string
	/** Total page count */
	pages?: number
	/** Publisher name */
	publisher?: string
	/** Publisher link */
	publisherLink?: string
	/** Publication year */
	year?: number
	/** Personal score out of 10 */
	myRating?: number
	/** Whether this is one of my favorites */
	isFavorite?: boolean
}
