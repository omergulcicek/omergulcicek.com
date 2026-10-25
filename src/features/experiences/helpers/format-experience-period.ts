const MONTH_LABELS = [
	"Oca",
	"Şub",
	"Mar",
	"Nis",
	"May",
	"Haz",
	"Tem",
	"Ağu",
	"Eyl",
	"Eki",
	"Kas",
	"Ara"
] as const

function formatYearMonth(value: string): string {
	const [year, month] = value.split("-")
	const label = MONTH_LABELS[Number(month) - 1] ?? ""

	return `${label} ${year.slice(2)}`
}

/** Formats `YYYY-MM` ranges as `Ağu 25 – Kas 25`; an open range ends with a trailing dash. */
export function formatExperiencePeriod(
	startDate: string,
	endDate: string | null
): string {
	const start = formatYearMonth(startDate)

	return endDate ? `${start} – ${formatYearMonth(endDate)}` : `${start} –`
}
