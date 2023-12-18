import Link from "next/link"
import { useRouter } from "next/router"

import { cn } from "lib/utils"

export default function SubMenus({ text = "", link = "/", subMenus }) {
  const { pathname } = useRouter()

  return (
    <>
      <span
        className={cn(
          "text-neutral-600 font-medium leading-[64px] block cursor-pointer transition hover:text-black",
          pathname === link && "text-black"
        )}
      >
        {text}
      </span>

      <ul className="flex flex-col absolute top-full bg-white shadow-sm border rounded-xl py-4 -mt-3 -ml-4 transition duration-300 z-10 opacity-0 invisible group-hover/link:opacity-100 group-hover/link:visible group-hover/link:translate-y-1">
        {subMenus.map(({ text = "", description = "", link = "/" }) => (
          <Link
            href={link}
            className="group/subMenu flex items-center gap-4 h-[72px] w-full pl-8 pr-16"
          >
            <figure className=" flex items-center justify-center h-9 w-9 bg-neutral-100 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M2.5 0.75H6.5C7.4665 0.75 8.25 1.5335 8.25 2.5V6.5C8.25 7.4665 7.4665 8.25 6.5 8.25H2.5C1.5335 8.25 0.75 7.4665 0.75 6.5V2.5C0.75 1.5335 1.5335 0.75 2.5 0.75ZM13.5 0.75H17.5C18.4665 0.75 19.25 1.5335 19.25 2.5V6.5C19.25 7.4665 18.4665 8.25 17.5 8.25H13.5C12.5335 8.25 11.75 7.4665 11.75 6.5V2.5C11.75 1.5335 12.5335 0.75 13.5 0.75ZM13.5 11.75H17.5C18.4665 11.75 19.25 12.5335 19.25 13.5V17.5C19.25 18.4665 18.4665 19.25 17.5 19.25H13.5C12.5335 19.25 11.75 18.4665 11.75 17.5V13.5C11.75 12.5335 12.5335 11.75 13.5 11.75ZM2.5 11.75H6.5C7.4665 11.75 8.25 12.5335 8.25 13.5V17.5C8.25 18.4665 7.4665 19.25 6.5 19.25H2.5C1.5335 19.25 0.75 18.4665 0.75 17.5V13.5C0.75 12.5335 1.5335 11.75 2.5 11.75Z"
                  fill="currentColor"
                  fillOpacity="0.2"
                  stroke="currentColor"
                  stroke-width="1.5"
                ></path>
              </svg>
            </figure>

            <div>
              <div className="text-base text-neutral-900 font-semibold">
                {text}
              </div>
              <p className="text-xs text-neutral-600">{description}</p>
            </div>

            <figure className="transition duration-300 opacity-0 absolute right-8 group-hover/subMenu:opacity-100 group-hover/subMenu:translate-x-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 12 12"
                height="12"
                width="12"
                className="fill-neutral-600"
              >
                <path d="M11.7803 6.53033C12.0732 6.23744 12.0732 5.76257 11.7803 5.46967L7.18414 0.873479C6.89124 0.580585 6.41637 0.580585 6.12348 0.873478C5.83058 1.16637 5.83058 1.64125 6.12348 1.93414L9.43934 5.25H0.75C0.335787 5.25 0 5.58579 0 6C0 6.41422 0.335787 6.75 0.75 6.75H9.43934L6.12348 10.0659C5.83058 10.3588 5.83058 10.8336 6.12348 11.1265C6.41637 11.4194 6.89124 11.4194 7.18414 11.1265L11.7803 6.53033Z"></path>
              </svg>
            </figure>
          </Link>
        ))}
      </ul>
    </>
  )
}
