import type { GetImageSize } from "@/features/blog/helpers/rehype-figure-captions"

type MdxImageStripProps = {
  images: readonly { src: string; alt: string }[]
  label: string
  getSize: GetImageSize
}

/**
 * `<ImagesCarousel>`: a row of images that scrolls sideways and snaps to each one. CSS only,
 * so it works by touch, trackpad and keyboard (it is focusable) with no JavaScript; each image
 * still opens in the post's zoom.
 */
export function MdxImageStrip({ images, label, getSize }: MdxImageStripProps) {
  return (
    <div className="not-prose my-6">
      <ul
        aria-label={label}
        // Focusable, so the arrow keys can scroll the row.
        tabIndex={0}
        className="flex snap-x snap-mandatory [scrollbar-width:thin] gap-3 overflow-x-auto rounded-xl pb-2 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
      >
        {images.map(({ src, alt }) => {
          const size = getSize(src)

          return (
            <li key={src} className="shrink-0 snap-start">
              {/* A figure, so the post's image zoom picks it up like any other image. */}
              <figure className="m-0">
                <img
                  src={src}
                  alt={alt}
                  width={size?.width}
                  height={size?.height}
                  srcSet={size?.srcSet}
                  // Shown 288px tall (h-72), so the width follows the image's own ratio.
                  sizes={size ? `${Math.round((288 * size.width) / size.height)}px` : undefined}
                  data-zoom-src={size?.srcSet ? src : undefined}
                  loading="lazy"
                  decoding="async"
                  className="h-72 w-auto rounded-lg border border-border object-cover"
                />
              </figure>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
