import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card"
import {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent
} from "@/components/ui/chart"
import type { BlogChartAreaLinearProps } from "@/features/blog/types/chart-area-linear.types"

const CHART_DATA_KEY = "count"
const CHART_LABEL_KEY = "year"

export function BlogChartAreaLinearClient({
	title,
	description,
	data,
	config
}: BlogChartAreaLinearProps) {
	const maxCount = Math.max(...data.map((point) => point.count), 0)

	return (
		<figure className="blog-chart-area-linear not-prose">
			<Card className="surface-card gap-0 overflow-hidden py-0">
				<CardHeader className="gap-1 border-b border-border/70 px-4 py-4 md:px-5">
					<CardTitle className="text-balance text-sm font-semibold md:text-base">
						{title}
					</CardTitle>
					<CardDescription className="text-pretty">
						{description}
					</CardDescription>
				</CardHeader>
				<CardContent className="px-2 pt-4 pb-4 md:px-4 md:pb-5">
					<ChartContainer
						config={config}
						className="aspect-[16/10] min-h-56 w-full"
					>
						<AreaChart
							accessibilityLayer
							data={data}
							margin={{ top: 8, right: 12, left: 0, bottom: 0 }}
						>
							<CartesianGrid vertical horizontal strokeDasharray="3 3" />
							<XAxis
								dataKey={CHART_LABEL_KEY}
								tickLine={false}
								axisLine={false}
								tickMargin={10}
								minTickGap={16}
							/>
							<YAxis
								dataKey={CHART_DATA_KEY}
								tickLine={false}
								axisLine={false}
								tickMargin={8}
								width={36}
								allowDecimals={false}
								domain={[0, Math.max(maxCount, 1)]}
								tickCount={Math.min(maxCount + 1, 6)}
							/>
							<ChartTooltip
								cursor={{ strokeDasharray: "4 4" }}
								content={
									<ChartTooltipContent
										indicator="line"
										labelKey={CHART_LABEL_KEY}
									/>
								}
							/>
							<Area
								dataKey={CHART_DATA_KEY}
								type="step"
								fill={`var(--color-${CHART_DATA_KEY})`}
								fillOpacity={0.35}
								stroke={`var(--color-${CHART_DATA_KEY})`}
								strokeWidth={2}
							/>
						</AreaChart>
					</ChartContainer>
				</CardContent>
			</Card>
		</figure>
	)
}
