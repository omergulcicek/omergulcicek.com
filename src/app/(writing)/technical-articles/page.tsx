import Link from "next/link"

import Container from "@/shared/container"
import Title from "@/ui/title"

export default function TechnicalArticles() {
	return (
		<Container className="mt-10 md:mt-24 max-w-2xl">
			<Title tag="h1">Teknik Yazılar</Title>
			<Title tag="h2">HTML, CSS, JavaScript, ES6+, React, NextJS</Title>
		</Container>
	)
}
