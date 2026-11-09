/** Formats a `YYYY-MM` string as a short month and year, such as "Ara 2025" or "Dec 2025". */
export function formatYearMonth(value: string, locale: string) {
  const [year = 0, month = 1] = value.split("-").map(Number)

  // UTC on both sides, so the server and the browser never land on a different month.
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1)))
}
