import { cn } from "lib/utils"

export default function Subtitle({ className, children }) {
  return (
    <>
      <div
        className={cn(
          "text-2xl font-bold text-neutral-900  dark:text-neutral-100 mb-4 mt-11",
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
