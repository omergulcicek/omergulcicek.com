import { Link } from "@tanstack/react-router"

import { Container } from "@/components/shared/Container"
import { PageHeader } from "@/components/shared/page-header"
import { pageShellClass, proseParagraphClass } from "@/components/shared/prose.styles"

type PageStubProps = {
	title: string
	description?: string
}

export function PageStub({ title, description }: PageStubProps) {
	return (
		<Container className={pageShellClass}>
			<PageHeader title={title}>
				{description ? (
					<p className={proseParagraphClass}>{description}</p>
				) : null}
			</PageHeader>
			<p className="text-muted-foreground text-sm">
				<Link to="/" className="hover:underline">
					Ana sayfa
				</Link>
			</p>
		</Container>
	)
}
