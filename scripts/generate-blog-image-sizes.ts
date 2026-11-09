// Writes the pixel size of every image under public/blog to a JSON file the post renderer
// imports. On Vercel, public/ is served by the CDN and is not in the server bundle, so the
// sizes cannot be read at request time. Run `pnpm blog:image-sizes` after adding images.
import { readdirSync, readFileSync, writeFileSync } from "node:fs"
import { join, relative } from "node:path"

import { readImageSize } from "../src/features/blog/helpers/read-image-size.ts"

const root = join(import.meta.dirname, "..")
const imagesDir = join(root, "public", "blog")
const output = join(root, "src", "features", "blog", "constants", "blog-image-sizes.json")
const IMAGE = /\.(png|jpe?g|webp|gif)$/i

const sizes: Record<string, [number, number]> = {}
for (const entry of readdirSync(imagesDir, { recursive: true, withFileTypes: true })) {
  if (!entry.isFile() || !IMAGE.test(entry.name)) continue
  const file = join(entry.parentPath, entry.name)
  const size = readImageSize(new Uint8Array(readFileSync(file)))
  if (!size) throw new Error(`Could not read the size of ${file}`)
  sizes[`/${relative(join(root, "public"), file).split("\\").join("/")}`] = [
    size.width,
    size.height
  ]
}

const sorted = Object.fromEntries(Object.entries(sizes).sort(([a], [b]) => a.localeCompare(b)))
writeFileSync(output, `${JSON.stringify(sorted, null, 2)}\n`)
process.stdout.write(
  `Wrote ${Object.keys(sorted).length} image sizes to ${relative(root, output)}\n`
)
