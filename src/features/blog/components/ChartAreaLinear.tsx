import { ChartAreaLinearFallback } from "@/features/blog/components/ChartAreaLinearFallback"
import { serializeBlogWidgetProps } from "@/features/blog/helpers/blog-widget-props"
import type { BlogChartAreaLinearProps } from "@/features/blog/types/chart-area-linear.types"

export function ChartAreaLinear(props: BlogChartAreaLinearProps) {
	return (
		<div
			className="blog-widget-mount blog-chart-area-linear-mount not-prose"
			data-blog-widget="chart-area-linear"
			data-blog-widget-props={serializeBlogWidgetProps(props)}
		>
			<ChartAreaLinearFallback {...props} />
		</div>
	)
}
