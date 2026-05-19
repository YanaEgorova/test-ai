import { ExternalLink } from "lucide-react";
import Link from "next/link";

import { Typography } from "@/components/common/typography";

const products = [
  { label: "EXTRASAFE", href: "https://extrasafe.chat" },
  { label: "EXTRAWALLET", href: "https://extrawallet.app" },
  { label: "text2qr", href: "https://text2qr.app" },
  { label: "wallet2qr", href: "https://wallet2qr.com" },
];

const company = [
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-border bg-background border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg text-sm font-bold">
                N
              </span>
              <span className="text-foreground font-semibold">Norionsoft</span>
            </Link>
            <Typography variant="small" className="text-muted-foreground">
              Norionsoft OÜ develops secure communication software, privacy
              technologies, and non-custodial blockchain software tools. Based
              in Estonia.
            </Typography>
          </div>

          {/* Products */}
          <div>
            <Typography variant="overline" className="mb-4 block">
              Products
            </Typography>
            <ul className="flex flex-col gap-2">
              {products.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 text-sm transition-colors"
                  >
                    {label}
                    <ExternalLink className="size-3" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <Typography variant="overline" className="mb-4 block">
              Company
            </Typography>
            <ul className="flex flex-col gap-2">
              {company.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <Typography variant="overline" className="mb-4 block">
              Contact
            </Typography>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  href="mailto:info@norionsoft.io"
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  info@norionsoft.io
                </a>
              </li>
              <li>
                <Typography variant="small" className="text-muted-foreground">
                  Tallinn, Estonia
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-border mt-12 border-t pt-6">
          <Typography variant="caption" className="text-center">
            © 2026 Norionsoft OÜ. All rights reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
