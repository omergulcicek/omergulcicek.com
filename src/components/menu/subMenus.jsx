import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"

import SubMenuItem from "components/menu/subMenuItem"
import { cn, getIcons } from "lib/utils"

export default function SubMenus({ text = "", link = "/", subMenus }) {
  const { pathname } = useRouter()
  const { theme } = useTheme()

  return (
    <>
      <span
        className={cn(
          "flex items-center justify-between gap-1 text-neutral-600 font-medium leading-[64px] cursor-pointer transition hover:text-black dark:text-neutral-100  dark:hover:text-neutral-300",
          pathname === link && "text-black"
        )}
      >
        {text}

        <figure>{getIcons({})}</figure>
      </span>

      <ul className="flex flex-col absolute top-full bg-white shadow-sm border rounded-xl py-4 -mt-3 -ml-4 transition duration-300 z-10 opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible group-hover/link:translate-y-1 dark:bg-neutral-900 dark:border-neutral-800">
        {subMenus.map((params) => (
          <SubMenuItem {...params} />
        ))}
      </ul>
    </>
  )
}
