"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { BlogCssInteractiveDemo } from "@/features/blog/components/BlogCssInteractiveDemo"
import { BLOG_CSS_INTERACTIVE_CANIUSE } from "@/features/blog/constants/blog-css-interactive.constants"

type StretchMode = "percentage" | "stretch"

export function StretchDemo() {
	const [mode, setMode] = useState<StretchMode>("percentage")

	return (
		<BlogCssInteractiveDemo
			caniuseHref={BLOG_CSS_INTERACTIVE_CANIUSE.stretch}
			controls={
				<div className="flex flex-wrap gap-2">
					<Button
						type="button"
						variant={mode === "percentage" ? "default" : "outline"}
						size="sm"
						onClick={() => setMode("percentage")}
					>
						width: 100% (taşar)
					</Button>
					<Button
						type="button"
						variant={mode === "stretch" ? "default" : "outline"}
						size="sm"
						onClick={() => setMode("stretch")}
					>
						width: stretch (taşmaz)
					</Button>
				</div>
			}
			preview={
				<div className="blog-css-interactive-demo__stretch-stage">
					<div
						className={cn(
							"blog-css-interactive-demo__stretch-box",
							mode === "stretch" &&
								"blog-css-interactive-demo__stretch-box--stretch"
						)}
					>
						{mode === "stretch" ? "stretch" : "100%"}
					</div>
				</div>
			}
			code={
				<>
					<code className="blog-css-interactive-demo__code-snippet">
						width: {mode === "stretch" ? "stretch" : "100%"};
					</code>
					<code className="blog-css-interactive-demo__code-snippet">
						height: {mode === "stretch" ? "stretch" : "100%"};
					</code>
					<code className="blog-css-interactive-demo__code-snippet">
						margin: 40px;
					</code>
				</>
			}
		/>
	)
}
