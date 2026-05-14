# components/ui

shadcn/ui примитивы. Эти файлы — копии из официального реестра shadcn.

## Правила

- **Не модифицировать вручную для одноразовых нужд.** Если нужен другой вариант — добавь новый `variant` в существующий CVA или сделай отдельный компонент в `common/`.
- Дизайнер НЕ создаёт здесь файлы — он использует то, что уже есть.
- Добавить новый shadcn-компонент: `npx shadcn@latest add <name>` (например, `dialog`, `dropdown-menu`, `sheet`, `select`).
- Темизация — через CSS-переменные в `app/globals.css`, а не правкой компонентов.

## Что уже подключено

- `button.tsx` — Button (variants: default, destructive, outline, secondary, ghost, link; sizes: default, sm, lg, icon)
- `input.tsx` — Input
- `label.tsx` — Label
- `card.tsx` — Card / CardHeader / CardTitle / CardDescription / CardContent / CardFooter

Полный список доступных компонентов: https://ui.shadcn.com/docs/components
