import { serializeBlogWidgetProps } from "@/features/blog/helpers/blog-widget-props"
import type { BlogChartAreaLinearProps } from "@/features/blog/types/chart-area-linear.types"

function BlogChartAreaLinearFallback({
	title,
	description,
	data
}: BlogChartAreaLinearProps) {
	return (
		<div className="blog-chart-area-linear__fallback">
			<p className="blog-chart-area-linear__fallback-title">{title}</p>
			<p className="blog-chart-area-linear__fallback-description">
				{description}
			</p>
			<table className="blog-chart-area-linear__fallback-table">
				<thead>
					<tr>
						<th scope="col">Yıl</th>
						<th scope="col">Adet</th>
					</tr>
				</thead>
				<tbody>
					{data.map((point) => (
						<tr key={point.year}>
							<td>{point.year}</td>
							<td className="tabular-nums">{point.count}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export function ChartAreaLinear(props: BlogChartAreaLinearProps) {
	return (
		<div
			className="blog-widget-mount blog-chart-area-linear-mount not-prose"
			data-blog-widget="chart-area-linear"
			data-blog-widget-props={serializeBlogWidgetProps(props)}
		>
			<BlogChartAreaLinearFallback {...props} />
		</div>
	)
}
