# components/common

Переиспользуемые компоненты (molecules/organisms), собранные из примитивов `@/components/ui/*`.

## Что сюда класть

- Используется на 2+ страницах или внутри 2+ фич
- Не привязан к одной бизнес-сущности (Header, Footer, FormField, PageSection, EmptyState, LoadingSpinner)
- Может зависеть от `components/ui/*`, но НЕ от `features/*`

## Что НЕ сюда

- Если компонент используется только в одной фиче → `features/<name>/components/`
- Если это базовый примитив (Button, Input, Card) → не пересоздавай, используй `components/ui/*`

## Конвенция

- Файлы в kebab-case: `form-field.tsx`, `page-section.tsx`
- Один компонент = один файл (исключение — связанные мини-компоненты типа Card/CardHeader/CardTitle)
- Экспорт именованный (`export function FormField`)
- Все интерактивные компоненты с состоянием — `"use client"` в первой строке
