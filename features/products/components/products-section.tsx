import { ExternalLink, Wallet, QrCode, CreditCard } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Typography } from "@/components/common/typography";

const products = [
  {
    icon: Wallet,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    borderColor: "bg-gradient-to-r from-amber-400 to-orange-400",
    title: "EXTRAWALLET",
    subtitle: "Non-Custodial Blockchain Software Tool",
    description:
      "A multichain non-custodial key management tool supporting 21+ EVM networks, Bitcoin, and Solana. Features isolated signing architecture, air-gapped mode, and encrypted QR code backups. Users retain full control of their own keys.",
    features: [
      "Multichain support (21+ networks)",
      "Air-gapped signing mode",
      "Non-custodial key management",
      "Encrypted QR backup",
    ],
    bulletColor: "bg-amber-400",
    linkLabel: "Visit EXTRAWALLET",
    href: "https://extrawallet.app",
  },
  {
    icon: QrCode,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    borderColor: "bg-gradient-to-r from-teal-400 to-green-400",
    title: "text2qr",
    subtitle: "Text to QR Code Generator",
    description:
      "A fast, minimal utility to convert any text, URL, or data into scannable QR codes. Perfect for marketing, sharing information, and creating quick digital links.",
    features: [
      "Instant QR generation",
      "Custom styling options",
      "High-resolution export",
      "Batch processing",
    ],
    bulletColor: "bg-teal-400",
    linkLabel: "Visit text2qr",
    href: "https://text2qr.app",
  },
  {
    icon: CreditCard,
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    borderColor: "bg-gradient-to-r from-blue-400 to-cyan-400",
    title: "wallet2qr",
    subtitle: "Blockchain Key Backup via QR Code",
    description:
      "Securely encode blockchain key data into encrypted QR codes for safe offline storage and easy backups. A privacy tool for users who manage their own keys.",
    features: [
      "Encrypted key backup",
      "Offline QR generation",
      "Multi-key support",
      "Secure sharing",
    ],
    bulletColor: "bg-blue-400",
    linkLabel: "Visit wallet2qr",
    href: "https://wallet2qr.com",
  },
];

export function ProductsSection() {
  return (
    <Section spacing="loose" className="bg-background">
      <Container>
        {/* Heading */}
        <div className="mb-12 text-center">
          <Typography variant="h1" as="h2" className="mb-3">
            More Products
          </Typography>
          <Typography variant="lead">
            Privacy technologies and non-custodial blockchain software tools
          </Typography>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="border-border bg-background flex flex-col overflow-hidden rounded-2xl border shadow-sm"
              >
                {/* Colored top border */}
                <div className={`h-1 w-full ${product.borderColor}`} />

                <div className="flex flex-1 flex-col gap-4 p-6">
                  {/* Icon */}
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl ${product.iconBg}`}
                  >
                    <Icon className={`size-6 ${product.iconColor}`} />
                  </div>

                  {/* Title */}
                  <div>
                    <Typography variant="h3" as="h3" className="font-bold">
                      {product.title}
                    </Typography>
                    <Typography
                      variant="small"
                      className="text-muted-foreground"
                    >
                      {product.subtitle}
                    </Typography>
                  </div>

                  {/* Description */}
                  <Typography variant="body" className="text-muted-foreground">
                    {product.description}
                  </Typography>

                  {/* Feature list */}
                  <ul className="flex flex-col gap-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span
                          className={`size-2 flex-shrink-0 rounded-full ${product.bulletColor}`}
                        />
                        <Typography
                          variant="small"
                          className="text-muted-foreground"
                        >
                          {feature}
                        </Typography>
                      </li>
                    ))}
                  </ul>

                  {/* Link */}
                  <div className="mt-auto pt-2">
                    <a
                      href={product.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                    >
                      {product.linkLabel}
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
