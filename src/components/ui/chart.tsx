import {
	createContext,
	useContext,
	useId,
	useMemo,
	type ComponentProps,
	type ComponentType,
	type CSSProperties,
	type ReactNode
} from "react"

import {
	Legend,
	ResponsiveContainer,
	Tooltip,
	type LegendPayload,
	type TooltipContentProps
} from "recharts"

import { cn } from "@/lib/utils"

const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
	[key: string]: {
		label?: ReactNode
		icon?: ComponentType
	} & (
		| { color?: string; theme?: never }
		| { color?: never; theme: Record<keyof typeof THEMES, string> }
	)
}

type ChartContextValue = {
	config: ChartConfig
}

const ChartContext = createContext<ChartContextValue | null>(null)

function useChart() {
	const context = useContext(ChartContext)

	if (!context) {
		throw new Error("useChart must be used within a <ChartContainer />")
	}

	return context
}

type ChartContainerProps = ComponentProps<"div"> & {
	config: ChartConfig
	children: ComponentProps<typeof ResponsiveContainer>["children"]
}

function ChartContainer({
	id,
	className,
	children,
	config,
	...props
}: ChartContainerProps) {
	const uniqueId = useId()
	const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

	return (
		<ChartContext.Provider value={{ config }}>
			<div
				data-slot="chart"
				data-chart={chartId}
				className={cn(
					"[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
					className
				)}
				{...props}
			>
				<ChartStyle id={chartId} config={config} />
				<ResponsiveContainer>{children}</ResponsiveContainer>
			</div>
		</ChartContext.Provider>
	)
}

function ChartStyle({ id, config }: { id: string; config: ChartConfig }) {
	const colorConfig = Object.entries(config).filter(
		([, itemConfig]) => itemConfig.theme || itemConfig.color
	)

	if (!colorConfig.length) {
		return null
	}

	return (
		<style
			dangerouslySetInnerHTML={{
				__html: Object.entries(THEMES)
					.map(
						([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
	.map(([key, itemConfig]) => {
		const color =
			itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
			itemConfig.color
		return color ? `  --color-${key}: ${color};` : null
	})
	.filter(Boolean)
	.join("\n")}
}
`
					)
					.join("\n")
			}}
		/>
	)
}

const ChartTooltip = Tooltip

type ChartTooltipContentProps = ComponentProps<"div"> &
	Partial<TooltipContentProps<number, string>> & {
		hideLabel?: boolean
		hideIndicator?: boolean
		indicator?: "line" | "dot" | "dashed"
		nameKey?: string
		labelKey?: string
	}

function ChartTooltipContent({
	active,
	payload,
	className,
	indicator = "dot",
	hideLabel = false,
	hideIndicator = false,
	label,
	labelFormatter,
	labelClassName,
	formatter,
	color,
	nameKey,
	labelKey
}: ChartTooltipContentProps) {
	const { config } = useChart()

	const tooltipLabel = useMemo(() => {
		if (hideLabel || !payload?.length) {
			return null
		}

		const [item] = payload
		const key = `${labelKey || item?.dataKey || item?.name || "value"}`
		const itemConfig = getPayloadConfigFromPayload(config, item, key)
		const value =
			!labelKey && typeof label === "string"
				? config[label]?.label || label
				: itemConfig?.label

		if (labelFormatter) {
			return (
				<div className={cn("font-medium", labelClassName)}>
					{labelFormatter(value, payload)}
				</div>
			)
		}

		if (!value) {
			return null
		}

		return <div className={cn("font-medium", labelClassName)}>{value}</div>
	}, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey])

	if (!active || !payload?.length) {
		return null
	}

	const nestLabel = payload.length === 1 && indicator !== "dot"

	return (
		<div
			className={cn(
				"grid min-w-32 items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
				className
			)}
		>
			{!nestLabel ? tooltipLabel : null}
			<div className="grid gap-1.5">
				{payload
					.filter((item) => item.type !== "none")
					.map((item, index) => {
						const key = `${nameKey || item.name || item.dataKey || "value"}`
						const itemConfig = getPayloadConfigFromPayload(config, item, key)
						const indicatorColor = color || item.color

						return (
							<div
								key={String(item.dataKey ?? index)}
								className={cn(
									"flex w-full flex-wrap items-stretch gap-2 [&>svg]:size-2.5 [&>svg]:text-muted-foreground",
									indicator === "dot" && "items-center"
								)}
							>
								{formatter &&
								item?.value !== undefined &&
								item.name !== undefined &&
								typeof item.value === "number" &&
								typeof item.name === "string" ? (
									formatter(item.value, item.name, item, index, payload)
								) : (
									<>
										{itemConfig?.icon ? (
											<itemConfig.icon />
										) : (
											!hideIndicator && (
												<div
													className={cn("shrink-0 rounded-[2px]", {
														"size-2.5": indicator === "dot",
														"w-1": indicator === "line",
														"my-0.5 w-0 border-[1.5px] border-dashed bg-transparent":
															indicator === "dashed"
													})}
													style={
														{
															backgroundColor:
																indicator === "dashed"
																	? "transparent"
																	: indicatorColor,
															borderColor: indicatorColor
														} as CSSProperties
													}
												/>
											)
										)}
										<div
											className={cn(
												"flex flex-1 justify-between leading-none",
												nestLabel ? "items-end" : "items-center"
											)}
										>
											<div className="grid gap-1.5">
												{nestLabel ? tooltipLabel : null}
												<span className="text-muted-foreground">
													{itemConfig?.label || item.name}
												</span>
											</div>
											{typeof item.value === "number" ? (
												<span className="font-mono font-medium text-foreground tabular-nums">
													{item.value.toLocaleString()}
												</span>
											) : null}
										</div>
									</>
								)}
							</div>
						)
					})}
			</div>
		</div>
	)
}

const ChartLegend = Legend

type ChartLegendContentProps = ComponentProps<"div"> & {
	payload?: LegendPayload[]
	verticalAlign?: "top" | "bottom" | "middle"
	hideIcon?: boolean
	nameKey?: string
}

function ChartLegendContent({
	className,
	hideIcon = false,
	payload = [],
	verticalAlign = "bottom",
	nameKey
}: ChartLegendContentProps) {
	const { config } = useChart()

	if (!payload?.length) {
		return null
	}

	return (
		<div
			className={cn(
				"flex items-center justify-center gap-4",
				verticalAlign === "top" ? "pb-3" : "pt-3",
				className
			)}
		>
			{payload
				.filter((item) => item.type !== "none")
				.map((item) => {
					const key = `${nameKey || item.dataKey || "value"}`
					const itemConfig = getPayloadConfigFromPayload(config, item, key)

					return (
						<div
							key={String(item.value)}
							className="flex items-center gap-1.5 [&>svg]:size-3 [&>svg]:text-muted-foreground"
						>
							{itemConfig?.icon && !hideIcon ? (
								<itemConfig.icon />
							) : (
								<div
									className="size-2 shrink-0 rounded-[2px]"
									style={{ backgroundColor: item.color }}
								/>
							)}
							{itemConfig?.label}
						</div>
					)
				})}
		</div>
	)
}

function getPayloadConfigFromPayload(
	config: ChartConfig,
	payload: unknown,
	key: string
) {
	if (typeof payload !== "object" || payload === null) {
		return undefined
	}

	const payloadPayload =
		"payload" in payload &&
		typeof payload.payload === "object" &&
		payload.payload !== null
			? payload.payload
			: undefined

	let configLabelKey = key

	if (
		key in payload &&
		typeof payload[key as keyof typeof payload] === "string"
	) {
		configLabelKey = payload[key as keyof typeof payload] as string
	} else if (
		payloadPayload &&
		key in payloadPayload &&
		typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
	) {
		configLabelKey = payloadPayload[
			key as keyof typeof payloadPayload
		] as string
	}

	return configLabelKey in config ? config[configLabelKey] : config[key]
}

export {
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
	ChartLegend,
	ChartLegendContent,
	ChartStyle
}
