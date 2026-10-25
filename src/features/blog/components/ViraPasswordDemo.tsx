import { ViraPasswordDemoFallback } from "@/features/blog/components/ViraPasswordDemoFallback"

export function ViraPasswordDemo() {
	return (
		<div
			className="blog-widget-mount blog-password-interactive-mount not-prose"
			data-blog-widget="vira-password-demo"
		>
			<ViraPasswordDemoFallback />
		</div>
	)
}
