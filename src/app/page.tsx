import { Home } from "@/widgets/home"

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Kişisel Web Sitesi | Ömer Gülçiçek",
}

export default function HomePage() {
	return (
		<>
			<Home />
		</>
	)
}
