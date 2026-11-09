import {
  BookmarkIcon,
  BriefcaseIcon,
  ClapperboardIcon,
  FolderGit2Icon,
  HouseIcon,
  LaptopIcon,
  LibraryBigIcon,
  MusicIcon,
  NewspaperIcon,
  NotebookPenIcon,
  RouteIcon,
  UserIcon
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import * as m from "@/paraglide/messages.js"
import type { Locale } from "@/paraglide/runtime.js"
import type { FileRouteTypes } from "@/routeTree.gen"

type SiteNavLink = {
  to: FileRouteTypes["to"]
  label: string
  /** The page's meta description; llms.txt lists it beside the link. */
  description: string
  icon: LucideIcon
  /** Only the home link needs this: every other path starts with it. */
  exact?: boolean
}

type SiteNavGroup = {
  id: string
  label?: string
  links: SiteNavLink[]
}

/**
 * Sidebar groups, and with getUnlistedPages the one list of the site's pages: the sitemap and
 * llms.txt read both. A function, so the labels follow the current locale; server routes pass a
 * locale.
 */
export function getSiteNav(locale?: Locale): SiteNavGroup[] {
  const o = locale ? { locale } : undefined

  return [
    {
      id: "main",
      links: [
        {
          to: "/{-$lang}",
          label: m.nav_home({}, o),
          description: m.site_description({}, o),
          icon: HouseIcon,
          exact: true
        }
      ]
    },
    {
      id: "writing",
      label: m.nav_group_writing({}, o),
      links: [
        {
          to: "/{-$lang}/blog",
          label: m.nav_blog({}, o),
          description: m.blog_description({}, o),
          icon: NewspaperIcon
        },
        {
          to: "/{-$lang}/notes",
          label: m.nav_notes({}, o),
          description: m.notes_description({}, o),
          icon: NotebookPenIcon
        }
      ]
    },
    {
      id: "work",
      label: m.nav_group_work({}, o),
      links: [
        {
          to: "/{-$lang}/projects",
          label: m.nav_projects({}, o),
          description: m.projects_description({}, o),
          icon: FolderGit2Icon
        },
        {
          to: "/{-$lang}/experiences",
          label: m.nav_experiences({}, o),
          description: m.experiences_description({}, o),
          icon: BriefcaseIcon
        }
      ]
    },
    {
      id: "explore",
      label: m.nav_group_explore({}, o),
      links: [
        {
          to: "/{-$lang}/bookmarks",
          label: m.nav_bookmarks({}, o),
          description: m.bookmarks_description({}, o),
          icon: BookmarkIcon
        },
        {
          to: "/{-$lang}/library",
          label: m.nav_library({}, o),
          description: m.library_description({}, o),
          icon: LibraryBigIcon
        },
        {
          to: "/{-$lang}/films",
          label: m.nav_films({}, o),
          description: m.films_description({}, o),
          icon: ClapperboardIcon
        },
        {
          to: "/{-$lang}/music",
          label: m.nav_music({}, o),
          description: m.music_description({}, o),
          icon: MusicIcon
        }
      ]
    },
    {
      id: "about",
      label: m.nav_group_about({}, o),
      links: [
        {
          to: "/{-$lang}/about",
          label: m.nav_about({}, o),
          description: m.about_description({}, o),
          icon: UserIcon
        },
        {
          to: "/{-$lang}/journey",
          label: m.nav_journey({}, o),
          description: m.journey_description({}, o),
          icon: RouteIcon
        },
        {
          to: "/{-$lang}/uses",
          label: m.nav_uses({}, o),
          description: m.uses_description({}, o),
          icon: LaptopIcon
        }
      ]
    }
  ]
}

type SitePage = { path: string; title: string; description: string }

/**
 * Pages that are not in the menu but still belong in the sitemap and llms.txt. ViraStack is
 * reached from the home hero's button instead.
 */
function getUnlistedPages(o: { locale: Locale } | undefined): SitePage[] {
  return [
    {
      path: "/virastack",
      title: m.nav_virastack({}, o),
      description: m.virastack_description({}, o)
    }
  ]
}

/** Every page as a locale-free path ("/", "/blog"): the menu's, in order, then the unlisted ones. */
export function getSitePages(locale?: Locale): SitePage[] {
  const menuPages = getSiteNav(locale).flatMap((group) =>
    group.links.map(({ to, label, description }) => ({
      path: to.replace("/{-$lang}", "") || "/",
      title: label,
      description
    }))
  )

  return [...menuPages, ...getUnlistedPages(locale ? { locale } : undefined)]
}
