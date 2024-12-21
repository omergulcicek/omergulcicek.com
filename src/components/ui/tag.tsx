import { JSX } from "react"

import { Badge } from "@/ui/badge"
import { CategoryIcon } from "@/ui/category-icon"

export const Tag = ({
	text,
	setValue
}: {
	text: string
	setValue: (value: string) => void
}): JSX.Element => {
	return (
		<Badge
			onClick={() => setValue(text)}
			variant="secondary"
			className="flex items-center gap-1 cursor-pointer text-black/75 font-medium hover:underline"
		>
			<CategoryIcon icon={text} />
			<span>{text}</span>
		</Badge>
	)
}
