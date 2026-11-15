// Turns every PNG and JPG under public/blog into WebP and deletes the original, then adds a
// half-width variant (`name-672.webp`) for images wider than the reading column, which the post
// renderer offers through srcset. `pnpm blog:images` runs it and refreshes the size manifest;
// then point the post's MDX at the printed .webp paths. `--dry-run` only lists what would change.
import { existsSync, readdirSync, statSync, unlinkSync } from "node:fs"
import { join, relative } from "node:path"

import sharp from "sharp"

import {
  BLOG_IMAGE_MAX_WIDTH,
  BLOG_IMAGE_VARIANT_WIDTH,
  variantPath
} from "../src/features/blog/constants/blog-image-variants.constants.ts"

const root = join(import.meta.dirname, "..")
const imagesDir = join(root, "public", "blog")
const dryRun = process.argv.includes("--dry-run")

const RASTER = /\.(png|jpe?g)$/i
const VARIANT = new RegExp(`-${BLOG_IMAGE_VARIANT_WIDTH}\\.webp$`)

// Screenshots with text keep their edges at a higher quality than photos need.
const quality = (file: string) => (/\.png$/i.test(file) ? 88 : 80)

const toPublicPath = (file: string) =>
  `/${relative(join(root, "public"), file).split("\\").join("/")}`

let before = 0
let after = 0
const renamed: [string, string][] = []

async function writeWebp(input: string | Buffer, output: string, width: number, q: number) {
  if (dryRun) return 0
  const { size } = await sharp(input)
    // Phone photos store their orientation in EXIF; bake it in before the metadata is dropped.
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: q, effort: 6 })
    .toFile(output)
  return size
}

const files = readdirSync(imagesDir, { recursive: true, withFileTypes: true })
  .filter((entry) => entry.isFile())
  .map((entry) => join(entry.parentPath, entry.name))
  .sort()

for (const file of files) {
  const isRaster = RASTER.test(file)
  const isWebp = file.endsWith(".webp") && !VARIANT.test(file)
  if (!isRaster && !isWebp) continue

  const target = isRaster ? file.replace(RASTER, ".webp") : file
  if (isRaster && existsSync(target)) {
    throw new Error(`${toPublicPath(target)} already exists; rename ${toPublicPath(file)} first`)
  }

  const { width = 0 } = await sharp(file).metadata()
  const original = statSync(file).size
  before += original

  // Read once: the original is replaced in place when it is already WebP.
  const source = isRaster ? file : await sharp(file).toBuffer()
  let written = original
  if (isRaster || width > BLOG_IMAGE_MAX_WIDTH) {
    written = await writeWebp(source, target, BLOG_IMAGE_MAX_WIDTH, quality(file))
  }
  if (width > BLOG_IMAGE_VARIANT_WIDTH && !existsSync(variantPath(target))) {
    written += await writeWebp(source, variantPath(target), BLOG_IMAGE_VARIANT_WIDTH, quality(file))
  } else if (existsSync(variantPath(target))) {
    written += statSync(variantPath(target)).size
  }
  after += written

  if (isRaster) {
    renamed.push([toPublicPath(file), toPublicPath(target)])
    if (!dryRun) unlinkSync(file)
  }
}

const mb = (bytes: number) => `${(bytes / 1048576).toFixed(1)} MB`
for (const [from, to] of renamed) process.stdout.write(`${from} → ${to}\n`)
process.stdout.write(
  `${dryRun ? "Would convert" : "Converted"} ${renamed.length} images` +
    (dryRun ? "\n" : `; public/blog images: ${mb(before)} → ${mb(after)}\n`)
)
