import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "tight" | "default" | "loose";
  as?: React.ElementType;
}

export function Section({
  spacing = "default",
  as: Comp = "section",
  className,
  ...props
}: SectionProps) {
  return (
    <Comp
      className={cn(
        spacing === "tight" && "py-8 md:py-12",
        spacing === "default" && "py-16 md:py-24",
        spacing === "loose" && "py-24 md:py-32",
        className
      )}
      {...props}
    />
  );
}
