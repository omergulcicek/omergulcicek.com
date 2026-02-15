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
					<IconBadge
						key={tag}
						icon={
							IconComponent ? <IconComponent width={12} height={12} /> : null
						}
						label={tag}
					/>
				)
			})}
		</div>
	)
}

export function IconBadge({
	icon,
	label,
	simple = false
}: {
	icon: React.ReactNode
	label: string
	simple?: boolean
}) {
	if (simple) {
		return (
			<span className="flex items-center gap-2 text-sm">
				{icon}
				{label}
			</span>
		)
	}

	return (
		<Badge variant="secondary" className="flex items-center gap-1">
			{icon}
			{label}
		</Badge>
	)
}
