import { createFileRoute, notFound } from "@tanstack/react-router"

import { Container } from "@/components/shared/Container"
import { pageShellClass } from "@/components/shared/prose.styles"
import { BlogProse } from "@/features/blog/components/blog-prose"
import { blogMdxComponentNames } from "@/features/blog/constants/blog-mdx-component-names.constants"
import { enrichBlogContentHtml } from "@/features/blog/helpers/blog-content-html"
import { compileMdxToHtml } from "@/features/blog/lib/compile-mdx-content"
import { buildPageHead } from "@/lib/seo/build-page-head"

const MDX_SANDBOX_FIXTURES = {
	notice: `<BlogNotice title="Sandbox" variant="info">
Bu sayfa yalnızca geliştirme ortamında MDX bileşenlerini test etmek içindir.
</BlogNotice>`,
	table: `<MdxTable headers={["Özellik", "Durum"]} rows={[["Chart", "Hazır"], ["Carousel", "Hazır"]]} />`,
	chart: `<ChartAreaLinear />`
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
				const html = await compileMdxToHtml(content)
				const enriched = enrichBlogContentHtml(html)

				return [key, enriched.contentHtml] as const
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
					<h1 className="text-xl font-semibold text-foreground">
						MDX Sandbox
					</h1>
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
