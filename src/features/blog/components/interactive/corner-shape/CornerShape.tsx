"use client"

import React from "react"

import { Button } from "@/ui"

type CornerShapeType = "round" | "scoop" | "bevel" | "notch" | "squircle"

const cornerShapes: CornerShapeType[] = [
	"round",
	"scoop",
	"bevel",
	"notch",
	"squircle"
]

export function CornerShape() {
	const [selectedShape, setSelectedShape] =
		React.useState<CornerShapeType>("scoop")

	return (
		<div className="w-full space-y-2">
			<div className="flex flex-wrap gap-2">
				{cornerShapes.map((shape) => (
					<Button
						key={shape}
						variant={selectedShape === shape ? "default" : "outline"}
						size="sm"
						onClick={() => setSelectedShape(shape)}
						className="capitalize"
					>
						{shape}
					</Button>
				))}
			</div>
			<div className="w-full rounded-lg border p-6 bg-muted/50">
				<div
					// @ts-expect-error - corner-shape is a new CSS property
					style={{ cornerShape: selectedShape as CSSProperties }}
					className="transition-all duration-300 flex items-center justify-center text-primary-foreground font-semibold border bg-blue-500 h-52 w-1/2 mx-auto rounded-3xl"
				>
					Preview: {selectedShape}
				</div>
			</div>
			<div className="rounded-lg border px-3 py-1 bg-muted/30">
				<code className="text-sm font-mono">
					corner-shape: {selectedShape};
				</code>
			</div>
			<p className="text-sm text-muted-foreground">
				Güncel destekleyen tarayıcıları takip etmek için{" "}
				<a
					href="https://caniuse.com/wf-corner-shape"
					target="_blank"
					rel="noreferrer noopener"
				>
					caniuse
				</a>{" "}
				adresini ziyaret edebilirsiniz.
			</p>
		</div>
	)
}
