"use client"

import React from "react"

import { Button } from "@/ui"

type StretchMode = "percentage" | "stretch"

export function Stretch() {
	const [mode, setMode] = React.useState<StretchMode>("percentage")

	return (
		<div className="w-full space-y-4">
			<div className="flex flex-wrap gap-2">
				<Button
					variant={mode === "percentage" ? "default" : "outline"}
					size="sm"
					onClick={() => setMode("percentage")}
				>
					width: 100% (taşar)
				</Button>
				<Button
					variant={mode === "stretch" ? "default" : "outline"}
					size="sm"
					onClick={() => setMode("stretch")}
				>
					width: stretch (taşmaz)
				</Button>
			</div>
			<div
				className="w-full rounded-lg border-2 border-dashed bg-muted/30"
				style={{
					width: "100%",
					height: "200px",
					position: "relative",
					overflow: "visible"
				}}
			>
				<div
					className="absolute border-2 border-blue-500 bg-blue-500/20 transition-all duration-300 flex items-center justify-center text-primary font-semibold"
					// @ts-ignore - stretch is a new CSS property
					style={{
						width: mode === "stretch" ? "stretch" : "100%",
						height: mode === "stretch" ? "stretch" : "100%",
						margin: "40px",
						top: 0,
						left: 0
					}}
				>
					{mode === "stretch" ? "stretch" : "100%"}
				</div>
			</div>
			<div className="rounded-lg border px-3 py-2 bg-muted/30">
				<code className="text-sm font-mono block">
					width: {mode === "stretch" ? "stretch" : "100%"};
				</code>
				<code className="text-sm font-mono block mt-1">
					height: {mode === "stretch" ? "stretch" : "100%"};
				</code>
				<code className="text-sm font-mono block mt-1">margin: 20px;</code>
			</div>
			<p className="text-sm text-muted-foreground">
				Güncel destekleyen tarayıcıları takip etmek için{" "}
				<a
					href="https://caniuse.com/css-width-stretch"
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
