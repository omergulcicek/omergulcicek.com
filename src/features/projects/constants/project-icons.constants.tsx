import { Fragment } from "react"
import type { ReactNode } from "react"

import { BookTypeIcon, CalendarDaysIcon, CupSodaIcon, TrophyIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "cn"

import { VIRASTACK_PRODUCTS } from "@/constants/virastack-products.constants"

import { Airbnb } from "@/components/ui/svgs/airbnb"
import { Javascript } from "@/components/ui/svgs/javascript"
import { ReactDark } from "@/components/ui/svgs/reactDark"
import { ReactLight } from "@/components/ui/svgs/reactLight"
import { Reactrouter } from "@/components/ui/svgs/reactrouter"
import { TurkuazLogo } from "@/features/projects/icons/TurkuazLogo"

const iconClass = "size-6 shrink-0"

/*
 * Brand colors are a deliberate exception to the semantic-token rule (see AGENTS.md); the
 * ViraStack ones live in src/constants. Only icons are colored; titles stay in the text color.
 */
const lucide = (Icon: LucideIcon, colorClass: string) => (
  <Icon aria-hidden strokeWidth={1.75} className={cn(iconClass, colorClass)} />
)

/** Project icons keyed by `me.projects[].id`. A project without an entry renders no icon. */
export const PROJECT_ICONS = new Map<string, ReactNode>([
  // ViraStack products: icon and color from the shared list, so every page matches.
  ...VIRASTACK_PRODUCTS.map(({ id, Icon, colorClass }) => [id, lucide(Icon, colorClass)] as const),
  ["takvim", lucide(CalendarDaysIcon, "text-blue-600 dark:text-blue-500")],
  ["footy", lucide(TrophyIcon, "text-green-600 dark:text-green-500")],
  [
    "react-tr",
    <Fragment key="react-tr">
      <ReactLight aria-hidden className={cn(iconClass, "dark:hidden")} />
      <ReactDark aria-hidden className={cn(iconClass, "hidden dark:block")} />
    </Fragment>
  ],
  ["react-router-tr", <Reactrouter key="react-router-tr" aria-hidden className={iconClass} />],
  ["es6-tr", <Javascript key="es6-tr" aria-hidden className={iconClass} />],
  ["airbnb-css-tr", <Airbnb key="airbnb-css-tr" aria-hidden className={iconClass} />],
  // Gulp is not in svgl; its red cup stands in.
  ["gulp-tr", lucide(CupSodaIcon, "text-red-600 dark:text-red-500")],
  [
    "turkuaz",
    <TurkuazLogo
      key="turkuaz"
      aria-hidden
      className={cn(iconClass, "text-teal-600 dark:text-teal-500")}
    />
  ],
  ["turkcedokuman", lucide(BookTypeIcon, "text-sky-600 dark:text-sky-500")]
])
