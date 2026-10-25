"use client"

import { useState } from "react"
import { RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BlogCssInteractiveDemo } from "@/features/blog/components/BlogCssInteractiveDemo"
import { BLOG_CSS_INTERACTIVE_CANIUSE } from "@/features/blog/constants/blog-css-interactive.constants"

const SIBLING_BOX_KEYS = Array.from(
	{ length: 12 },
	(_, index) => `box-${index}`
)

export function SiblingIndexDemo() {
	const [replayKey, setReplayKey] = useState(0)

	return (
		<BlogCssInteractiveDemo
			caniuseHref={BLOG_CSS_INTERACTIVE_CANIUSE["sibling-index"]}
			controls={
				<div className="flex flex-wrap items-center justify-between gap-2">
					<p className="blog-css-interactive-demo__helper-text">
						Kutular sırayla animasyonlu şekilde görünüyor
					</p>
					<Button
						type="button"
						variant="outline"
						size="sm"
						onClick={() => setReplayKey((current) => current + 1)}
					>
						<RotateCcw aria-hidden="true" />
						Yeniden Oynat
					</Button>
				</div>
			}
			preview={
				<>
					<style>
						{`
							@keyframes blog-css-sibling-pop-in {
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
					<div
						key={replayKey}
						className="blog-css-interactive-demo__sibling-grid"
					>
						{SIBLING_BOX_KEYS.map((boxKey, index) => (
							<div
								key={boxKey}
								className="blog-css-interactive-demo__sibling-box"
								style={{
									animation: "blog-css-sibling-pop-in 0.4s ease both",
									animationDelay: "calc(sibling-index() * 100ms)"
								}}
							>
								{index + 1}
							</div>
						))}
					</div>
				</>
			}
			code={
				<>
					<code className="blog-css-interactive-demo__code-snippet">
						animation: pop-in 0.4s ease both;
					</code>
					<code className="blog-css-interactive-demo__code-snippet">
						animation-delay: calc(sibling-index() * 100ms);
					</code>
				</>
			}
		/>
	)
}
