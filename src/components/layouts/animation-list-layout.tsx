import Link from "next/link";
import { motion } from "framer-motion";

export function AnimationListLayout({ data }: { data: Array<any> }) {
  if (!data) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data?.map(
        (
          { img, title, description, url, isExternal = true, detail },
          index: number
        ) => (
          <motion.article
            initial={{ opacity: 0, translateY: "100px" }}
            animate={{ opacity: 1, translateY: "0px" }}
            transition={{ delay: index * 0.15 + 0.25 }}
          >
            <Link
              href={url}
              rel={isExternal ? "noopener noreferrer" : ""}
              target={isExternal ? "_blank" : "_self"}
              className="
              flex gap-10 items-center border rounded-2xl p-4 md:px-10 cursor-pointer transition select-none bg-white hover:bg-gray-50"
            >
              <figure>
                {img.slice(0, 4) === "http" ? (
                  <img src={img} alt={title} height={48} width={48} />
                ) : (
                  <figcaption className="text-4xl">{img}</figcaption>
                )}
              </figure>

              <div className="flex flex-col">
                <strong>{title}</strong>
                <span className="text-sm text-tertiary-foreground">
                  {description}
                </span>
              </div>

              {detail && (
                <span className="absolute -right-5 to-50% text-8xl text-gray-200 grayscale font-bold rotate-12 opacity-75">
                  {detail}
                </span>
              )}
            </Link>
          </motion.article>
        )
      )}
    </div>
  );
}
