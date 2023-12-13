import Link from "next/link"

import { navigationMenu } from "@/libs/constants"

export default function Header() {
  return (
    <>
      <header className="flex">
        <div>
          <ul className="flex items-center gap-4">
            {navigationMenu.map(({ label = "", href = "/" }) => (
              <li>
                <Link href={href}>
                  <span className="text-base leading-10 hover:text-blue-500">
                    {label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  )
}
