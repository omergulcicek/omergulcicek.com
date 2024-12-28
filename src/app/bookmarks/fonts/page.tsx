import type { Metadata } from "next"

import Fonts from "@/components/widgets/fonts"

export const metadata: Metadata = {
	title: "Yazı tipi koleksiyonu | Ömer Gülçiçek",
	alternates: {
		canonical: "https://omergulcicek.com/bookmarks/fonts/"
	}
}

export default function FontsPage() {
	return <Fonts />
}
