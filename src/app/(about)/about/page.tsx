import type { Metadata } from "next"

import { About } from "@/widgets/about"

export const metadata: Metadata = {
	title: "Merhaba, ben Ömer Gülçiçek | Ömer Gülçiçek",
	alternates: {
		canonical: "https://omergulcicek.com/about/"
	}
}

export default function AboutPage() {
	return <About />
}
