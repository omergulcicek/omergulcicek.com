"use client"

import Bookmarks from "@/layouts/bookmarks-layout"
import { FeyzList } from "@/widgets/feyz-list"

export default function BookmarksPage() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>Feyz</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>Tüm yer imlerim</Bookmarks.PageSubTitle>
			<Bookmarks.PageContent>
				<iframe
					style={{ border: "0", width: "100%", height: "450px" }}
					allowFullScreen
					src="https://raindrop.io/omergulcicek/embed/me/no-header=true"
				></iframe>
			</Bookmarks.PageContent>
		</Bookmarks>
	)
}
