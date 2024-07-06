"use client"

import Bookmarks from "@/layouts/bookmarks-layout"

import { FeyzList } from "@/widgets/feyz-list"

export default function BookmarksPage() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>Feyz</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>Tüm yer imlerim</Bookmarks.PageSubTitle>
			<Bookmarks.PageContent>
				<FeyzList />
			</Bookmarks.PageContent>
		</Bookmarks>
	)
}
