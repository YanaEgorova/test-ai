# features/

Каждая фича — самодостаточный модуль: компоненты, хуки, типы, серверные действия и т.д.

## Структура одной фичи

```
features/<name>/
  components/   — компоненты, специфичные только для этой фичи
  hooks/        — хуки только для этой фичи (опционально)
  types.ts      — типы фичи (опционально)
  actions.ts    — server actions (опционально)
```

## Что сюда класть

- LoginForm → `features/auth/components/login-form.tsx`
- CheckoutSummary → `features/checkout/components/checkout-summary.tsx`
- DashboardWidget → `features/dashboard/components/dashboard-widget.tsx`

## Правила

- Компонент из `features/auth/` НЕ должен импортировать из `features/checkout/`. Если такая зависимость нужна — компонент общий, его место в `components/common/`.
- Можно (и нужно) импортировать из `@/components/ui/*` и `@/components/common/*`.
- Один компонент = один файл, kebab-case.
- Серверные компоненты — по умолчанию; `"use client"` только когда нужны хуки, события или клиентские API.
