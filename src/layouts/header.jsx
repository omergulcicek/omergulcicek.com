import { useState, useEffect } from "react"

import Navigation from "components/navigation"

export default function Header() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <>
      <header className="w-full border-b dark:border-b-neutral-800 z-40">
        <div className="container">
          <nav>
            <Navigation />
          </nav>
        </div>
      </header>
    </>
  )
}
