"use client";

import Container from "@/shared/container";
import { NavMenu } from "@/widgets/nav-menu";

import { cn } from "@/utils";

export default function Header({
  className,
}: {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={cn("flex h-24 w-full z-20", className)}>
      <Container className="flex-row items-center justify-center gap-10 z-20">
        <NavMenu />
      </Container>
    </header>
  );
}
