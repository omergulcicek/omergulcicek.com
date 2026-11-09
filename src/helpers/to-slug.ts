/**
 * The URL form of a label: "Yapay Zekâ" → "yapay-zeka", "Next.js" → "next-js". Turkish casing
 * first, so "I" becomes "ı" and then "i" rather than a dotted "i̇".
 */
export function toSlug(label: string) {
  return label
    .toLocaleLowerCase("tr")
    .replaceAll("ı", "i")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
}
