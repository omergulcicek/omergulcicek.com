"use client";

import { motion } from "framer-motion";

import Container from "@/shared/container";
import { NavMenu } from "@/widgets/nav-menu";

import { cn } from "@/utils";

export default function Header({
  className,
}: {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <motion.header
      initial={{ opacity: 0, translateY: "-40px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      transition={{ delay: 1 }}
      className={cn("flex h-24 w-full", className)}
    >
      <Container className="flex-row items-center justify-center gap-10">
        <NavMenu />
      </Container>
    </motion.header>
  );
}
