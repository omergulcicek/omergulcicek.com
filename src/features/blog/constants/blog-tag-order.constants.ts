/**
 * The order a post's tags show in, whatever order Supabase stores them in: the umbrella first
 * (ViraStack, Site Yenileme), then technologies, then cross-cutting topics. A tag missing here
 * goes last, so add new tags to this list.
 */
export const BLOG_TAG_ORDER = [
  "ViraStack",
  "Site Yenileme",
  "React",
  "Next.js",
  "TanStack",
  "TypeScript",
  "JavaScript",
  "CSS",
  "HTML",
  "Yapay Zekâ",
  "Erişilebilirlik",
  "Performans",
  "Yerelleştirme",
  "Araç",
  "Proje",
  "Frontend",
  // Notes
  "Yıl Değerlendirmesi",
  "Deneyim",
  "Düşünce",
  "Kitap",
  "Film ve Dizi"
] as const
