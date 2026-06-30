import { createFileRoute } from "@tanstack/react-router"

import { PageStub } from "@/components/shared/PageStub"

export const Route = createFileRoute("/blog/$slug")({
	component: BlogPostPage
})

function BlogPostPage() {
	const { slug } = Route.useParams()

	return (
		<PageStub
			title="Blog yazısı"
			description={`Slug: /${slug} — Faz 3'te detay sayfası eklenecek.`}
		/>
	)
}
