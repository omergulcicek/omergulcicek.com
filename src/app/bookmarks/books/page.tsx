
import type { Metadata } from 'next'

import Books from '@/components/widgets/books'
 
export const metadata: Metadata = {
  title: "Kitaplığımdaki kitapların listesi | Ömer Gülçiçek",
  alternates: {
		canonical: 'https://omergulcicek.com/bookmarks/books/',
	}
}

export default function BooksPage() {
	return (
		<Books />
	)
}
