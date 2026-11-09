import { OG_COLORS } from "@/features/og-image/constants/og-image.constants"
import { clampText } from "@/features/og-image/helpers/clamp-text"

export type OgCardProps = {
  title: string
  description: string
  /** The address shown bottom left, such as `omergulcicek.com/blog`. */
  sitePath: string
  /** Bottom right, such as "5 Kasım 2026 · Yapay Zekâ"; nothing for plain pages. */
  meta?: string
  name: string
  role: string
  /** A data URL: Satori cannot read files or relative paths. */
  photo: string
}

/**
 * The share card, drawn by Satori: inline styles and flexbox only. The double frame is the
 * site's signature on cards and photos, so the image reads as the same site in a feed.
 */
export function OgCard({ title, description, sitePath, meta, name, role, photo }: OgCardProps) {
  // Long titles step down a size, leaving room for three lines of description.
  const titleSize = title.length > 60 ? 46 : 52

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        padding: 40,
        background: OG_COLORS.background,
        fontFamily: "Geist, Geist Ext"
      }}
    >
      <div
        style={{
          display: "flex",
          flex: 1,
          padding: 10,
          borderRadius: 34,
          border: `1px solid ${OG_COLORS.border}`
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "52px 60px",
            borderRadius: 24,
            border: `1px solid ${OG_COLORS.border}`,
            background: OG_COLORS.surface,
            color: OG_COLORS.foreground
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
            <img
              src={photo}
              width={64}
              height={64}
              style={{ borderRadius: 9999, border: `1px solid ${OG_COLORS.border}` }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontSize: 26, fontWeight: 600 }}>{name}</span>
              <span style={{ fontSize: 22, color: OG_COLORS.muted }}>{role}</span>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              style={{
                fontSize: titleSize,
                fontWeight: 600,
                lineHeight: 1.12,
                letterSpacing: "-0.025em"
              }}
            >
              {clampText(title, 110)}
            </div>
            <div style={{ fontSize: 28, lineHeight: 1.4, color: OG_COLORS.muted, maxWidth: 980 }}>
              {clampText(description, 170)}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 22,
              color: OG_COLORS.muted
            }}
          >
            <span>{sitePath}</span>
            {meta ? <span>{meta}</span> : null}
          </div>
        </div>
      </div>
    </div>
  )
}
