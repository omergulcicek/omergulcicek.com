import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"

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
        {subMenus.map(
          ({
            text = "",
            description = "",
            link = "/",
            color = "currentColor",
            isDarkThemeLogoWhite,
          }) => (
            <Link
              href={link}
              className="group/subMenu flex items-center gap-4 h-[72px] w-full pl-8 pr-16 subMenu"
              key={text}
            >
              <figure
                className="relative h-9 w-9 flex items-center justify-center colorBox"
                style={{ "--color": color }}
              >
                {getIcons({
                  name: link.slice(1),
                  color:
                    theme === "dark" && isDarkThemeLogoWhite ? "#fff" : color,
                })}
              </figure>

              <div>
                <div className="text-base text-neutral-900 font-semibold dark:text-neutral-100  dark:hover:text-neutral-300">
                  {text}
                </div>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  {description}
                </p>
              </div>

              <figure className="transition duration-300 opacity-0 absolute right-8 group-hover/subMenu:opacity-100 group-hover/subMenu:translate-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 12 12"
                  height="12"
                  width="12"
                  fill={color}
                >
                  <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
                </svg>
              </figure>
            </Link>
          )
        )}
      </ul>
    </>
  )
}
