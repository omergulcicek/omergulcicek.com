import { Badge } from "@/components/ui/badge"
import { TechnologyTagIcon } from "@/features/experiences/components/technology-tag-icon"
import { cn } from "@/lib/utils"

type TechnologyBadgesProps = {
	tags: string[]
	className?: string
}

export function TechnologyBadges({ tags, className }: TechnologyBadgesProps) {
	return (
		<ul className={cn("flex flex-wrap gap-2", className)}>
			{tags.map((tag) => (
				<li key={tag}>
					<Badge variant="outline">
						<TechnologyTagIcon tag={tag} className="size-3 shrink-0" />
						{tag}
					</Badge>
				</li>
			))}
		</ul>
	)
}
