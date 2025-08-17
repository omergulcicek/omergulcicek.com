import { tagsIconMap } from "@/constants"

import { Badge } from "@/ui"

interface TagsBadgeProps {
	tags?: string[]
}

export function TagsBadge({ tags }: TagsBadgeProps) {
	if (!tags || tags.length === 0) {
		return null
	}

	return (
		<div className="flex flex-wrap gap-2">
			{tags.map((tag) => {
				const IconComponent = tagsIconMap[tag]

				return (
					<Badge
						key={tag}
						variant="secondary"
						className={`flex items-center gap-1`}
					>
						{IconComponent && <IconComponent className="size-3" />}
						{tag}
					</Badge>
				)
			})}
		</div>
	)
}
