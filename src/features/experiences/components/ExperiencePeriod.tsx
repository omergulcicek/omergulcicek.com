type ExperiencePeriodProps = {
  startDate: string
  endDate: string | null
  start: string
  end: string
}

/** "Ara 2025 – Günümüz", with machine-readable dates. */
export function ExperiencePeriod({ startDate, endDate, start, end }: ExperiencePeriodProps) {
  return (
    <span className="font-mono">
      <time dateTime={startDate}>{start}</time>
      {" – "}
      {endDate ? <time dateTime={endDate}>{end}</time> : end}
    </span>
  )
}
