import { createClient } from "@supabase/supabase-js"

import { getServerEnv } from "@/lib/server-env"

export function createSupabaseServerClient() {
	const env = getServerEnv()

	if (!env.SUPABASE_URL) {
		throw new Error("SUPABASE_URL is not configured")
	}

	const apiKey = env.SUPABASE_SERVICE_ROLE_KEY ?? env.SUPABASE_ANON_KEY

	if (!apiKey) {
		throw new Error("Supabase API key is not configured")
	}

	return createClient(env.SUPABASE_URL, apiKey, {
		auth: {
			autoRefreshToken: false,
			persistSession: false
		}
	})
}
