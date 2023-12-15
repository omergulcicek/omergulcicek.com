import Link from "next/link"
import { useRouter } from "next/router"

import { cn } from "lib/utils"
import { navigationMenu } from "lib/constant"

export default function Header() {
  if (!navigationMenu || navigationMenu?.length === 0) return false

  const { pathname } = useRouter()

  return (
    <>
      <header className="w-full border-b dark:border-b-neutral-800 z-40">
        <div className="container">
          <nav>
            <ul className="flex items-center gap-4 h-16 px-4">
              {navigationMenu.map(({ text = "", link = "/" }, index) => (
                <li key={index}>
                  <Link
                    href={link}
                    className={cn(
                      "cursor-pointer transition hover:underline",
                      pathname === link && "text-primary"
                    )}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
