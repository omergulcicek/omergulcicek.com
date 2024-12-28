import type { Metadata } from "next"

import WebSites from "@/components/widgets/websites"

export const metadata: Metadata = {
	title: "Karşılaştığım güzel siteler | Ömer Gülçiçek",
	alternates: {
		canonical: "https://omergulcicek.com/bookmarks/websites/"
	}
}

export default function WebSitesPage() {
	return <WebSites />
}
