import type { Metadata } from "next"

import { Freelance } from "@/widgets/freelance"

export const metadata: Metadata = {
	title: "Serbest Çalışma | Ömer Gülçiçek",
	alternates: {
		canonical: "https://omergulcicek.com/freelance/"
	}
}

export default function FreelancePage() {
	return (
		<>
			<Freelance />
		</>
	)
}
