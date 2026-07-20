import { StackPill } from "@/features/stack/components/stack-pill"
import { STACK_CATEGORY_SECTIONS } from "@/features/stack/constants/stack.constants"
import { cn } from "@/lib/utils"

type StackCategoryListProps = {
	className?: string
}

export function StackCategoryList({ className }: StackCategoryListProps) {
	return (
		<ol className={cn("divide-border divide-y", className)}>
			{STACK_CATEGORY_SECTIONS.map((category, index) => {
				const number = String(index + 1).padStart(2, "0")

				return (
					<li
						key={category.id}
						className="grid gap-3 py-4 first:pt-0 last:pb-0 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-6 md:py-5"
					>
						<div className="text-muted-foreground flex items-baseline gap-2 text-sm">
							<span className="font-mono tabular-nums">{number}</span>
							<span>{category.label}</span>
						</div>
						<ul className="flex flex-wrap gap-2">
							{category.items.map((item) => (
								<StackPill key={item.id} item={item} />
							))}
						</ul>
					</li>
				)
			})}
		</ol>
	)
}
