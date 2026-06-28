"use client"

import React from "react"

import { Button } from "@/ui"

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

export function ClipPath() {
	const [selectedType, setSelectedType] = React.useState<ClipPathType>("circle")

	return (
		<div className="w-full space-y-2">
			<div className="flex flex-wrap gap-2">
				{clipPathTypes.map((type) => (
					<Button
						key={type}
						variant={selectedType === type ? "default" : "outline"}
						size="sm"
						onClick={() => setSelectedType(type)}
					>
						{clipPathLabels[type]}
					</Button>
				))}
			</div>
			<div className="w-full rounded-lg border p-6 bg-muted/50">
				<div className="flex items-center justify-center">
					<div
						style={{ clipPath: clipPathStyles[selectedType] }}
						className="transition-all duration-300 flex items-center justify-center text-primary-foreground font-semibold bg-gradient-to-br from-blue-500 to-purple-600 h-52 w-52"
					>
						<div className="text-center">
							<div className="text-2xl font-bold mb-2">
								{clipPathLabels[selectedType]}
							</div>
							<div className="text-xs opacity-80 font-mono">
								{clipPathStyles[selectedType]}
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="rounded-lg border px-3 py-1 bg-muted/30">
				<code className="text-sm font-mono">
					clip-path: {clipPathStyles[selectedType]};
				</code>
			</div>
			<p className="text-sm text-muted-foreground">
				Güncel tarayıcı desteğini takip etmek için{" "}
				<a
					href="https://caniuse.com/css-clip-path"
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
