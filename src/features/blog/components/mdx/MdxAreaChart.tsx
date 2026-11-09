import { useId } from "react"

type Point = { year: string; count: number }

type MdxAreaChartProps = {
  title: string
  description?: string
  data: readonly Point[]
  locale: string
}

const WIDTH = 640
const HEIGHT = 220
const PAD = { top: 24, right: 16, bottom: 28, left: 16 }

/**
 * `<ChartAreaLinear>`: a small area chart drawn as static SVG on the server, so a post needs
 * no chart library. The values are also listed for screen readers, since a picture of a
 * chart says nothing to them.
 */
export function MdxAreaChart({ title, description, data, locale }: MdxAreaChartProps) {
  const gradientId = useId()
  const max = Math.max(1, ...data.map((point) => point.count))
  const innerWidth = WIDTH - PAD.left - PAD.right
  const innerHeight = HEIGHT - PAD.top - PAD.bottom
  const step = data.length > 1 ? innerWidth / (data.length - 1) : 0

  const points = data.map((point, index) => ({
    ...point,
    x: PAD.left + index * step,
    y: PAD.top + innerHeight - (point.count / max) * innerHeight
  }))
  const line = points.map(({ x, y }, index) => `${index === 0 ? "M" : "L"}${x},${y}`).join(" ")
  const first = points[0]
  const last = points.at(-1)
  const baseline = PAD.top + innerHeight
  const area = first && last ? `${line} L${last.x},${baseline} L${first.x},${baseline} Z` : ""

  return (
    <figure className="not-prose my-8 flex flex-col gap-3 rounded-xl border border-border p-4">
      <figcaption className="flex flex-col gap-0.5">
        <span className="text-sm font-medium">{title}</span>
        {description ? <span className="text-xs text-muted-foreground">{description}</span> : null}
      </figcaption>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        aria-hidden
        className="h-auto w-full overflow-visible text-foreground"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <line
          x1={PAD.left}
          x2={WIDTH - PAD.right}
          y1={baseline}
          y2={baseline}
          className="stroke-border"
        />
        <path d={area} fill={`url(#${gradientId})`} />
        <path d={line} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        {points.map(({ x, y, year, count }) => (
          <g key={year}>
            <circle
              cx={x}
              cy={y}
              r="3"
              className="fill-background stroke-foreground"
              strokeWidth="1.5"
            />
            <text
              x={x}
              y={y - 10}
              textAnchor="middle"
              className="fill-foreground text-[11px] tabular-nums"
            >
              {count}
            </text>
            <text
              x={x}
              y={HEIGHT - 8}
              textAnchor="middle"
              className="fill-muted-foreground font-mono text-[11px]"
            >
              {year}
            </text>
          </g>
        ))}
      </svg>
      <ul className="sr-only">
        {data.map(({ year, count }) => (
          <li key={year}>
            {year}: {count.toLocaleString(locale)}
          </li>
        ))}
      </ul>
    </figure>
  )
}
