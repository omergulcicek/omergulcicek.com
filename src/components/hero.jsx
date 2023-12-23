import { motion } from "framer-motion"

import Box from "components/box"

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "100px" }}
        animate={{ opacity: 1, translateY: "0px" }}
      >
        <Box className="container flex flex-col items-center justify-center gap-4 p-4 md:p-12 h-80 md:h-[640px] bg-blue-50 border-blue-100 dark:bg-neutral-900 dark:border-black">
          <motion.strong
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: 0.2 }}
            className="text-neutral-950 dark:text-neutral-100 text-lg md:text-4xl font-semibold"
          >
            Ömer Gülçiçek
          </motion.strong>
          <motion.h1
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: 0.35 }}
            className="text-neutral-950 dark:text-neutral-100 text-4xl md:text-7xl font-bold text-center frontend"
          >
            Senior <span className="relative">Frontend</span> Developer
          </motion.h1>
        </Box>
      </motion.div>
    </>
  )
}
