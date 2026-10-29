import { Fragment } from "react"

import { ProseEmphasis } from "@/components/shared/ProseEmphasis"
import { parseProjectDescription } from "@/features/projects/helpers/project-description.helpers"

export function ProjectDescription({ description }: { description: string }) {
	return parseProjectDescription(description).map((segment, index) => {
		switch (segment.style) {
			case "bold":
				return <ProseEmphasis key={index}>{segment.text}</ProseEmphasis>
			case "italic":
				return <em key={index}>{segment.text}</em>
			case "code":
				return (
					<code
						key={index}
						className="bg-muted text-foreground rounded px-1 py-0.5 font-mono text-[0.85em]"
					>
						{segment.text}
					</code>
				)
			default:
				return <Fragment key={index}>{segment.text}</Fragment>
		}
	})
}
