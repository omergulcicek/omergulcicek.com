import type { Localized } from "@/schemas/me.schema"

import { getLocale } from "@/paraglide/runtime.js"

/** Picks the current locale's text from a field written once per locale. Call it during render. */
export function localize(value: Localized) {
  return value[getLocale()]
}
