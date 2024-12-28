import type { Metadata } from "next"

import { Home } from "@/widgets/home"

export const metadata: Metadata = {
	title: "Kişisel Web Sitesi | Ömer Gülçiçek"
}

export default function HomePage() {
	return (
		<>
			<Home />
		</>
	)
}
