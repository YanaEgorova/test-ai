import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Шкала типографики проекта (Norion-Soft).
 *
 * Размеры берутся из дизайн-системы:
 *   display          48 → 72  (Hero-заголовок главной)
 *   h1               36 → 48  (заголовок страницы)
 *   h2               24 → 32  (заголовок секции, custom token h2-max)
 *   h3               18 → 22  (заголовок карточки, custom token h3-max)
 *   h4               18       (подзаголовок внутри карточки)
 *   lead             18       (лид-абзац, серый)
 *   body             16       (обычный текст)
 *   small            13 → 14  (подписи, custom token small-min)
 *   caption          12       (мелкая служебная подпись)
 *   overline         11       (заглавная мелкая надпись с разрядкой)
 *
 * Респонсив (через md: breakpoint) применяется только к display/h1/h2/h3/small.
 * Остальное одинаково на всех экранах.
 */
const typographyVariants = cva("", {
  variants: {
    variant: {
      display:
        "text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl",
      h1: "text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl",
      h2: "text-balance text-2xl font-semibold leading-tight tracking-tight md:text-h2-max",
      h3: "text-lg font-semibold leading-snug md:text-h3-max",
      h4: "text-lg font-semibold leading-snug",
      lead: "text-muted-foreground text-lg leading-relaxed",
      body: "text-base leading-relaxed",
      small: "text-small-min leading-normal md:text-sm",
      caption: "text-muted-foreground text-xs leading-normal",
      overline:
        "text-muted-foreground text-overline font-medium uppercase tracking-wider",
    },
  },
  defaultVariants: {
    variant: "body",
  },
});

type TypographyVariant = NonNullable<
  VariantProps<typeof typographyVariants>["variant"]
>;

// Семантические дефолты: при `variant="h2"` рендерится <h2>, при `variant="body"` — <p>.
// Можно переопределить через пропс `as`.
const defaultElement: Record<TypographyVariant, React.ElementType> = {
  display: "h1",
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  lead: "p",
  body: "p",
  small: "p",
  caption: "p",
  overline: "p",
};

interface TypographyProps
  extends
    Omit<React.HTMLAttributes<HTMLElement>, "color">,
    VariantProps<typeof typographyVariants> {
  /**
   * HTML-элемент, в который рендерится Typography.
   * По умолчанию подбирается по variant'у (h1/h2/p/...).
   * Используй для случаев когда визуальный размер не совпадает с семантикой —
   * например, h2-стиль на `<h3>` теге.
   */
  as?: React.ElementType;
}

export function Typography({
  className,
  variant,
  as,
  ...props
}: TypographyProps) {
  const resolvedVariant: TypographyVariant = variant ?? "body";
  const Comp = as ?? defaultElement[resolvedVariant];
  return (
    <Comp
      className={cn(
        typographyVariants({ variant: resolvedVariant }),
        className
      )}
      {...props}
    />
  );
}

export { typographyVariants };
