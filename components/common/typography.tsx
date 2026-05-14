import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Шкала типографики проекта.
 *
 * Респонсивные уровни (отличаются на мобильном и десктопе):
 *   - display — Hero-заголовок главной (48 → 72)
 *   - h1      — заголовок страницы (36 → 48)
 *   - h2      — заголовок секции (24 → 30)
 *
 * Одинаковые на всех экранах:
 *   - h3      — заголовок карточки (20)
 *   - h4      — подзаголовок внутри карточки (18)
 *   - lead    — лид-абзац, подзаголовок (18, серый)
 *   - body    — обычный текст (16)
 *   - small   — подписи, метаданные (14)
 *   - caption — мелкие подписи (12, серый)
 */
const typographyVariants = cva("", {
  variants: {
    variant: {
      display:
        "text-balance text-5xl font-bold leading-tight tracking-tight md:text-7xl",
      h1: "text-balance text-4xl font-bold leading-tight tracking-tight md:text-5xl",
      h2: "text-balance text-2xl font-semibold leading-tight tracking-tight md:text-3xl",
      h3: "text-xl font-semibold leading-snug",
      h4: "text-lg font-semibold leading-snug",
      lead: "text-muted-foreground text-lg leading-relaxed",
      body: "text-base leading-relaxed",
      small: "text-sm leading-normal",
      caption: "text-muted-foreground text-xs leading-normal",
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
