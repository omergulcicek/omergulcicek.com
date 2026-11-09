import type { SiteConfig } from "@/types/site-config.types"
import { me } from "@/constants/me.constants"
import { env } from "@/env"

export const siteConfig: SiteConfig = {
  name: me.name,
  // The web manifest has one description for every locale; pages localize theirs in head().
  description: `${me.name}, ${me.title.en}`,
  shortName: me.handle,
  url: env.VITE_APP_URL,
  apiUrl: env.VITE_API_URL,
  // The home page's generated card (see src/routes/og/$.ts), for pages that set none of their own.
  ogImage: `${env.VITE_APP_URL}/og/tr`,
  // Proves ownership to Google Search Console; carried over from v10.
  googleSiteVerification: "zmwXV_nPeKUGEdvaM6Ue26BgLZLUTuzjVVUHI6c8OO8"
}
