/// <reference types="vite/client" />

/** Validated against `clientEnvSchema` when the dev server or build starts (vite.config.ts). */
interface ImportMetaEnv {
	readonly VITE_MEDIA_PROVIDER?: import("@/schemas/client-env.schema").MediaProvider
	readonly VITE_SUPABASE_URL?: string
	readonly VITE_SUPABASE_ANON_KEY?: string
	readonly VITE_GA_ID?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
