import WebSites from '@/components/widgets/websites'
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: "Karşılaştığım güzel siteler | Ömer Gülçiçek",
  alternates: {
		canonical: 'https://omergulcicek.com/bookmarks/websites/',
	}
}

export default function WebSitesPage() {
	return (
		<WebSites />
	)
}
