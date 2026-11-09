export type ImageSize = { width: number; height: number }

function u16be(bytes: Uint8Array, at: number) {
  return ((bytes[at] ?? 0) << 8) | (bytes[at + 1] ?? 0)
}

function u16le(bytes: Uint8Array, at: number) {
  return (bytes[at] ?? 0) | ((bytes[at + 1] ?? 0) << 8)
}

function u24le(bytes: Uint8Array, at: number) {
  return u16le(bytes, at) | ((bytes[at + 2] ?? 0) << 16)
}

function u32be(bytes: Uint8Array, at: number) {
  return u16be(bytes, at) * 0x10000 + u16be(bytes, at + 2)
}

function ascii(bytes: Uint8Array, at: number, length: number) {
  return String.fromCharCode(...bytes.subarray(at, at + length))
}

function readPng(bytes: Uint8Array): ImageSize {
  return { width: u32be(bytes, 16), height: u32be(bytes, 20) }
}

function readGif(bytes: Uint8Array): ImageSize {
  return { width: u16le(bytes, 6), height: u16le(bytes, 8) }
}

function readWebp(bytes: Uint8Array): ImageSize | null {
  const chunk = ascii(bytes, 12, 4)
  if (chunk === "VP8 ")
    return { width: u16le(bytes, 26) & 0x3fff, height: u16le(bytes, 28) & 0x3fff }
  if (chunk === "VP8X") return { width: 1 + u24le(bytes, 24), height: 1 + u24le(bytes, 27) }
  if (chunk === "VP8L") {
    const [b0 = 0, b1 = 0, b2 = 0, b3 = 0] = bytes.subarray(21, 25)
    return {
      width: 1 + (((b1 & 0x3f) << 8) | b0),
      height: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6))
    }
  }
  return null
}

/** Walks the JPEG markers to the first frame header (SOFn), which holds the size. */
function readJpeg(bytes: Uint8Array): ImageSize | null {
  let at = 2
  while (at + 9 < bytes.length) {
    if (bytes[at] !== 0xff) return null
    const marker = bytes[at + 1] ?? 0
    const isFrame = marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)
    if (isFrame) return { height: u16be(bytes, at + 5), width: u16be(bytes, at + 7) }
    at += 2 + u16be(bytes, at + 2)
  }
  return null
}

/**
 * The pixel size of a PNG, JPEG, WebP or GIF from its header bytes, or null for anything
 * else. Enough for the post images; written out because no image library is a dependency.
 */
export function readImageSize(bytes: Uint8Array): ImageSize | null {
  if (bytes.length < 30) return null
  if (u32be(bytes, 0) === 0x89504e47) return readPng(bytes)
  if (ascii(bytes, 0, 3) === "GIF") return readGif(bytes)
  if (ascii(bytes, 0, 4) === "RIFF" && ascii(bytes, 8, 4) === "WEBP") return readWebp(bytes)
  if (bytes[0] === 0xff && bytes[1] === 0xd8) return readJpeg(bytes)
  return null
}
