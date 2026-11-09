import {
  CompassIcon,
  GraduationCapIcon,
  MapPinIcon,
  RocketIcon,
  SparklesIcon,
  SquareAsteriskIcon,
  TextCursorInputIcon
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type ViraStackProduct = {
  /** The id `me.projects` uses for the product. */
  id: string
  name: string
  Icon: LucideIcon
  /** The product's color on virastack.com, as full classes for Tailwind's scanner. */
  colorClass: string
  /** The fixed brand color as a background, for dots; the same in both themes. */
  dotClass: string
}

/*
 * Brand colors are a deliberate exception to the semantic-token rule (see AGENTS.md): each
 * product keeps its virastack.com color, on icons only. Order follows virastack.com.
 */
export const VIRASTACK_PRODUCTS: readonly ViraStackProduct[] = [
  {
    id: "academy",
    name: "Academy",
    Icon: GraduationCapIcon,
    colorClass: "text-sky-600 dark:text-sky-500",
    dotClass: "bg-sky-500"
  },
  {
    id: "start",
    name: "Start",
    Icon: RocketIcon,
    colorClass: "text-green-600 dark:text-green-500",
    dotClass: "bg-green-500"
  },
  {
    id: "ai",
    name: "AI",
    Icon: SparklesIcon,
    colorClass: "text-fuchsia-600 dark:text-fuchsia-500",
    dotClass: "bg-fuchsia-500"
  },
  {
    id: "mask",
    name: "Mask",
    Icon: TextCursorInputIcon,
    colorClass: "text-indigo-500",
    dotClass: "bg-indigo-500"
  },
  {
    id: "password",
    name: "Password",
    Icon: SquareAsteriskIcon,
    colorClass: "text-pink-600 dark:text-pink-500",
    dotClass: "bg-pink-500"
  },
  {
    id: "address",
    name: "Address",
    Icon: MapPinIcon,
    colorClass: "text-red-600 dark:text-red-500",
    dotClass: "bg-red-500"
  },
  {
    id: "guide",
    name: "Guide",
    Icon: CompassIcon,
    colorClass: "text-amber-600 dark:text-amber-400",
    dotClass: "bg-amber-400"
  }
]
