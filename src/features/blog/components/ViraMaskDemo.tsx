import { ViraMaskDemoFallback } from "@/features/blog/components/ViraMaskDemoFallback"

export function ViraMaskDemo() {
	return (
		<div
			className="blog-widget-mount blog-mask-interactive-mount not-prose"
			data-blog-widget="vira-mask-demo"
		>
			<ViraMaskDemoFallback />
		</div>
	)
}
