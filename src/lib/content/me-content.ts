import meJson from "@/constants/me.json"
import type { Me } from "@/schemas/me.schema"

/**
 * Typed view of `me.json`, the trust boundary for site facts. The file is validated
 * against `meSchema` when the dev server or build starts (vite.config.ts) and in
 * me.constants.test.ts, so it is not parsed again at runtime: parsing it in the
 * browser added Zod to every page's entry bundle.
 */
export const meContent = meJson as Me
