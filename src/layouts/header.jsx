import Link from "next/link"

import { navigationMenu } from "lib/constant"

export default function Header() {
  if (navigationMenu?.length === 0) return false

  return (
    <>
      <header className="w-full border-b z-40">
        <div className="container">
          <nav>
            <ul className="flex items-center gap-4 h-16">
              {navigationMenu.map(({ text = "", link = "/" }, index) => (
                <li key={index}>
                  <Link href={link}>{text}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}
