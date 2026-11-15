/** The widest a post image is stored: twice the 672px reading column, for 2x screens. */
export const BLOG_IMAGE_MAX_WIDTH = 1344

/** The width of the smaller copy that 1x screens and phones load instead. */
export const BLOG_IMAGE_VARIANT_WIDTH = 672

/** `/blog/a/b.webp` → `/blog/a/b-672.webp`, the smaller copy `pnpm blog:images` writes. */
export function variantPath(path: string) {
  return path.replace(/\.webp$/, `-${BLOG_IMAGE_VARIANT_WIDTH}.webp`)
}
