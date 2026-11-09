import { z } from "zod"

/**
 * A string limited to the given values. A refine instead of z.enum: JSON imports type strings
 * as `string`, and the schema's type must still accept the imported JSON.
 */
export function oneOf(values: readonly string[]) {
  return z.string().refine((value) => values.includes(value), {
    error: `Must be one of: ${values.join(", ")}`
  })
}
