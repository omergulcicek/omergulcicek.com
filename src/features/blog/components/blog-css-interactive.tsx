import type { ReactNode } from "react"

import type { BlogCssInteractiveWidget } from "@/features/blog/types/blog-css-interactive.types"

function BlogCssInteractiveMount({
	widget,
	children
}: {
	widget: BlogCssInteractiveWidget
	children: ReactNode
}) {
	return (
		<div
			className="blog-widget-mount blog-css-interactive-mount not-prose"
			data-blog-widget={widget}
		>
			{children}
		</div>
	)
}

function BlogCornerShapeFallback() {
	return (
		<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
			<div className="blog-css-interactive-demo__preview">
				<div className="blog-css-interactive-demo__corner-shape-preview">
					Preview: scoop
				</div>
			</div>
		</div>
	)
}

function BlogClipPathFallback() {
	return (
		<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
			<div className="blog-css-interactive-demo__preview">
				<div
					style={{ clipPath: "circle(40% at 50% 50%)" }}
					className="blog-css-interactive-demo__clip-path-preview"
				>
					<div className="text-center">
						<div className="text-2xl font-bold">Circle</div>
					</div>
				</div>
			</div>
		</div>
	)
}

function BlogPickerIconFallback() {
	return (
		<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
			<div className="blog-css-interactive-demo__preview">
				<div className="w-full max-w-xs">
					<select className="blog-css-interactive-demo__picker-select">
						<option value="option1">Seçenek 1</option>
						<option value="option2">Seçenek 2</option>
					</select>
				</div>
			</div>
		</div>
	)
}

function BlogStretchFallback() {
	return (
		<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
			<div className="blog-css-interactive-demo__preview">
				<div className="blog-css-interactive-demo__stretch-stage">
					<div className="blog-css-interactive-demo__stretch-box">100%</div>
				</div>
			</div>
		</div>
	)
}

function BlogTextBoxFallback() {
	return (
		<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
			<div className="blog-css-interactive-demo__preview">
				<div className="flex gap-4">
					<div className="blog-css-interactive-demo__text-box-image" />
					<h3 className="blog-css-interactive-demo__text-box-heading">
						Başlık Metni
					</h3>
				</div>
			</div>
		</div>
	)
}

function BlogSiblingIndexFallback() {
	return (
		<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
			<div className="blog-css-interactive-demo__preview">
				<div className="blog-css-interactive-demo__sibling-grid">
					{Array.from({ length: 4 }, (_, index) => (
						<div
							key={`fallback-box-${index}`}
							className="blog-css-interactive-demo__sibling-box"
						>
							{index + 1}
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export function CornerShape() {
	return (
		<BlogCssInteractiveMount widget="corner-shape">
			<BlogCornerShapeFallback />
		</BlogCssInteractiveMount>
	)
}

export function ClipPath() {
	return (
		<BlogCssInteractiveMount widget="clip-path">
			<BlogClipPathFallback />
		</BlogCssInteractiveMount>
	)
}

export function PickerIcon() {
	return (
		<BlogCssInteractiveMount widget="picker-icon">
			<BlogPickerIconFallback />
		</BlogCssInteractiveMount>
	)
}

export function Stretch() {
	return (
		<BlogCssInteractiveMount widget="stretch">
			<BlogStretchFallback />
		</BlogCssInteractiveMount>
	)
}

export function TextBox() {
	return (
		<BlogCssInteractiveMount widget="text-box">
			<BlogTextBoxFallback />
		</BlogCssInteractiveMount>
	)
}

export function SiblingIndex() {
	return (
		<BlogCssInteractiveMount widget="sibling-index">
			<BlogSiblingIndexFallback />
		</BlogCssInteractiveMount>
	)
}
