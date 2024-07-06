"use client"

import Bookmarks from "@/layouts/bookmarks-layout"

import { FontList } from "@/widgets/font-list"

export default function Fonts() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>Yazı Tipleri</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>Yazı tipi koleksiyonu</Bookmarks.PageSubTitle>
			<Bookmarks.PageContent>
				<FontList />
			</Bookmarks.PageContent>
		</Bookmarks>
	)
}
