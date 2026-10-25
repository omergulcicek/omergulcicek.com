import { Badge } from "@/components/ui/badge"
import { StackLogo } from "@/components/shared/StackLogo"
import type { StackItem } from "@/constants/stack.constants"

type StackPillProps = {
	item: StackItem
}

export function StackPill({ item }: StackPillProps) {
	return (
		<li>
			<Badge variant="secondary" asChild>
				<a
					href={item.href}
					target="_blank"
					rel="noopener noreferrer"
					className="focus-link"
				>
					<StackLogo stackId={item.id} label={item.label} className="size-3" />
					{item.label}
				</a>
			</Badge>
		</li>
	)
}
