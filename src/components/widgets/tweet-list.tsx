import { Tweet } from "react-tweet";
import { motion } from "framer-motion";

import { tweetData } from "@/data/tweet-data";

export function TweetList() {
  if (!tweetData) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
      {tweetData.map(({ id }, index) => (
        <motion.div
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: index * 0.15 + 0.25 }}
        >
          <Tweet key={id} id={id} />
        </motion.div>
      ))}
    </div>
  );
}
