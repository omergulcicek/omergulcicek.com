import { env } from "@/env"

import { createApi } from "@/lib/api"

/**
 * True only under `pnpm dev` with a service role key set: list and detail queries then skip the
 * `published` filter so drafts can be previewed locally. A production build never reads drafts,
 * even if the key is set by mistake, because `import.meta.env.DEV` is false there.
 */
export function canReadDrafts() {
  return import.meta.env.DEV && Boolean(env.SUPABASE_SERVICE_ROLE_KEY)
}

/**
 * Supabase REST (PostgREST) client on the native fetch wrapper, so no Supabase SDK ships.
 * Server only: call it inside server functions, never at module level in shared code.
 */
export function getSupabaseApi() {
  const { SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY } = env

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    throw new Error("SUPABASE_URL and SUPABASE_ANON_KEY must be set on the server")
  }

  // RLS shows anon only published rows; the service role key gets past it for local drafts.
  const key =
    canReadDrafts() && SUPABASE_SERVICE_ROLE_KEY ? SUPABASE_SERVICE_ROLE_KEY : SUPABASE_ANON_KEY

  return createApi({
    baseUrl: `${SUPABASE_URL}/rest/v1`,
    getHeaders: () => ({ apikey: key, Authorization: `Bearer ${key}` })
  })
}
