import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { BLOG_UI } from "@/features/blog/constants/blog.constants"
import type { BlogSort } from "@/features/blog/types/blog.types"

type BlogSortControlProps = {
	value: BlogSort
	onChange: (sort: BlogSort) => void
	className?: string
}

export function BlogSortControl({
	value,
	onChange,
	className
}: BlogSortControlProps) {
	const Icon = value === "newest" ? ArrowDownWideNarrow : ArrowUpNarrowWide
	const label = BLOG_UI.sortToggleLabel[value]

	return (
		<Button
			type="button"
			size="icon-sm"
			variant="ghost"
			aria-label={label}
			title={label}
			className={cn(
				"text-muted-foreground hover:text-foreground shrink-0 transition-transform duration-150 ease-out active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100",
				className
			)}
			onClick={() => onChange(value === "newest" ? "oldest" : "newest")}
		>
			<Icon aria-hidden />
		</Button>
	)
}
