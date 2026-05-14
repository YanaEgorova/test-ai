import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { TestimonialCard } from "@/components/common/testimonial-card";
import { Typography } from "@/components/common/typography";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <Section spacing="loose">
        <Container>
          <Typography variant="display" className="max-w-4xl">
            Сетка и типографика готовы к работе
          </Typography>
          <Typography variant="lead" className="mt-6 max-w-2xl">
            Это демонстрационная главная — показывает что Container, Section и
            Typography работают вместе. Заголовок выше — `display`, подзаголовок
            — `lead`, кнопки ниже — ровно те же что были.
          </Typography>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button size="lg">Попробовать</Button>
            <Button variant="outline" size="lg">
              Узнать больше
            </Button>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <Typography variant="h2">Уровни заголовков</Typography>
          <Typography variant="lead" className="mt-2">
            display / h1 / h2 — респонсивные. Остальное одинаково на мобильном и
            десктопе.
          </Typography>
          <div className="mt-10 space-y-6">
            <Typography variant="h1">h1 — заголовок страницы</Typography>
            <Typography variant="h2">h2 — заголовок секции</Typography>
            <Typography variant="h3">h3 — заголовок карточки</Typography>
            <Typography variant="h4">h4 — подзаголовок</Typography>
            <Typography variant="body">
              body — обычный текст параграфа, который читается комфортно вне
              зависимости от размера экрана. Используется по умолчанию.
            </Typography>
            <Typography variant="small">
              small — мелкий вспомогательный текст (метаданные, подписи).
            </Typography>
            <Typography variant="caption">
              caption — самый мелкий текст (fine print, юридические оговорки).
            </Typography>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="sm">
          <Typography variant="h2">Пример карточки</Typography>
          <Typography variant="lead" className="mt-2">
            Контейнер size=&quot;sm&quot; ограничивает ширину до 768px — удобно
            для текстовых страниц.
          </Typography>
          <div className="mt-8">
            <TestimonialCard
              authorName="Анна Смирнова"
              authorRole="Product Designer"
              rating={5}
              text="Отличный продукт, пользуюсь каждый день. Рекомендую всем коллегам."
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
