import { Fragment } from "react"

import { cn } from "@/lib/utils"

import { ProseLink } from "@/components/shared/ProseLink"
import { getPublishedVirastackProjects } from "@/features/projects"

type VirastackProductLinksProps = {
	ariaLabel: string
	className?: string
}

/** Product names only ("Academy · Start · …") in each product's footer accent color. */
export function VirastackProductLinks({
	ariaLabel,
	className
}: VirastackProductLinksProps) {
	const products = getPublishedVirastackProjects().map((project) => ({
		id: project.id,
		href: project.href,
		name: project.title.replace(/^ViraStack /, ""),
		colorClass: project.color
	}))

	return (
		<nav
			aria-label={ariaLabel}
			className={cn(
				"flex flex-wrap items-center gap-x-2 gap-y-1 text-sm",
				className
			)}
		>
			{products.map((product, index) => (
				<Fragment key={product.id}>
					{index > 0 ? (
						<span className="text-muted-foreground" aria-hidden>
							·
						</span>
					) : null}
					<ProseLink
						href={product.href}
						className={cn("italic", product.colorClass)}
					>
						{product.name}
					</ProseLink>
				</Fragment>
			))}
		</nav>
	)
}
