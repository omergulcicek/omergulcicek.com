import Link from "next/link"
import { useRouter } from "next/router"

import { navigationMenu } from "lib/constant"
import { cn } from "lib/utils"

export default function Navigation({ className, onClick }) {
  const { pathname } = useRouter()

  return (
    <>
      <ul className={cn("flex items-center gap-4 h-16 px-4", className)}>
        {navigationMenu.map(({ text = "", link = "/", subMenus }, index) =>
          subMenus ? (
            <details key={index}>
              <summary>{text}</summary>
              <div className="flex flex-col gap-2 py-3">
                {subMenus.map(({ text: subText, link: subLink }) => (
                  <Link href={subLink} onClick={onClick}>
                    {subText}
                  </Link>
                ))}
              </div>
            </details>
          ) : (
            <Link href={link} onClick={onClick}>
              {text}
            </Link>
          )
        )}
      </ul>
    </>
  )
}
