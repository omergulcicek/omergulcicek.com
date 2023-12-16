import { motion } from "framer-motion"

export default function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, translateY: "100px" }}
        animate={{ opacity: 1, translateY: "0px" }}
        className="container flex flex-col items-center justify-center gap-4 p-4 md:p-12 h-[640px] max-w-6xl rounded-3xl bg-blue-50"
      >
        <motion.strong
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-4xl font-semibold"
        >
          Ömer Gülçiçek
        </motion.strong>
        <motion.h1
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: 0.35 }}
          className="text-4xl md:text-7xl font-bold"
        >
          Senior Frontend Developer
        </motion.h1>
      </motion.div>
    </>
  )
}
