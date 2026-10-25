import { CssDemoMount } from "@/features/blog/components/css-demos/CssDemoMount"

export function SiblingIndex() {
	return (
		<CssDemoMount widget="sibling-index">
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
		</CssDemoMount>
	)
}
