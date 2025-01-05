import { JSX } from "react"

import { Badge } from "@/ui/badge"
import { CategoryIcon } from "@/ui/category-icon"

export const Tag = ({
	text,
	setValue
}: {
	text: string[]
	setValue?: (value: string) => void
}): JSX.Element => {
	if (!text) return <></>

	return (
		<div className="flex items-center gap-1">
			{text?.map((tag, index) => (
				<Badge
					key={index}
					onClick={() => setValue && setValue(tag)}
					variant="secondary"
					className="flex items-center gap-1 cursor-pointer text-black/75 font-medium whitespace-nowrap hover:underline"
				>
					<CategoryIcon icon={tag} />
					<span>{tag}</span>
				</Badge>
			))}
		</div>
	)
}
