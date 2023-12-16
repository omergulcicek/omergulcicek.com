import Link from "next/link"
import { useRouter } from "next/router"

import { navigationMenu } from "lib/constant"
import { cn } from "lib/utils"

export default function Navigation({ className, onClick }) {
  const { pathname } = useRouter()

  return (
    <>
      <ul className={cn("flex items-center gap-4 h-16 px-4", className)}>
        {navigationMenu.map(({ text = "", link = "/" }, index) => (
          <li key={index}>
            <Link
              href={link}
              className={cn(
                "cursor-pointer transition hover:underline",
                pathname === link && "text-primary"
              )}
              onClick={onClick}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
