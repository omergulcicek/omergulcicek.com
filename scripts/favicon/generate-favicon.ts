// Draws the site's mark, an İznik çintemani tile (three blossoms with saz leaves), and writes
// every icon from it: public/favicon.svg and favicon.ico (rounded), the manifest's 192 and 512
// PNGs (rounded), apple-touch-icon.png (square: iOS rounds it) and a square SVG for the Brand
// page, whose CSS frame rounds it there. Every shape is computed from the constants below, so a change here
// and `pnpm favicon` is all it takes to redraw it. All sizes are in units of the 500x500 canvas.
import { mkdirSync, writeFileSync } from "node:fs"
import { dirname, join, relative } from "node:path"

import { Resvg } from "@resvg/resvg-js"

// Tailwind teal-600, the brand color in the light theme. Hex, not oklch(): resvg, which draws
// the PNGs, does not read oklch().
const GROUND = "#009689"
// Corner radius of the favicon only: 64 of 500 is about 4px at a 32px tab icon.
const FAVICON_RADIUS = 64
const RED = "#c8202f"
const BLUE = "#1f2fa3"
const WHITE = "#fbfaf6"
const LINE = "#1d2b2a"

// Three-fold symmetry around the tile's center: blossoms every 120°, leaf pairs halfway between.
const CENTER = { x: 250, y: 264 }
const BLOSSOM_DISTANCE = 125
const BLOSSOM_RADIUS = 80
const BLUE_RADIUS = 55
const DOT_RADIUS = 19
// White, blue and red circles touch at one point facing the center, so white and blue read as
// crescents. Above 0 they stop just short of touching.
const TOUCH_GAP = 0
// How far the cloud's base tucks in under the white circle.
const CREST_TUCK = 4

// Leaf: length, wave height, number of waves, half width at the widest point.
const LEAF = { length: 196, amplitude: 6, waves: 1.5, width: 6 }
// Sideways gap of each leaf from the pair's middle line, start distance from the center, and
// how many degrees the two leaves of a pair spread apart.
const LEAF_PAIR = { offset: 11, start: 20, spread: 2 }

// A cloud with three rises: a low left lobe, a tall middle one and a right one. Drawn pointing
// up around its base point, then turned to face outward from each blossom.
const CLOUD_PATH =
  "M-30,5 C-38,-4 -32,-18 -19,-16 C-22,-33 2,-39 6,-26 C13,-35 31,-29 28,-14 C35,-8 33,5 25,5 Q0,-5 -30,5 Z"

// Outline widths. Each red shape is drawn twice: a wider black stroke underneath shows as a thin
// line outside its white edge.
const STROKE = {
  blossom: 3,
  blue: 1.6,
  dot: 1.4,
  cloudWhite: 2,
  cloudBlack: 5,
  leafWhite: 2.5,
  leafBlack: 5.5
}

const round = (value: number) => Number(value.toFixed(1))

function polar(angle: number, distance: number) {
  const rad = (angle * Math.PI) / 180
  return {
    x: round(CENTER.x + distance * Math.cos(rad)),
    y: round(CENTER.y + distance * Math.sin(rad))
  }
}

function leafPath({ length, amplitude, waves, width }: typeof LEAF) {
  const steps = 48
  const top: string[] = []
  const bottom: string[] = []
  for (let i = 0; i <= steps; i++) {
    const t = i / steps
    const x = round(t * length)
    const y = amplitude * Math.sin(t * waves * Math.PI * 2)
    const w = width * Math.sin(Math.PI * t) ** 0.9
    top.push(`${x},${round(y - w)}`)
    bottom.unshift(`${x},${round(y + w)}`)
  }
  return `M${top.join("L")}L${bottom.join("L")}Z`
}

const leafShape = leafPath(LEAF)

const leaves = [210, 330, 90].flatMap((angle) =>
  [-1, 1].map((side) => {
    // Offset each leaf of the pair sideways so the two run parallel through the gap.
    const sideways = polar(angle + side * 90, LEAF_PAIR.offset)
    const outward = polar(angle, LEAF_PAIR.start)
    return {
      x: round(sideways.x + outward.x - CENTER.x),
      y: round(sideways.y + outward.y - CENTER.y),
      angle: angle + side * LEAF_PAIR.spread
    }
  })
)

const blossoms = [270, 150, 30].map((angle) => {
  // Blue eye and red dot lean toward the tile's center; the cloud sits on the outer edge.
  const blueOffset = BLOSSOM_RADIUS - BLUE_RADIUS - TOUCH_GAP
  const dotOffset = blueOffset + BLUE_RADIUS - DOT_RADIUS - TOUCH_GAP
  return {
    center: polar(angle, BLOSSOM_DISTANCE),
    blue: polar(angle, BLOSSOM_DISTANCE - blueOffset),
    dot: polar(angle, BLOSSOM_DISTANCE - dotOffset),
    crest: { ...polar(angle, BLOSSOM_DISTANCE + BLOSSOM_RADIUS - CREST_TUCK), angle: angle + 90 }
  }
})

const ROUND_JOIN = 'stroke-linejoin="round"'

const leafSvg = leaves
  .map(
    (leaf) =>
      `<g transform="translate(${leaf.x} ${leaf.y}) rotate(${leaf.angle})">` +
      `<use href="#leaf" stroke="${LINE}" stroke-width="${STROKE.leafBlack}"/>` +
      `<use href="#leaf" fill="${RED}" stroke="${WHITE}" stroke-width="${STROKE.leafWhite}" paint-order="stroke"/>` +
      `</g>`
  )
  .join("")

const blossomSvg = blossoms
  .map(
    ({ center, blue, dot, crest }) =>
      `<g transform="translate(${crest.x} ${crest.y}) rotate(${crest.angle})" fill="${RED}">` +
      `<use href="#cloud" stroke="${LINE}" stroke-width="${STROKE.cloudBlack}"/>` +
      `<use href="#cloud" stroke="${WHITE}" stroke-width="${STROKE.cloudWhite}" paint-order="stroke"/>` +
      `</g>` +
      `<circle cx="${center.x}" cy="${center.y}" r="${BLOSSOM_RADIUS}" fill="${WHITE}" stroke="${LINE}" stroke-width="${STROKE.blossom}"/>` +
      `<circle cx="${blue.x}" cy="${blue.y}" r="${BLUE_RADIUS}" fill="${BLUE}" stroke="${LINE}" stroke-width="${STROKE.blue}"/>` +
      `<circle cx="${dot.x}" cy="${dot.y}" r="${DOT_RADIUS}" fill="${RED}" stroke="${WHITE}" stroke-width="${STROKE.dot}"/>`
  )
  .join("")

function buildSvg(radius: number) {
  return (
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">` +
    `<defs><path id="leaf" d="${leafShape}" ${ROUND_JOIN}/><path id="cloud" d="${CLOUD_PATH}" ${ROUND_JOIN}/></defs>` +
    `<rect width="500" height="500"${radius ? ` rx="${radius}"` : ""} fill="${GROUND}"/>` +
    leafSvg +
    blossomSvg +
    `</svg>\n`
  )
}

const root = join(import.meta.dirname, "..", "..")
const publicDir = join(root, "public")

function write(path: string, data: string | Uint8Array) {
  mkdirSync(dirname(path), { recursive: true })
  writeFileSync(path, data)
  process.stdout.write(`Wrote ${relative(root, path)} (${data.length} bytes)\n`)
}

function toPng(svg: string, size: number) {
  return new Resvg(svg, { fitTo: { mode: "width", value: size } }).render().asPng()
}

/** An ICO whose entries are PNGs, which every browser that still asks for favicon.ico reads. */
function toIco(pngs: { size: number; data: Uint8Array }[]) {
  const header = Buffer.alloc(6 + pngs.length * 16)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(pngs.length, 4)
  let offset = header.length
  pngs.forEach(({ size, data }, index) => {
    const entry = 6 + index * 16
    // 0 stands for 256 in the one-byte width and height fields.
    header.writeUInt8(size >= 256 ? 0 : size, entry)
    header.writeUInt8(size >= 256 ? 0 : size, entry + 1)
    header.writeUInt8(0, entry + 2)
    header.writeUInt8(0, entry + 3)
    header.writeUInt16LE(1, entry + 4)
    header.writeUInt16LE(32, entry + 6)
    header.writeUInt32LE(data.length, entry + 8)
    header.writeUInt32LE(offset, entry + 12)
    offset += data.length
  })
  return Buffer.concat([header, ...pngs.map(({ data }) => data)])
}

const rounded = buildSvg(FAVICON_RADIUS)
const square = buildSvg(0)

write(join(publicDir, "favicon.svg"), rounded)
write(join(publicDir, "img", "brand", "cintemani.svg"), square)
write(join(publicDir, "apple-touch-icon.png"), toPng(square, 180))
for (const size of [192, 512]) {
  write(join(publicDir, `icon-${size}.png`), toPng(rounded, size))
}
write(
  join(publicDir, "favicon.ico"),
  toIco([16, 32, 48].map((size) => ({ size, data: toPng(rounded, size) })))
)
