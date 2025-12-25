"use client"

import React from "react"

import { Button } from "@/ui"

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

const pickerIconLabels: Record<PickerIconType, string> = {
	action: "🔥",
	insight: "🧠",
	flow: "🌊",
	premium: "💎"
}

export function PickerIcon() {
	const [selectedType, setSelectedType] =
		React.useState<PickerIconType>("premium")

	const getPickerIconStyles = (): string => {
		const content = pickerIconContent[selectedType]
		let styles = ""
		return `
			.picker-icon-select {
				appearance: base-select;
			}
			.picker-icon-select::picker-icon {
				content: "${content}";
				${styles}
				transition: all 0.3s ease;
			}
		`
	}

	return (
		<div className="w-full space-y-2">
			<style dangerouslySetInnerHTML={{ __html: getPickerIconStyles() }} />
			<div className="flex flex-wrap gap-2">
				{pickerIconTypes.map((type) => (
					<Button
						key={type}
						variant={selectedType === type ? "default" : "outline"}
						size="sm"
						onClick={() => setSelectedType(type)}
					>
						{pickerIconLabels[type]}
					</Button>
				))}
			</div>
			<div className="w-full rounded-lg border p-6 bg-muted/50">
				<div className="flex items-center justify-center">
					<div className="w-full max-w-xs">
						<select className="picker-icon-select w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 h-9">
							<option value="option1">Seçenek 1</option>
							<option value="option2">Seçenek 2</option>
							<option value="option3">Seçenek 3</option>
							<option value="option4">Seçenek 4</option>
						</select>
					</div>
				</div>
			</div>
			<div className="rounded-lg border px-3 py-1 bg-muted/30">
				<code className="text-sm font-mono block whitespace-pre-wrap">
					<>
						{`select {
  appearance: base-select;
}

select::picker-icon {
  content: "${pickerIconContent[selectedType]}";
}`}
					</>
				</code>
			</div>
			<p className="text-sm text-muted-foreground">
				Güncel tarayıcı desteğini takip etmek için{" "}
				<a
					href="https://caniuse.com/mdn-css_selectors_picker-icon"
					target="_blank"
					rel="noreferrer noopener"
					className="text-primary underline"
				>
					caniuse
				</a>{" "}
				adresini ziyaret edebilirsiniz.
			</p>
		</div>
	)
}
