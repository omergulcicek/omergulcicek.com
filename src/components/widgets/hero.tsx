import React from "react";
import { motion } from "framer-motion";

import { cn } from "@/utils";

import heroData from "@/data/hero-data";

export const Hero = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export const Hello = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}) => {
  const { hi } = heroData;

  return (
    <motion.span
      initial={{ opacity: 0, translateY: "100px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      className={cn(
        "block text-2xl font-light leading-7 text-secondary-foreground",
        className
      )}
      {...props}
    >
      {hi}
    </motion.span>
  );
};

export const Name = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}) => {
  const { name } = heroData;

  return (
    <motion.h1
      initial={{ opacity: 0, translateY: "100px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      className={cn("text-[40px] font-semibold leading-[48px]", className)}
      {...props}
    >
      {name}
    </motion.h1>
  );
};

export const Strong = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}) => {
  const { strong } = heroData;

  return (
    <motion.strong
      initial={{ opacity: 0, translateX: "-100px" }}
      animate={{ opacity: 1, translateX: "0px" }}
      transition={{ delay: 0.5 }}
      className={cn("font-semibold underline", className)}
      {...props}
    >
      {strong}
    </motion.strong>
  );
};

export const Desc = ({
  className,
  ...props
}: {
  className?: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}) => {
  const { desc } = heroData;

  return (
    <motion.span
      initial={{ opacity: 0, translateX: "100px" }}
      animate={{ opacity: 1, translateX: "0px" }}
      transition={{ delay: 0.5 }}
      className={cn("font-light", className)}
      {...props}
    >
      {desc}
    </motion.span>
  );
};

Hero.Hello = Hello;
Hero.Name = Name;
Hero.Strong = Strong;
Hero.Desc = Desc;

export default Hero;
