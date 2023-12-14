"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "100px" }}
        animate={{ opacity: 1, translateY: "0px" }}
      >
        <div className="flex flex-col items-center justify-center gap-4 p-4 md:p-16 h-80 md:min-h-[600px] bg-teal-100 rounded-2xl">
          <motion.p
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-4xl font-semibold"
          >
            Ömer Gülçiçek
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: 0.35 }}
            className="text-4xl md:text-7xl md:!leading-[80px] font-bold text-center title"
          >
            Senior <span>Frontend</span> Developer
          </motion.h1>
        </div>
      </motion.div>
    </>
  )
}
