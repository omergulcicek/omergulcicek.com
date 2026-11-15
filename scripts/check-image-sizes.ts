// Fails when an image under public/ is over 500 KB, or when public/blog holds a PNG or JPG that
// `pnpm blog:images` has not turned into WebP yet. lint-staged passes the staged files; with no
// arguments (CI) it checks every image under public/.
import { readdirSync, statSync } from "node:fs"
import { join, relative, resolve } from "node:path"

const root = join(import.meta.dirname, "..")
const MAX_BYTES = 500 * 1024
const IMAGE = /\.(png|jpe?g|webp|avif|gif)$/i
const RASTER = /\.(png|jpe?g)$/i

const toPath = (file: string) => relative(root, resolve(root, file)).split("\\").join("/")

const files = (
  process.argv.length > 2
    ? process.argv.slice(2)
    : readdirSync(join(root, "public"), { recursive: true, withFileTypes: true })
        .filter((entry) => entry.isFile())
        .map((entry) => join(entry.parentPath, entry.name))
)
  .map(toPath)
  .filter((file) => file.startsWith("public/") && IMAGE.test(file))

const problems: string[] = []
for (const file of files) {
  const size = statSync(join(root, file)).size
  if (size > MAX_BYTES) {
    problems.push(`${file} is ${Math.round(size / 1024)} KB; the limit is ${MAX_BYTES / 1024} KB`)
  }
  if (file.startsWith("public/blog/") && RASTER.test(file)) {
    problems.push(`${file} is not WebP; run \`pnpm blog:images\``)
  }
}

if (problems.length > 0) {
  process.stderr.write(`${problems.join("\n")}\n`)
  process.exit(1)
}
process.stdout.write(`Checked ${files.length} images\n`)
