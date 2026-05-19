import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "default" | "lg";
}

export function Container({
  size = "default",
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        size === "sm" && "max-w-3xl",
        size === "default" && "max-w-6xl",
        size === "lg" && "max-w-7xl",
        className
      )}
      {...props}
    />
  );
}
