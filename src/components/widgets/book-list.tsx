import { AnimationListLayout } from "@/layouts/animation-list-layout"

import { bookData } from "@/data/book-data"

export function BookList() {
	if (!bookData) return null

	return <AnimationListLayout data={bookData} />
}
