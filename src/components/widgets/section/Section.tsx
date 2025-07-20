import { slugify } from "@/utils/slugify"

import { Heading } from "@/ui"

export function Section({
	title,
	description,
	children
}: {
	title?: string
	description?: string
	children: React.ReactNode
}) {
	return (
		<section className="flex flex-col gap-10 min-h-28">
			{title && (
				<Heading
					id={slugify(title)}
					className="text-2xl font-medium tracking-tight"
				>
					{title}
				</Heading>
			)}

			{description && <p className="text-muted-foreground">{description}</p>}

			{children}
		</section>
	)
}
