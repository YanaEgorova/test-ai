import Link from "next/link";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Container } from "@/components/common/container";
import { Typography } from "@/components/common/typography";

export function HeroSection() {
  return (
    <section className="bg-background relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Centered purple glow */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[600px] w-[600px] rounded-full bg-violet-50 opacity-10 blur-3xl" />
      </div>

      <Container
        size="default"
        className="relative z-10 flex flex-col items-center gap-6 text-center"
      >
        {/* Badge */}
        <div className="border-border bg-background flex items-center gap-2 rounded-full border px-4 py-1.5 shadow-sm">
          <span className="bg-teal-60 size-2 rounded-full" />
          <span className="text-muted-foreground text-sm">
            Software Development Company • Estonia
          </span>
        </div>

        {/* Heading */}
        <div className="flex flex-col items-center gap-1">
          <Typography variant="display" className="text-foreground">
            Building the Future of
          </Typography>
          <Typography variant="display" className="text-violet-50">
            Secure Digital Products
          </Typography>
        </div>

        {/* Description */}
        <Typography variant="lead" className="text-muted-foreground max-w-md">
          We develop secure communication software, privacy technologies, and
          non-custodial blockchain software tools.
        </Typography>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-violet-60 rounded-full px-8"
          >
            <Link href="#products">Explore Products</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8"
          >
            <Link href="#about">Learn More</Link>
          </Button>
        </div>
      </Container>

      {/* Down arrow */}
      <Link
        href="#products"
        aria-label="Scroll to products"
        className="text-muted-foreground hover:text-foreground absolute bottom-8 left-1/2 -translate-x-1/2 transition-colors"
      >
        <ArrowDown className="size-5" />
      </Link>
    </section>
  );
}
