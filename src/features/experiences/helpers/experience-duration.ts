/**
 * Months worked between two `YYYY-MM` values, counting both the first and the last month,
 * so Mar 2024 – Jun 2025 is 16 months. A `null` end means the role is current: it counts up to `now`.
 */
export function countMonths(startDate: string, endDate: string | null, now: Date) {
  const [startYear = 0, startMonth = 1] = startDate.split("-").map(Number)
  const [endYear, endMonth] = endDate
    ? endDate.split("-").map(Number)
    : [now.getUTCFullYear(), now.getUTCMonth() + 1]

  return (endYear ?? startYear) * 12 + (endMonth ?? startMonth) - (startYear * 12 + startMonth) + 1
}

/** "1 yıl 4 ay" / "1 year 4 months"; Intl picks the right plural for each locale. */
export function formatDuration(months: number, locale: string) {
  const years = Math.floor(months / 12)
  const rest = months % 12
  const unit = (value: number, name: "year" | "month") =>
    new Intl.NumberFormat(locale, { style: "unit", unit: name, unitDisplay: "long" }).format(value)

  return [years > 0 ? unit(years, "year") : null, rest > 0 ? unit(rest, "month") : null]
    .filter(Boolean)
    .join(" ")
}
