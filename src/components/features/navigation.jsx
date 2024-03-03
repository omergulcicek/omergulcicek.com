"use client"

import { usePathname } from "next/navigation"

import { NavigationItem } from "@/features/navigation-item"
import { useKeyPress } from "@/hooks/useKeyPress"
import { keyCodePathnameMapping } from "@/utils/constants"

const Navigation = ({ title, data, onKeyPress = () => {} }) => {
  const pathname = usePathname()

  useKeyPress(onKeyPress, Object.keys(keyCodePathnameMapping))

  if (!data?.length) return null

  return (
    <>
      <section className="flex flex-col gap-2">
        {title && (
          <span className="px-2 text-xs font-medium leading-relaxed text-gray-600">
            {title}
          </span>
        )}

        <nav className="flex flex-col gap-1">
          {data.map(({ key, url, ...others }, index) => (
            <NavigationItem
              key={index}
              url={url}
              isActive={
                pathname === url || (url !== "/" && pathname.includes(url))
              }
              {...others}
            >
              {key && (
                <span className="flex h-5 w-5 items-center justify-center rounded border border-gray-200 bg-gray-100 text-xs font-medium text-gray-500">
                  {key}
                </span>
              )}
            </NavigationItem>
          ))}
        </nav>
      </section>
    </>
  )
}

export { Navigation }
