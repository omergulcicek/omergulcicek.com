import { TURKISH_SHORT_MONTHS } from "@/constants/date.constants"
import { SITE_COPY } from "@/constants/site-copy.constants"

function formatYearMonth(value: string): string {
	const [year = "", month = ""] = value.split("-")
	const label = TURKISH_SHORT_MONTHS[Number(month) - 1] ?? ""

	return `${label} ${year.slice(2)}`
}

/** Formats `YYYY-MM` ranges as `Ağu 25 – Kas 25`; an open range ends with `Günümüz`. */
export function formatExperiencePeriod(
	startDate: string,
	endDate: string | null
): string {
	const start = formatYearMonth(startDate)

	const end = endDate ? formatYearMonth(endDate) : SITE_COPY.experiences.ongoing

	return `${start} – ${end}`
}
