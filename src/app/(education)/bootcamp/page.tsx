import Link from "next/link"

import { Container } from "@/shared/container"
import { Title } from "@/ui/title"

export default function Bootcamp() {
	return (
		<>
			<Container className="mt-10 md:mt-24 max-w-2xl">
				<Title tag="h1" className="md:mb-4">
					Bootcamp
				</Title>
				<p className="text-2xl text-neutral-500">Frontend kod eğitimi</p>
			</Container>
		</>
	)
}
