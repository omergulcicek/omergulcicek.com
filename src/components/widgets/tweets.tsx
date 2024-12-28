"use client"

import Bookmarks from "@/layouts/bookmarks-layout"

import { TweetList } from "@/widgets/tweet-list"

export default function Tweets() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>Tweets</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>
				Yazılım alanında yararlı tweetler
			</Bookmarks.PageSubTitle>

			<Bookmarks.PageContent>
				<TweetList />
			</Bookmarks.PageContent>
		</Bookmarks>
	)
}
