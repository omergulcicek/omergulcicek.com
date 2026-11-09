import { USES_UPDATED } from "@/features/uses/constants/uses.constants"
import * as m from "@/paraglide/messages.js"
import { getLocale } from "@/paraglide/runtime.js"

/** "Son güncelleme: 9 Kasım 2026", so readers can tell how current the list is. */
export function UsesUpdated() {
  const [year = 0, month = 1, day = 1] = USES_UPDATED.split("-").map(Number)
  // UTC on both sides, so the server and the browser never land on a different day.
  const date = new Intl.DateTimeFormat(getLocale(), {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(Date.UTC(year, month - 1, day)))

  return (
    <p className="text-sm text-muted-foreground">
      {m.uses_updated()}:{" "}
      <time dateTime={USES_UPDATED} className="font-mono">
        {date}
      </time>
    </p>
  )
}
