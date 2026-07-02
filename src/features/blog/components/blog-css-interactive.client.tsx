"use client"

import { RotateCcw } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { BlogCssInteractiveDemo } from "@/features/blog/components/blog-css-interactive-demo"
import { BLOG_CSS_INTERACTIVE_CANIUSE } from "@/features/blog/constants/blog-css-interactive.constants"
import type { BlogCssCustomProperties } from "@/features/blog/types/blog-css-interactive.types"
import { cn } from "@/lib/utils"

type CornerShapeType = "round" | "scoop" | "bevel" | "notch" | "squircle"

const cornerShapes: CornerShapeType[] = [
	"round",
	"scoop",
	"bevel",
	"notch",
	"squircle"
]

export function BlogCornerShapeClient() {
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

export function BlogClipPathClient() {
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
						<div className="text-2xl font-bold">{clipPathLabels[selectedType]}</div>
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

type PickerIconType = "action" | "insight" | "flow" | "premium"

const pickerIconTypes: PickerIconType[] = [
	"action",
	"insight",
	"flow",
	"premium"
]

const pickerIconContent: Record<PickerIconType, string> = {
	action: "🔥",
	insight: "🧠",
	flow: "🌊",
	premium: "💎"
}

function getPickerIconStyles(selectedType: PickerIconType) {
	return `
		.blog-css-interactive-demo__picker-select {
			appearance: base-select;
		}
		.blog-css-interactive-demo__picker-select::picker-icon {
			content: "${pickerIconContent[selectedType]}";
			transition: all 0.3s ease;
		}
	`
}

export function BlogPickerIconClient() {
	const [selectedType, setSelectedType] =
		useState<PickerIconType>("premium")

	return (
		<BlogCssInteractiveDemo
			caniuseHref={BLOG_CSS_INTERACTIVE_CANIUSE["picker-icon"]}
			controls={
				<>
					<style
						dangerouslySetInnerHTML={{
							__html: getPickerIconStyles(selectedType)
						}}
					/>
					<div className="flex flex-wrap gap-2">
						{pickerIconTypes.map((type) => (
							<Button
								key={type}
								type="button"
								variant={selectedType === type ? "default" : "outline"}
								size="sm"
								onClick={() => setSelectedType(type)}
							>
								{pickerIconContent[type]}
							</Button>
						))}
					</div>
				</>
			}
			preview={
				<div className="w-full max-w-xs">
					<select className="blog-css-interactive-demo__picker-select">
						<option value="option1">Seçenek 1</option>
						<option value="option2">Seçenek 2</option>
						<option value="option3">Seçenek 3</option>
						<option value="option4">Seçenek 4</option>
					</select>
				</div>
			}
			code={
				<code className="blog-css-interactive-demo__code-snippet blog-css-interactive-demo__code-snippet--multiline">
					{`select {
  appearance: base-select;
}

select::picker-icon {
  content: "${pickerIconContent[selectedType]}";
}`}
				</code>
			}
		/>
	)
}

type StretchMode = "percentage" | "stretch"

export function BlogStretchClient() {
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

type TextBoxMode = "normal" | "trim-start"

export function BlogTextBoxClient() {
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
						style={{
							textBox:
								mode === "trim-start" ? "trim-start cap text" : "normal"
						} as BlogCssCustomProperties}
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

const SIBLING_BOX_KEYS = Array.from({ length: 12 }, (_, index) => `box-${index}`)

export function BlogSiblingIndexClient() {
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
					<div key={replayKey} className="blog-css-interactive-demo__sibling-grid">
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
