import { motion } from "framer-motion"
import { Tweet } from "react-tweet"

export default function Tweets() {
  return (
    <>
      <div className="container px-4">
        <h1 className="text-3xl font-bold underline">Tweets</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {new Array(6).fill({}).map((e, i) => (
            <motion.div
              initial={{ opacity: 0, translateY: "100px" }}
              animate={{ opacity: 1, translateY: "0px" }}
              transition={{ delay: (i + 1) / 10 }}
            >
              <Tweet id="1717596665690091542" />
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}
