"use client"

import Bookmarks from "@/layouts/bookmarks-layout"

import { BookList } from "@/widgets/book-list"

export default function Books() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>Kitap</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>
				Okuduğum kitapların listesi
			</Bookmarks.PageSubTitle>
			<Bookmarks.PageContent>
				<BookList />
			</Bookmarks.PageContent>
		</Bookmarks>
	)
}
