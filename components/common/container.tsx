import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Ограничитель ширины контента + responsive горизонтальные отступы.
 *
 * Размеры:
 *   - sm      — 768px,  для текстовых страниц (article, blog post)
 *   - default — 1152px, типовой landing-контент
 *   - lg      — 1280px, широкие лейауты (dashboards, hero-секции)
 */
const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  variants: {
    size: {
      sm: "max-w-3xl",
      default: "max-w-6xl",
      lg: "max-w-7xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface ContainerProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {}

export function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size }), className)} {...props} />
  );
}

export { containerVariants };
