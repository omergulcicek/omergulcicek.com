import { slugify } from "@/utils/slugify"

import { Heading } from "@/ui"

export function Section({
	title,
	type = "h1",
	titleAddon,
	children
}: {
	title?: string
	type?: string
	titleAddon?: React.ReactNode
	children: React.ReactNode
}) {
	return (
		<section className="flex flex-col justify-center gap-4 min-h-28">
			{title && (
				<div className="flex items-center justify-between gap-3">
					<Heading
						id={slugify(title)}
						as={type as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
					>
						{title}
					</Heading>

					{titleAddon && <div>{titleAddon}</div>}
				</div>
			)}

			{children}
		</section>
	)
}
