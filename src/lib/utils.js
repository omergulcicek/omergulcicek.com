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
  FaUserTie,
  FaMedal,
  FaXTwitter,
  FaGlobe,
} from "react-icons/fa6"
import { SiVisualstudiocode } from "react-icons/si"
import { RiBracesFill } from "react-icons/ri"

export function cn(...args) {
  return twMerge(clsx(...args))
}

export function getIcons(name = "") {
  switch (name) {
    case "websites":
      return <FaGlobe />
    case "tweets":
      return <FaXTwitter />
    case "bootcamp":
      return <FaMedal />
    case "frontend":
      return <RiBracesFill />
    case "vscode":
      return <SiVisualstudiocode />
    case "workspace":
      return <FaLaptop />
    case "about":
      return <FaUserTie />
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
