/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_MEDIA_PROVIDER?: "local" | "supabase" | "supabase-transform"
	readonly VITE_SUPABASE_URL?: string
	readonly VITE_SUPABASE_ANON_KEY?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
