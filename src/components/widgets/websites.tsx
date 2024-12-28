"use client"

import Bookmarks from "@/layouts/bookmarks-layout"

import { WebSitesList } from "@/widgets/websites-list"

export default function WebSites() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>Web Siteler</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>
				Karşılaştığım güzel siteler
			</Bookmarks.PageSubTitle>
			<Bookmarks.PageContent>
				<WebSitesList />
			</Bookmarks.PageContent>
		</Bookmarks>
	)
}
