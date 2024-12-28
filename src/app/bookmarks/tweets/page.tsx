import type { Metadata } from "next"

import Tweets from "@/components/widgets/tweets"

export const metadata: Metadata = {
	title: "Yazılım alanında yararlı tweetler | Ömer Gülçiçek",
	alternates: {
		canonical: "https://omergulcicek.com/bookmarks/tweets/"
	}
}

export default function TweetsPage() {
	return <Tweets />
}
