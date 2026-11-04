import { createFileRoute, notFound } from "@tanstack/react-router"

import { buildPageHead } from "@/helpers/seo/build-page-head"

import { Container } from "@/components/shared/Container"
import { pageShellClass } from "@/components/shared/prose.styles"
import { compileMdxSandboxFn } from "@/features/blog/api/mdx-sandbox.api"
import { BlogProse } from "@/features/blog/components/BlogProse"
import { blogMdxComponentNames } from "@/features/blog/constants/blog-mdx-component-names.constants"

const MDX_SANDBOX_FIXTURES = {
	notice: `<BlogNotice title="Sandbox" variant="info">
Bu sayfa yalnızca geliştirme ortamında MDX bileşenlerini test etmek içindir.
</BlogNotice>`,
	table: `<MdxTable headers={["Özellik", "Durum"]} rows={[["Chart", "Hazır"], ["Carousel", "Hazır"]]} />`,
	chart: `<ChartAreaLinear
	title="Sandbox"
	description="Örnek veri"
	data={[{ year: "2024", count: 12 }, { year: "2025", count: 18 }, { year: "2026", count: 9 }]}
	config={{ count: { label: "Adet", color: "var(--chart-1)" } }}
/>`
} as const

export const Route = createFileRoute("/dev/mdx-sandbox")({
	beforeLoad: () => {
		if (import.meta.env.PROD) {
			throw notFound()
		}
	},
	head: () =>
		buildPageHead({
			title: "MDX Sandbox",
			description: "Development-only MDX component preview.",
			path: "/dev/mdx-sandbox",
			robots: "noindex, nofollow"
		}),
	loader: async () => {
		const compiled = await Promise.all(
			Object.entries(MDX_SANDBOX_FIXTURES).map(async ([key, content]) => {
				const html = await compileMdxSandboxFn({ data: { content } })

				return [key, html] as const
			})
		)

		return {
			componentNames: blogMdxComponentNames,
			fixtures: Object.fromEntries(compiled)
		}
	},
	component: MdxSandboxPage
})

function MdxSandboxPage() {
	const { componentNames, fixtures } = Route.useLoaderData()

	return (
		<Container className={pageShellClass}>
			<div className="flex flex-col gap-10 py-10">
				<header className="flex flex-col gap-2">
					<h1 className="text-xl font-semibold text-foreground">MDX Sandbox</h1>
					<p className="text-muted-foreground text-sm">
						Kayıtlı bileşenler: {componentNames.join(", ")}
					</p>
				</header>

				{Object.entries(fixtures).map(([key, html]) => (
					<section key={key} className="flex flex-col gap-4">
						<h2 className="text-base font-medium text-foreground">{key}</h2>
						<BlogProse html={html} />
					</section>
				))}
			</div>
		</Container>
	)
}
