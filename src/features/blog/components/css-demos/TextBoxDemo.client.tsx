"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { BlogCssInteractiveDemo } from "@/features/blog/components/BlogCssInteractiveDemo"
import { BLOG_CSS_INTERACTIVE_CANIUSE } from "@/features/blog/constants/blog-css-interactive.constants"
import type { BlogCssCustomProperties } from "@/features/blog/types/blog-css-interactive.types"

type TextBoxMode = "normal" | "trim-start"

export function TextBoxDemo() {
	const [mode, setMode] = useState<TextBoxMode>("normal")

	return (
		<BlogCssInteractiveDemo
			caniuseHref={BLOG_CSS_INTERACTIVE_CANIUSE["text-box"]}
			controls={
				<div className="flex flex-wrap gap-2">
					<Button
						type="button"
						variant={mode === "normal" ? "default" : "outline"}
						size="sm"
						onClick={() => setMode("normal")}
					>
						text-box: normal
					</Button>
					<Button
						type="button"
						variant={mode === "trim-start" ? "default" : "outline"}
						size="sm"
						onClick={() => setMode("trim-start")}
					>
						text-box: trim-start cap text
					</Button>
				</div>
			}
			preview={
				<div className="flex gap-4">
					<div className="blog-css-interactive-demo__text-box-image" />
					<h3
						className="blog-css-interactive-demo__text-box-heading"
						style={
							{
								textBox:
									mode === "trim-start" ? "trim-start cap text" : "normal"
							} as BlogCssCustomProperties
						}
					>
						Başlık Metni
					</h3>
				</div>
			}
			code={
				<code className="blog-css-interactive-demo__code-snippet">
					text-box: {mode === "trim-start" ? "trim-start cap text" : "normal"};
				</code>
			}
		/>
	)
}
