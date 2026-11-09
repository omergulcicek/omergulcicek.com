import {
  BookmarkIcon,
  BriefcaseIcon,
  ClapperboardIcon,
  FolderGit2Icon,
  HouseIcon,
  LaptopIcon,
  LayersIcon,
  LibraryBigIcon,
  MusicIcon,
  NewspaperIcon,
  NotebookPenIcon,
  RouteIcon,
  UserIcon
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

import * as m from "@/paraglide/messages.js"
import type { FileRouteTypes } from "@/routeTree.gen"

type SiteNavLink = {
  to: FileRouteTypes["to"]
  label: string
  icon: LucideIcon
  /** Only the home link needs this: every other path starts with it. */
  exact?: boolean
}

type SiteNavGroup = {
  id: string
  label?: string
  links: SiteNavLink[]
}

/** Sidebar groups. A function, so the labels follow the current locale. */
export function getSiteNav(): SiteNavGroup[] {
  return [
    {
      id: "main",
      links: [{ to: "/{-$lang}", label: m.nav_home(), icon: HouseIcon, exact: true }]
    },
    {
      id: "writing",
      label: m.nav_group_writing(),
      links: [
        { to: "/{-$lang}/blog", label: m.nav_blog(), icon: NewspaperIcon },
        { to: "/{-$lang}/notes", label: m.nav_notes(), icon: NotebookPenIcon }
      ]
    },
    {
      id: "work",
      label: m.nav_group_work(),
      links: [
        { to: "/{-$lang}/virastack", label: m.nav_virastack(), icon: LayersIcon },
        { to: "/{-$lang}/projects", label: m.nav_projects(), icon: FolderGit2Icon },
        { to: "/{-$lang}/experiences", label: m.nav_experiences(), icon: BriefcaseIcon }
      ]
    },
    {
      id: "explore",
      label: m.nav_group_explore(),
      links: [
        { to: "/{-$lang}/bookmarks", label: m.nav_bookmarks(), icon: BookmarkIcon },
        { to: "/{-$lang}/library", label: m.nav_library(), icon: LibraryBigIcon },
        { to: "/{-$lang}/films", label: m.nav_films(), icon: ClapperboardIcon },
        { to: "/{-$lang}/music", label: m.nav_music(), icon: MusicIcon }
      ]
    },
    {
      id: "about",
      label: m.nav_group_about(),
      links: [
        { to: "/{-$lang}/about", label: m.nav_about(), icon: UserIcon },
        { to: "/{-$lang}/journey", label: m.nav_journey(), icon: RouteIcon },
        { to: "/{-$lang}/uses", label: m.nav_uses(), icon: LaptopIcon }
      ]
    }
  ]
}
