import type { Metadata } from "next"

import { Bootcamp } from "@/widgets/bootcamp"
import { Freelance } from "@/widgets/freelance"
import { MailText } from "@/widgets/mail-text"
import { PrivateLesson } from "@/widgets/private-lesson"
import { Roadmap } from "@/widgets/roadmap"

export const metadata: Metadata = {
	title: "Fırsatlar | Ömer Gülçiçek",
	alternates: {
		canonical: "https://omergulcicek.com/opportunities/"
	}
}

export default function OpportunitiesPage() {
	return (
		<>
			<MailText />
			<Bootcamp />
			<Roadmap />
			<Freelance />
			<PrivateLesson />
		</>
	)
}
