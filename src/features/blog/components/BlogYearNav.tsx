import { BLOG_UI } from "@/features/blog/constants/blog.constants"

type BlogYearNavProps = {
	years: string[]
	onSelect: (year: string) => void
}

export function BlogYearNav({ years, onSelect }: BlogYearNavProps) {
	return (
		<nav
			aria-label={BLOG_UI.yearNavAriaLabel}
			className="text-muted-foreground -mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs tabular-nums md:-mt-6"
		>
			{years.map((year) => (
				<button
					key={year}
					type="button"
					className="focus-link hover:text-foreground underline-offset-4 transition-colors hover:underline"
					onClick={() => onSelect(year)}
				>
					{year}
				</button>
			))}
		</nav>
	)
}
