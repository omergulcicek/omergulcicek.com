import { CssDemoMount } from "@/features/blog/components/css-demos/CssDemoMount"

export function Stretch() {
	return (
		<CssDemoMount widget="stretch">
			<div className="blog-css-interactive-demo blog-css-interactive-demo--fallback">
				<div className="blog-css-interactive-demo__preview">
					<div className="blog-css-interactive-demo__stretch-stage">
						<div className="blog-css-interactive-demo__stretch-box">100%</div>
					</div>
				</div>
			</div>
		</CssDemoMount>
	)
}
