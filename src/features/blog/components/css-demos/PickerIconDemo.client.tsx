"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { BlogCssInteractiveDemo } from "@/features/blog/components/BlogCssInteractiveDemo"
import { BLOG_CSS_INTERACTIVE_CANIUSE } from "@/features/blog/constants/blog-css-interactive.constants"

type PickerIconType = "action" | "insight" | "flow" | "premium"

const pickerIconTypes: PickerIconType[] = [
	"action",
	"insight",
	"flow",
	"premium"
]

const pickerIconContent: Record<PickerIconType, string> = {
	action: "🔥",
	insight: "🧠",
	flow: "🌊",
	premium: "💎"
}

function getPickerIconStyles(selectedType: PickerIconType) {
	return `
		.blog-css-interactive-demo__picker-select {
			appearance: base-select;
		}
		.blog-css-interactive-demo__picker-select::picker-icon {
			content: "${pickerIconContent[selectedType]}";
			transition: opacity 0.3s ease-out, transform 0.3s ease-out;
		}
	`
}

export function PickerIconDemo() {
	const [selectedType, setSelectedType] = useState<PickerIconType>("premium")

	return (
		<BlogCssInteractiveDemo
			caniuseHref={BLOG_CSS_INTERACTIVE_CANIUSE["picker-icon"]}
			controls={
				<>
					<style
						dangerouslySetInnerHTML={{
							__html: getPickerIconStyles(selectedType)
						}}
					/>
					<div className="flex flex-wrap gap-2">
						{pickerIconTypes.map((type) => (
							<Button
								key={type}
								type="button"
								variant={selectedType === type ? "default" : "outline"}
								size="sm"
								onClick={() => setSelectedType(type)}
							>
								{pickerIconContent[type]}
							</Button>
						))}
					</div>
				</>
			}
			preview={
				<div className="w-full max-w-xs">
					<select className="blog-css-interactive-demo__picker-select">
						<option value="option1">Seçenek 1</option>
						<option value="option2">Seçenek 2</option>
						<option value="option3">Seçenek 3</option>
						<option value="option4">Seçenek 4</option>
					</select>
				</div>
			}
			code={
				<code className="blog-css-interactive-demo__code-snippet blog-css-interactive-demo__code-snippet--multiline">
					{`select {
  appearance: base-select;
}

select::picker-icon {
  content: "${pickerIconContent[selectedType]}";
}`}
				</code>
			}
		/>
	)
}
