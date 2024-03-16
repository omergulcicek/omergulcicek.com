import Container from "@/shared/container";
import { NavMenu } from "@/widgets/nav-menu";

import { cn } from "@/utils";

export default function Header({
  className,
  ...props
}: {
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <header className={cn("flex h-24 w-full", className)} {...props}>
      <Container className="flex-row items-center justify-center gap-10">
        <NavMenu />
      </Container>
    </header>
  );
}
