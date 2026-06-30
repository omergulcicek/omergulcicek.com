import { Link } from "@tanstack/react-router"

import { Container } from "@/components/shared/Container"

type PageStubProps = {
	title: string
	description?: string
}

export function PageStub({ title, description }: PageStubProps) {
	return (
		<Container className="py-10 md:py-16">
			<h1 className="text-base font-medium">{title}</h1>
			{description ? (
				<p className="text-muted-foreground mt-4 text-base">{description}</p>
			) : null}
			<p className="text-muted-foreground mt-6 text-sm">
				<Link to="/" className="hover:underline">
					Ana sayfa
				</Link>
			</p>
		</Container>
	)
}
