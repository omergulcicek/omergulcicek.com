import Link from "next/link"

import { navigationMenu } from "@/libs/constants"

export default function DesktopHeader() {
  return (
    <>
      <header className="flex items-center bg-white h-12 w-full p-2 border-b">
        <nav>
          <ul className="flex items-center gap-4">
            {navigationMenu.map(({ label = "", href = "/" }) => (
              <li key={label}>
                <Link href={href}>
                  <span className="text-base leading-10 hover:text-blue-500">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
