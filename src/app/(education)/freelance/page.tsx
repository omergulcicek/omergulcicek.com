import Link from "next/link"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

export default function Freelance() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-2xl">
				<Title tag="h1">Serbest Çalışma</Title>
				<Title tag="h2">Freelance iş fırsatları</Title>
			</Container>
		</>
	)
}
