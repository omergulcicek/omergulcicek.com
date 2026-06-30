import { blogTocClass } from "@/components/shared/prose.styles"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogHeading } from "@/features/blog/types/blog-heading.types"
import { cn } from "@/lib/utils"

type BlogPostTocProps = {
	headings: BlogHeading[]
	className?: string
}

export function BlogPostToc({ headings, className }: BlogPostTocProps) {
	if (headings.length === 0) {
		return null
	}

	return (
		<nav
			aria-label={BLOG_UI.tocAriaLabel}
			className={cn(blogTocClass, className)}
		>
			<p className="text-muted-foreground mb-2 text-sm font-medium">
				{BLOG_UI.tocLabel}
			</p>
			<ol className="flex flex-col gap-1.5 text-sm">
				{headings.map((heading) => (
					<li
						key={heading.id}
						className={cn(
							heading.level === 3 && "ps-4",
							"text-muted-foreground"
						)}
					>
						<a
							href={`#${heading.id}`}
							className="focus-link text-foreground hover:text-foreground/80 underline-offset-4 hover:underline"
						>
							{heading.text}
						</a>
					</li>
				))}
			</ol>
		</nav>
	)
}
