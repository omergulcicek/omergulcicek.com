import { slugify } from "@/utils/slugify"

import { Heading } from "@/ui"

export function Section({
	title,
	type = "h1",
	children
}: {
	title?: string
	type?: string
	children: React.ReactNode
}) {
	return (
		<section className="flex flex-col justify-center gap-4 min-h-28">
			{title && (
				<Heading
					id={slugify(title)}
					as={type as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
				>
					{title}
				</Heading>
			)}

			{children}
		</section>
	)
}
