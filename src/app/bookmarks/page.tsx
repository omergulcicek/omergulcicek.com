"use client"

import Bookmarks from "@/layouts/bookmarks-layout"

export default function BookmarksPage() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>Yer İmleri</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>
				Yer imlerimi raindrop.io'da saklıyorum
			</Bookmarks.PageSubTitle>
			<Bookmarks.PageContent>
				<iframe
					style={{
						border: "0",
						width: "100%",
						height: "450px"
					}}
					allowFullScreen
					src="https://raindrop.io/omergulcicek/embed/me/no-header=true"
				></iframe>
			</Bookmarks.PageContent>
		</Bookmarks>
	)
}
