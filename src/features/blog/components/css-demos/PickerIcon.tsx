import { CssDemoMount } from "@/features/blog/components/css-demos/CssDemoMount"

export function PickerIcon() {
	return (
		<CssDemoMount widget="picker-icon">
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
		</CssDemoMount>
	)
}
