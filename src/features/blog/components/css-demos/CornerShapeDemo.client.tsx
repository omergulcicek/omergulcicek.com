"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { BlogCssInteractiveDemo } from "@/features/blog/components/BlogCssInteractiveDemo"
import { BLOG_CSS_INTERACTIVE_CANIUSE } from "@/features/blog/constants/blog-css-interactive.constants"
import type { BlogCssCustomProperties } from "@/features/blog/types/blog-css-interactive.types"

type CornerShapeType = "round" | "scoop" | "bevel" | "notch" | "squircle"

const cornerShapes: CornerShapeType[] = [
	"round",
	"scoop",
	"bevel",
	"notch",
	"squircle"
]

export function CornerShapeDemo() {
	const [selectedShape, setSelectedShape] = useState<CornerShapeType>("scoop")

	return (
		<BlogCssInteractiveDemo
			caniuseHref={BLOG_CSS_INTERACTIVE_CANIUSE["corner-shape"]}
			controls={
				<div className="flex flex-wrap gap-2">
					{cornerShapes.map((shape) => (
						<Button
							key={shape}
							type="button"
							variant={selectedShape === shape ? "default" : "outline"}
							size="sm"
							onClick={() => setSelectedShape(shape)}
							className="capitalize"
						>
							{shape}
						</Button>
					))}
				</div>
			}
			preview={
				<div
					style={{ cornerShape: selectedShape } as BlogCssCustomProperties}
					className="blog-css-interactive-demo__corner-shape-preview"
				>
					Preview: {selectedShape}
				</div>
			}
			code={
				<code className="blog-css-interactive-demo__code-snippet">
					corner-shape: {selectedShape};
				</code>
			}
		/>
	)
}
