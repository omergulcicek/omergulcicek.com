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
  FaLaptop,
  FaUserTie,
  FaMedal,
  FaXTwitter,
  FaGlobe,
  FaUserGroup,
  FaReadme,
} from "react-icons/fa6"
import { SiVisualstudiocode } from "react-icons/si"
import { RiBracesFill } from "react-icons/ri"

export function cn(...args) {
  return twMerge(clsx(...args))
}

export function getIcons({ name = "", color = "currentColor" }) {
  switch (name) {
    case "reading":
      return <FaReadme fill={color} />
    case "websites":
      return <FaGlobe fill={color} />
    case "tweets":
      return <FaXTwitter fill={color} />
    case "bootcamp":
      return <FaMedal fill={color} />
    case "frontend":
      return <RiBracesFill fill={color} />
    case "vscode":
      return <SiVisualstudiocode fill={color} />
    case "workspace":
      return <FaLaptop fill={color} />
    case "about":
      return <FaUserTie fill={color} />
    case "roadmap":
      return <FaMap fill={color} />
    case "books":
      return <FaBook fill={color} />
    case "code":
      return <FaCode fill={color} />
    case "stack":
      return <FaScrewdriverWrench fill={color} />
    case "writing":
      return <FaPencil fill={color} />
    case "font":
      return <FaFont fill={color} />
    case "technical-articles":
      return <FaReact fill={color} />
    case "design":
      return <FaPaintbrush fill={color} />
    case "freelance":
      return <FaTurkishLiraSign fill={color} />
    case "private-lesson":
      return <FaUserGroup fill={color} />

    default:
      return <FaAngleDown className="h-3 w-3 fill-neutral-400" />
  }
}
