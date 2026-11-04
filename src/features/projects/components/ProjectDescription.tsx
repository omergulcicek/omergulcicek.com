import { Fragment } from "react"

import { ProseEmphasis } from "@/components/shared/ProseEmphasis"
import { parseProjectDescription } from "@/features/projects/helpers/project-description.helpers"

export function ProjectDescription({ description }: { description: string }) {
	return parseProjectDescription(description).map((segment) => {
		switch (segment.style) {
			case "bold":
				return <ProseEmphasis key={segment.key}>{segment.text}</ProseEmphasis>
			case "italic":
				return <em key={segment.key}>{segment.text}</em>
			case "code":
				return (
					<code
						key={segment.key}
						className="bg-muted text-foreground rounded px-1 py-0.5 font-mono text-[0.85em]"
					>
						{segment.text}
					</code>
				)
			default:
				return <Fragment key={segment.key}>{segment.text}</Fragment>
		}
	})
}
