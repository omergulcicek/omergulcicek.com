"use client"

import React from "react"

import { Button } from "@/ui"

const SIBLING_BOX_KEYS = Array.from({ length: 12 }, (_, i) => `box-${i}`)

export function SiblingIndex() {
	const [key, setKey] = React.useState(0)

	const handleReset = () => {
		setKey((prev) => prev + 1)
	}

	return (
		<div className="w-full space-y-4">
			<style>
				{`
					@keyframes pop-in {
						from {
							opacity: 0;
							transform: scale(0.8) translateY(20px);
						}
						to {
							opacity: 1;
							transform: scale(1) translateY(0);
						}
					}
				`}
			</style>
			<div className="flex flex-wrap gap-2 items-center justify-between">
				<div className="text-sm text-muted-foreground">
					Kutular sırayla animasyonlu şekilde görünüyor
				</div>
				<Button variant="outline" size="sm" onClick={handleReset}>
					Yeniden Oynat
				</Button>
			</div>
			<div className="w-full rounded-lg border-2 border-dashed p-6 bg-muted/30">
				<div key={key} className="grid grid-cols-4 gap-4">
					{SIBLING_BOX_KEYS.map((boxKey, i) => (
						<div
							key={boxKey}
							className="h-20 rounded-lg bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold shadow-lg"
							style={{
								// @ts-ignore - sibling-index is a new CSS function
								animation: "pop-in 0.4s ease both",
								// @ts-ignore - sibling-index is a new CSS function
								animationDelay: "calc(sibling-index() * 100ms)"
							}}
						>
							{i + 1}
						</div>
					))}
				</div>
			</div>
			<div className="rounded-lg border px-3 py-2 bg-muted/30">
				<code className="text-sm font-mono block">
					animation: pop-in 0.4s ease both;
				</code>
				<code className="text-sm font-mono block mt-1">
					animation-delay: calc(sibling-index() * 100ms);
				</code>
			</div>
			<p className="text-sm text-muted-foreground">
				Güncel destekleyen tarayıcıları takip etmek için{" "}
				<a
					href="https://caniuse.com/wf-sibling-count"
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
