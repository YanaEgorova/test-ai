import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  authorName: string;
  authorRole: string;
  rating: number; // 1..5
  text: string;
  avatarUrl?: string;
  className?: string;
}

export function TestimonialCard({
  authorName,
  authorRole,
  rating,
  text,
  avatarUrl,
  className,
}: TestimonialCardProps) {
  return (
    <article
      // отступы 17px в макете → snap до p-4 (16px); скругление 12px → snap до rounded-lg (10px)
      className={cn(
        "bg-card text-card-foreground w-80 rounded-lg border p-4 shadow-sm",
        className
      )}
    >
      <header className="flex items-center gap-3">
        {avatarUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={avatarUrl}
            alt=""
            className="size-12 rounded-full object-cover"
          />
        ) : (
          <div className="bg-muted size-12 rounded-full" aria-hidden="true" />
        )}
        <div className="flex flex-col">
          <span className="text-base font-medium">{authorName}</span>
          <span className="text-muted-foreground text-sm">{authorRole}</span>
        </div>
      </header>

      <div
        className="mt-2 flex gap-1"
        role="img"
        aria-label={`Оценка ${rating} из 5`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < rating ? "fill-primary text-primary" : "text-muted-foreground"
            )}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* 15px — намеренное нестандартное значение по комментарию дизайнера в Figma ("intentional 15px") */}
      <p className="mt-6 text-[15px] italic">{text}</p>
    </article>
  );
}
