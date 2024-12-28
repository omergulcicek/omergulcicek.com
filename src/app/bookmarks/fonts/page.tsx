import Fonts from "@/components/widgets/fonts";

import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Yazı tipi koleksiyonu | Ömer Gülçiçek",
	alternates: {
		canonical: 'https://omergulcicek.com/bookmarks/fonts/',
	}
}

export default function FontsPage() {
	return (
		<Fonts />
	)
}
