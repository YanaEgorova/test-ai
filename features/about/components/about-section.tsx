import { ShieldCheck, Globe, Code2, Users } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Typography } from "@/components/common/typography";

const stats = [
  {
    icon: ShieldCheck,
    value: "100%",
    label: "Privacy First",
  },
  {
    icon: Globe,
    value: "EU",
    label: "Based in Estonia",
  },
  {
    icon: Code2,
    value: "4+",
    label: "Products Shipped",
  },
  {
    icon: Users,
    value: "Global",
    label: "Growing User Base",
  },
];

export function AboutSection() {
  return (
    <Section id="about" spacing="loose" className="bg-background">
      <Container>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left: text */}
          <div className="flex flex-1 flex-col gap-4">
            <Typography variant="h1" as="h2">
              About{" "}
              <span className="from-violet-60 to-violet-40 bg-gradient-to-r bg-clip-text text-transparent">
                Norionsoft
              </span>
            </Typography>
            <Typography variant="body" className="text-muted-foreground">
              Norionsoft OÜ is a software development company based in Estonia,
              at the heart of Europe&apos;s most advanced digital society.
            </Typography>
            <Typography variant="body" className="text-muted-foreground">
              Norionsoft develops secure communication software, privacy
              technologies, and non-custodial blockchain software tools. The
              company does not custody customer assets and does not provide
              regulated financial services.
            </Typography>
            <Typography variant="body" className="text-muted-foreground">
              Every product we build is grounded in the principles of end-to-end
              encryption, zero-knowledge architecture, and user sovereignty.
            </Typography>
          </div>

          {/* Right: stats grid */}
          <div className="grid w-full grid-cols-2 gap-4 lg:w-auto lg:min-w-[480px]">
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="border-border bg-background flex flex-col items-center gap-2 rounded-2xl border p-6 shadow-sm"
              >
                <Icon className="size-6 text-violet-50" />
                <span className="text-foreground text-2xl font-bold">
                  {value}
                </span>
                <Typography
                  variant="small"
                  className="text-muted-foreground text-center"
                >
                  {label}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
