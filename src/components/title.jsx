import { cn } from "lib/utils"

export default function Title({ className, children }) {
  return (
    <>
      <div
        className={cn(
          "text-3xl md:text-5xl font-bold tracking-wide my-5 text-neutral-600  dark:text-neutral-100 md:mb-8 md:tracking-tight",
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
