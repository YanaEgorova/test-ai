import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Вертикальные отступы для смысловых секций страницы (Hero, Features, CTA, Footer и т.п.).
 * Не задаёт горизонтальные отступы — обычно используется вместе с <Container>.
 *
 * Spacing:
 *   - tight   — py-8  → py-12  (короткие блоки: разделители, мини-CTA)
 *   - default — py-16 → py-24  (обычная секция)
 *   - loose   — py-24 → py-32  (Hero, крупные акцентные блоки)
 */
const sectionVariants = cva("", {
  variants: {
    spacing: {
      tight: "py-8 md:py-12",
      default: "py-16 md:py-24",
      loose: "py-24 md:py-32",
    },
  },
  defaultVariants: {
    spacing: "default",
  },
});

interface SectionProps
  extends
    React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export function Section({ className, spacing, ...props }: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ spacing }), className)}
      {...props}
    />
  );
}

export { sectionVariants };
