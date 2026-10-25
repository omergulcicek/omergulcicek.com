import type { BlogChartAreaLinearProps } from "@/features/blog/types/chart-area-linear.types"

export function ChartAreaLinearFallback({
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
