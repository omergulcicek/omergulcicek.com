import { cn } from "lib/utils"

export default function Box({ className, children }) {
  return (
    <>
      <div
        className={cn(
          " bg-neutral-50 border border-neutral-200 rounded-3xl p-10",
          className
        )}
      >
        {children}
      </div>
    </>
  )
}
