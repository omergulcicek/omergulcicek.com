"use client";

import { motion } from "framer-motion";

import Container from "@/shared/container";
import Title from "@/ui/title";

import { cn } from "@/utils";

export const BookmarksLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Container className="mt-10 md:mt-24 max-w-2xl">{children}</Container>
    </>
  );
};

export const PageTitle = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, translateY: "100px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      className={cn(className)}
      {...props}
    >
      <Title tag="h2">{children}</Title>
    </motion.h2>
  );
};

export const PageSubTitle = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}) => {
  return (
    <motion.h2
      initial={{ opacity: 0, translateY: "100px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      className={cn(className)}
      {...props}
    >
      <Title tag="h3">{children}</Title>
    </motion.h2>
  );
};

export const PageContent = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  props?: React.HTMLProps<HTMLHeadingElement>;
}) => {
  return (
    <motion.section
      initial={{ opacity: 0, translateY: "100px" }}
      animate={{ opacity: 1, translateY: "0px" }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.section>
  );
};

BookmarksLayout.PageTitle = PageTitle;
BookmarksLayout.PageSubTitle = PageSubTitle;
BookmarksLayout.PageContent = PageContent;

export default BookmarksLayout;
