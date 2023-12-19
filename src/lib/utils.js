import { twMerge } from "tailwind-merge"
import { clsx } from "clsx"

import {
  FaAngleDown,
  FaBook,
  FaCode,
  FaFont,
  FaMap,
  FaPaintbrush,
  FaPencil,
  FaReact,
  FaScrewdriverWrench,
  FaTurkishLiraSign,
  FaUserGraduate,
  FaRegUser,
  FaLaptop,
} from "react-icons/fa6"

export function cn(...args) {
  return twMerge(clsx(...args))
}

export function getIcons(name = "") {
  switch (name) {
    case "workspace":
      return <FaLaptop />
    case "about":
      return <FaRegUser />
    case "roadmap":
      return <FaMap />
    case "book":
      return <FaBook />
    case "code":
      return <FaCode />
    case "tools":
      return <FaScrewdriverWrench />
    case "personal-articles":
      return <FaPencil />
    case "font":
      return <FaFont />
    case "technical-articles":
      return <FaReact />
    case "design":
      return <FaPaintbrush />
    case "freelance":
      return <FaTurkishLiraSign />
    case "private-lesson":
      return <FaUserGraduate />

    default:
      return <FaAngleDown className="h-3 w-3 fill-neutral-400" />
  }
}
