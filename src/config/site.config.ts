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
  // FIXME: public/og.png is still the ViraStack Start card; replace it with a 1200×630 card of your own.
  ogImage: `${env.VITE_APP_URL}/og.png`
}
