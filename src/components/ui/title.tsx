import Balancer from "react-wrap-balancer";

import { cn } from "@/utils";
import { TitleProps } from "@/types";

export default function Title({
  tag: Tag = "h1",
  children,
  className,
  ...props
}: TitleProps) {
  const tagClassNames: { [key: string]: string } = {
    h1: "text-8xl font-extrabold leading-none",
    h2: "text-6xl font-bold leading-none",
    h3: "text-3xl font-bold leading-none",
    h4: "text-lg font-medium leading-none",
  };

  const classes = cn(tagClassNames[Tag], className);

  return (
    <Balancer>
      <Tag className={classes} {...props}>
        {children}
      </Tag>
    </Balancer>
  );
}
