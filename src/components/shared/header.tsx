import Link from "next/link";

import { cn } from "@/utils";
import Container from "./container";
import Brand from "@/ui/brand";

export default function Header({
  className,
  ...props
}: {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={cn("flex h-24 w-full", className)} {...props}>
      <Container className="flex-row items-center justify-between">
        <Brand />

        <nav>
          <Link href="/about">About</Link>
        </nav>
      </Container>
    </header>
  );
}
