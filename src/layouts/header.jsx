import { useState, useEffect } from "react"
import { motion } from "framer-motion"

import Navigation from "components/navigation"

export default function Header() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <>
      <motion.header
        initial={{ opacity: 0, translateY: "-40px" }}
        animate={{ opacity: 1, translateY: "0px" }}
        transition={{ delay: 0.5 }}
        className="w-full border-b dark:border-b-neutral-800 z-40"
      >
        <div className="container">
          <nav>
            <Navigation />
          </nav>
        </div>
      </motion.header>
    </>
  )
}
