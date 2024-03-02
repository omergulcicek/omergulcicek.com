import { cn } from "@/utils/cn"
import Link from "next/link"

import { ContactModal } from "@/widgets/contact-modal"

const NavigationItem = (props) => {
  const { url, isActive, text, icon, modal, children, ...others } = props

  if (modal) {
    return <ContactModal {...props} />
  }

  return (
    <>
      <Link
        href={url}
        className={cn(
          "group flex h-9 w-full select-none items-center justify-between rounded-lg border border-transparent p-2 text-sm",
          isActive && "pointer-events-none border-gray-100 bg-white shadow",
          !isActive && "transition duration-75 active:scale-95"
        )}
        {...others}
      >
        {icon && text && (
          <span className="flex gap-2">
            {icon}
            <span className="group-hover:underline">{text}</span>
          </span>
        )}

        {children}
      </Link>
    </>
  )
}

export { NavigationItem }
