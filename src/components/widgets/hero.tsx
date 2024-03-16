import React from "react";
import { cn } from "@/utils";
import heroData from "@/data/heroData";

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
    <span
      className={cn("text-2xl font-light leading-7 text-black/55", className)}
      {...props}
    >
      {hi}
    </span>
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
    <h1
      className={cn("text-[40px] font-semibold leading-[48px]", className)}
      {...props}
    >
      {name}
    </h1>
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
    <strong className={cn("font-semibold underline", className)} {...props}>
      {strong}
    </strong>
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
    <span className={cn("font-light", className)} {...props}>
      {desc}
    </span>
  );
};

Hero.Hello = Hello;
Hero.Name = Name;
Hero.Strong = Strong;
Hero.Desc = Desc;

export default Hero;
