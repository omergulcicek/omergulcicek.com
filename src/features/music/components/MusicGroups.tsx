import { useState } from "react"

import { MusicIcon, PlayIcon } from "lucide-react"
import { cn } from "cn"

import { localize } from "@/helpers/localize"

import { mediaFrameClass } from "@/components/shared/surface.styles"
import { buttonVariants } from "@/components/ui/button"
import { Spotify } from "@/components/ui/svgs/spotify"
import { MUSIC_GROUPS } from "@/features/music/constants/music.constants"
import type { MusicGroup } from "@/features/music/constants/music.constants"
import * as m from "@/paraglide/messages.js"

/**
 * The featured song: its video still with a play button, swapped for the YouTube player on
 * click and started right away. The player only loads then, so the page stays light, and it
 * comes from youtube-nocookie.com, which sets no cookies until the video plays.
 */
function FeaturedVideo({
  featured,
  priority
}: {
  featured: NonNullable<MusicGroup["featured"]>
  /** The first group's still is the LCP, so it loads eagerly. */
  priority: boolean
}) {
  const [playing, setPlaying] = useState(false)
  const label = `${featured.artist}, ${featured.title}`

  return (
    <div className="flex flex-col gap-2">
      <div className={cn("relative aspect-video overflow-hidden bg-muted", mediaFrameClass)}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${featured.youtubeId}?autoplay=1&rel=0`}
            title={label}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 size-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={m.music_play({ song: label })}
            className="group absolute inset-0 outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:ring-inset"
          >
            <img
              src={featured.image}
              alt=""
              width={960}
              height={540}
              loading={priority ? "eager" : "lazy"}
              fetchPriority={priority ? "high" : undefined}
              decoding="async"
              className="size-full object-cover transition-[scale] duration-300 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
            />
            {/* The play mark says "this is a video" before anyone reads the caption. */}
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-150 group-hover:bg-black/20"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm transition-[scale] duration-150 ease-out group-hover:scale-110 motion-reduce:transition-none">
                <PlayIcon className="size-4 translate-x-px fill-current" />
              </span>
            </span>
          </button>
        )}
      </div>
      <p className="text-sm">
        <span className="font-medium">{featured.artist}</span>
        <span className="text-muted-foreground">, {featured.title}</span>
      </p>
    </div>
  )
}

const spotifyButtonClass = cn(
  buttonVariants({ variant: "outline", size: "sm" }),
  "shrink-0 gap-1.5 font-normal"
)

/** "Listen on Spotify" by the section title; shown disabled until the playlist link is set. */
function SpotifyButton({ url }: { url: string | null }) {
  const content = (
    <>
      <Spotify aria-hidden className="size-4" />
      {m.music_spotify()}
    </>
  )

  if (!url) {
    return (
      <span
        aria-disabled="true"
        className={cn(spotifyButtonClass, "pointer-events-none opacity-50")}
      >
        {content}
      </span>
    )
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className={spotifyButtonClass}>
      {content}
    </a>
  )
}

/** Holds the left column's place until the group has a featured song. */
function FeaturedPlaceholder() {
  return (
    <span
      aria-hidden
      className={cn(
        "flex aspect-video items-center justify-center bg-muted/40 text-muted-foreground",
        mediaFrameClass
      )}
    >
      <MusicIcon className="size-6" strokeWidth={1.75} />
    </span>
  )
}

/**
 * One section per group: from sm up, the featured video sits on the left and stays in view
 * (sticky) while the title, artists and songs scroll on the right; below sm it stacks.
 */
export function MusicGroups() {
  const groups = MUSIC_GROUPS.map((group) => ({ ...group, anchor: `music-${group.id}` }))

  return (
    <>
      <div className="flex flex-col gap-12">
        {groups.map((group, groupIndex) => (
          <section
            key={group.id}
            aria-labelledby={group.anchor}
            className="grid gap-5 sm:grid-cols-[15rem_minmax(0,1fr)] sm:gap-6 lg:grid-cols-[25rem_minmax(0,1fr)] lg:gap-10"
          >
            <div className="sm:sticky sm:top-24 sm:self-start">
              {group.featured ? (
                <FeaturedVideo featured={group.featured} priority={groupIndex === 0} />
              ) : (
                <FeaturedPlaceholder />
              )}
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <div className="flex items-start justify-between gap-3">
                  <h2 id={group.anchor} className="scroll-mt-24 text-lg font-semibold text-pretty">
                    {localize(group.title)}
                  </h2>
                  <SpotifyButton url={group.spotifyUrl} />
                </div>
                <p className="text-sm text-pretty text-muted-foreground">
                  {localize(group.description)}
                </p>
              </div>
              <p className="text-sm text-pretty">{group.artists.join(", ")}</p>
              {group.tracks.length > 0 ? (
                <ol className="flex flex-col divide-y divide-border border-y border-border">
                  {group.tracks.map((track, index) => (
                    <li
                      key={`${track.artist}-${track.title}`}
                      className="flex items-baseline gap-3 py-2.5 text-sm"
                    >
                      <span className="w-4 shrink-0 font-mono text-xs text-muted-foreground tabular-nums">
                        {index + 1}
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span className="font-medium">{track.title}</span>
                        <span className="text-xs text-muted-foreground">{track.artist}</span>
                      </span>
                    </li>
                  ))}
                </ol>
              ) : null}
            </div>
          </section>
        ))}
      </div>
    </>
  )
}
