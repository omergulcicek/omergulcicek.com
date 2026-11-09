import { z } from "zod"

/**
 * Type-safe environment variable schema.
 *
 * Client-exposed variables MUST be prefixed with `VITE_` (Vite inlines these
 * at build time). Server-only variables have no prefix and must never be
 * read via `import.meta.env` on the client.
 */
const serverSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  // Optional so tests and the client bundle load without them; the blog server function checks them.
  SUPABASE_URL: z.url().optional(),
  SUPABASE_ANON_KEY: z.string().min(1).optional(),
  // Optional: raises GitHub's limit from 60 to 5,000 requests an hour; stars load without it too.
  GITHUB_TOKEN: z.string().min(1).optional()
})

const clientSchema = z.object({
  VITE_APP_URL: z.url().default("http://localhost:3000"),
  VITE_API_URL: z.url().default("https://dummyjson.com"),
  VITE_APP_NAME: z.string().min(1).default("ViraStack Start - TanStack Edition")
})

function readEnv(key: string): string | undefined {
  if (typeof process !== "undefined" && process.env[key] != null) {
    return process.env[key]
  }
  return (import.meta.env as Record<string, string | undefined>)[key]
}

const serverParsed = serverSchema.safeParse({
  NODE_ENV: readEnv("NODE_ENV"),
  SUPABASE_URL: readEnv("SUPABASE_URL"),
  SUPABASE_ANON_KEY: readEnv("SUPABASE_ANON_KEY"),
  GITHUB_TOKEN: readEnv("GITHUB_TOKEN")
})

const clientParsed = clientSchema.safeParse({
  VITE_APP_URL: readEnv("VITE_APP_URL"),
  VITE_API_URL: readEnv("VITE_API_URL"),
  VITE_APP_NAME: readEnv("VITE_APP_NAME")
})

if (!serverParsed.success || !clientParsed.success) {
  console.error(
    "❌ Invalid environment variables:",
    serverParsed.error && z.flattenError(serverParsed.error).fieldErrors,
    clientParsed.error && z.flattenError(clientParsed.error).fieldErrors
  )
  throw new Error("Invalid environment variables. Check src/env.ts")
}

if (
  serverParsed.data.NODE_ENV === "production" &&
  typeof window === "undefined" &&
  !readEnv("VITE_APP_URL")
) {
  console.warn("⚠️ VITE_APP_URL is not set, so the sitemap and social links point to localhost.")
}

export const env = {
  ...serverParsed.data,
  ...clientParsed.data
}
