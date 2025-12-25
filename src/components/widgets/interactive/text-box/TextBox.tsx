"use client"

import React from "react"

import { Button } from "@/ui"

type TextBoxMode = "normal" | "trim-start"

export function TextBox() {
	const [mode, setMode] = React.useState<TextBoxMode>("normal")

	return (
		<div className="w-full space-y-4">
			<div className="flex flex-wrap gap-2">
				<Button
					variant={mode === "normal" ? "default" : "outline"}
					size="sm"
					onClick={() => setMode("normal")}
				>
					text-box: normal
				</Button>
				<Button
					variant={mode === "trim-start" ? "default" : "outline"}
					size="sm"
					onClick={() => setMode("trim-start")}
				>
					text-box: trim-start cap text
				</Button>
			</div>
			<div className="w-full rounded-lg border-2 border-dashed p-6 bg-muted/30">
				<div className="flex gap-4">
					<div className="w-24 h-24 rounded-lg bg-linear-to-br from-blue-500 to-purple-500 shrink-0" />
					<h3
						className="text-3xl font-bold leading-tight transition-all duration-300 border m-0!"
						style={{
							// @ts-ignore - text-box is a new CSS property
							textBox: mode === "trim-start" ? "trim-start cap text" : "normal"
						}}
					>
						Başlık Metni
					</h3>
				</div>
			</div>
			<div className="rounded-lg border px-3 py-2 bg-muted/30">
				<code className="text-sm font-mono block">
					text-box: {mode === "trim-start" ? "trim-start cap text" : "normal"};
				</code>
			</div>
			<p className="text-sm text-muted-foreground">
				Güncel destekleyen tarayıcıları takip etmek için{" "}
				<a
					href="https://caniuse.com/mdn-css_properties_text-box"
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
