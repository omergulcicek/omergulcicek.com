import { cn } from "@/utils";

export default function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto flex w-full max-w-7xl flex-col", className)}
      {...props}
    >
      {children}
    </div>
  );
}
