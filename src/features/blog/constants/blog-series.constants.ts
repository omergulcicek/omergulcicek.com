import type { Localized } from "@/schemas/me.schema"

/**
 * Display names for the `series` slugs stored in Supabase. A series missing here shows its slug,
 * so add an entry when a new series appears.
 */
export const BLOG_SERIES_LABELS: Readonly<Record<string, Localized>> = {
  "site-yenileme": { tr: "Site yenileme", en: "Site redesign" },
  virastack: { tr: "ViraStack", en: "ViraStack" },
  "yillik-degerlendirme": { tr: "Yıllık değerlendirme", en: "Year in review" }
}
