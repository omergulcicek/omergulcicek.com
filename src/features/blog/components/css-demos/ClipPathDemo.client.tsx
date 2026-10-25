"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { BlogCssInteractiveDemo } from "@/features/blog/components/BlogCssInteractiveDemo"
import { BLOG_CSS_INTERACTIVE_CANIUSE } from "@/features/blog/constants/blog-css-interactive.constants"

type ClipPathType = "circle" | "ellipse" | "polygon" | "inset" | "path"

const clipPathTypes: ClipPathType[] = [
	"circle",
	"ellipse",
	"polygon",
	"inset",
	"path"
]

const clipPathStyles: Record<ClipPathType, string> = {
	circle: "circle(40% at 50% 50%)",
	ellipse: "ellipse(130px 140px at 10% 20%)",
	polygon: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
	inset: "inset(20% 15% 20% 15% round 10%)",
	path: 'path("M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z")'
}

const clipPathLabels: Record<ClipPathType, string> = {
	circle: "Circle",
	ellipse: "Ellipse",
	polygon: "Polygon",
	inset: "Inset",
	path: "Path"
}

export function ClipPathDemo() {
	const [selectedType, setSelectedType] = useState<ClipPathType>("circle")

	return (
		<BlogCssInteractiveDemo
			caniuseHref={BLOG_CSS_INTERACTIVE_CANIUSE["clip-path"]}
			controls={
				<div className="flex flex-wrap gap-2">
					{clipPathTypes.map((type) => (
						<Button
							key={type}
							type="button"
							variant={selectedType === type ? "default" : "outline"}
							size="sm"
							onClick={() => setSelectedType(type)}
						>
							{clipPathLabels[type]}
						</Button>
					))}
				</div>
			}
			preview={
				<div
					style={{ clipPath: clipPathStyles[selectedType] }}
					className="blog-css-interactive-demo__clip-path-preview"
				>
					<div className="text-center">
						<div className="text-2xl font-bold">
							{clipPathLabels[selectedType]}
						</div>
						<div className="mt-2 font-mono text-xs opacity-80">
							{clipPathStyles[selectedType]}
						</div>
					</div>
				</div>
			}
			code={
				<code className="blog-css-interactive-demo__code-snippet">
					clip-path: {clipPathStyles[selectedType]};
				</code>
			}
		/>
	)
}
