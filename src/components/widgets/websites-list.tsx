import Link from "next/link";
import { motion } from "framer-motion";

import { webSitesData } from "@/data/webSitesData";

export function WebSitesList() {
  if (!webSitesData) return null;

  return (
    <div className="flex flex-col gap-4">
      {webSitesData.map(({ img, title, url }, index) => (
        <motion.article
          initial={{ opacity: 0, translateY: "100px" }}
          animate={{ opacity: 1, translateY: "0px" }}
          transition={{ delay: index * 0.15 + 0.25 }}
        >
          <Link
            href={url}
            rel="noopener noreferrer"
            target="_blank"
            className="
              flex gap-10 items-center border rounded-2xl p-4 cursor-pointer transition bg-white hover:bg-gray-50"
          >
            <figure>
              <img src={url} alt={title} height={48} width={48} />
            </figure>

            <div className="flex flex-col">
              <strong>{title}</strong>
              <span className="text-sm text-tertiary-foreground">{url}</span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
