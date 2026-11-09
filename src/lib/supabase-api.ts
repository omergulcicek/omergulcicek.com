import { env } from "@/env"

import { createApi } from "@/lib/api"

/**
 * Supabase REST (PostgREST) client on the native fetch wrapper, so no Supabase SDK ships.
 * Server only: call it inside server functions, never at module level in shared code.
 */
export function getSupabaseApi() {
  const { SUPABASE_URL, SUPABASE_ANON_KEY } = env

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be set on the server")
  }

  return createApi({
    baseUrl: `${SUPABASE_URL}/rest/v1`,
    getHeaders: () => ({ apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` })
  })
}
