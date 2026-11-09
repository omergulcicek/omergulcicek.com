import data from "@/constants/me.json"
import type { Me } from "@/schemas/me.schema"

/**
 * Every fact about Ömer, in one file. The type check catches a wrong shape at build time;
 * `src/schemas/me.schema.test.ts` runs the full schema, so Zod stays out of the client bundle.
 */
export const me: Me = data
