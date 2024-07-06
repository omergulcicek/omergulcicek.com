"use client"

import Link from "next/link"

import Bookmarks from "@/layouts/bookmarks-layout"

export default function Reading() {
	return (
		<Bookmarks>
			<Bookmarks.PageTitle>Makaleler</Bookmarks.PageTitle>
			<Bookmarks.PageSubTitle>
				Okuduğum makalelerin listesi
			</Bookmarks.PageSubTitle>
		</Bookmarks>
	)
}
