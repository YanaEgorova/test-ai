import {
  Lock,
  Timer,
  FileCheck,
  Phone,
  Video,
  Wallet,
  MessageSquare,
  Blocks,
} from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { Typography } from "@/components/common/typography";

const features = [
  {
    icon: Lock,
    title: "E2E Encrypted Chat",
    description:
      "Every message is encrypted with key-pair cryptography. Only you and your recipient can read the conversation.",
  },
  {
    icon: Timer,
    title: "Self-Destruct Messages",
    description:
      "Messages auto-delete after a set time. Keep your conversations private, even on shared devices.",
  },
  {
    icon: FileCheck,
    title: "Encrypted File Transfer",
    description:
      "Share documents, images, and files with full end-to-end encryption. No unencrypted copies stored on servers.",
  },
  {
    icon: Phone,
    title: "P2P Voice & Video Calls",
    description:
      "Crystal-clear peer-to-peer calls with no intermediary servers. Your conversations stay between you and the other party.",
  },
  {
    icon: Video,
    title: "Free Video Conferencing",
    description:
      "Host encrypted group video meetings with no time limits. Perfect for teams that value privacy.",
  },
  {
    icon: Wallet,
    title: "Non-Custodial Blockchain Tools",
    description:
      "Integrated non-custodial wallet functionality lets users manage their own keys and interact with blockchain networks directly — no intermediaries.",
  },
];

export function ExtrasafeSection() {
  return (
    <Section id="products" spacing="loose" className="bg-background">
      <Container>
        {/* Top: badge + heading + description + buttons + app card */}
        <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:gap-16">
          {/* Left content */}
          <div className="flex flex-1 flex-col gap-6">
            {/* Badge */}
            <div className="border-border flex w-fit items-center gap-2 rounded-full border px-3 py-1">
              <span className="text-xs">🏳️</span>
              <span className="text-muted-foreground text-xs font-medium">
                Flagship Product
              </span>
            </div>

            {/* Title */}
            <Typography
              variant="h1"
              as="h2"
              className="text-4xl font-bold md:text-5xl"
            >
              <span className="text-foreground">EXTRA</span>
              <span className="from-violet-60 to-violet-40 bg-gradient-to-r bg-clip-text text-transparent">
                SAFE
              </span>
            </Typography>

            {/* Description */}
            <div className="flex flex-col gap-3">
              <Typography variant="body" className="text-muted-foreground">
                A secure communication platform with integrated privacy
                technologies. EXTRASAFE combines end-to-end encrypted messaging
                with non-custodial blockchain software tools — all in one
                privacy-first app.
              </Typography>
              <Typography variant="body" className="text-muted-foreground">
                Every interaction is protected by end-to-end encryption. No
                backdoors, no compromises, no data collection. Norionsoft does
                not custody user assets and does not provide regulated financial
                services.
              </Typography>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://apps.apple.com/us/app/extra-safe-encrypted-chat/id6745936574"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.extrasafe.chat.app&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
              >
                <svg className="size-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.28.15.59.19.9.12l12.39-12.37-2.73-2.73zm16.52-10.35-3.23-1.83-3.07 3.07 3.07 3.07 3.25-1.84a1.42 1.42 0 0 0 0-2.47zM2.08 1.19A1.4 1.4 0 0 0 1.75 2.2v19.6a1.42 1.42 0 0 0 .33 1.01l.06.06 10.99-11v-.27zm9.64 10.4L2.14 1.11l-.06.08 12.65 7.18z" />
                </svg>
                Google Play
              </a>
              <a
                href="https://extrasafe.chat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
              >
                Visit Website
              </a>
            </div>
          </div>

          {/* Right: App card mockup */}
          <div className="relative flex w-full flex-shrink-0 items-center justify-center lg:w-80">
            <div className="bg-violet-10 pointer-events-none absolute inset-0 rounded-3xl blur-3xl" />
            <div className="border-border bg-background relative z-10 w-64 rounded-2xl border p-6 shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="bg-primary flex size-14 items-center justify-center rounded-2xl">
                  <MessageSquare className="text-primary-foreground size-7" />
                </div>
              </div>
              <Typography variant="h4" as="h3" className="mb-1 text-center">
                EXTRASAFE
              </Typography>
              <Typography variant="caption" className="mb-5 text-center">
                Encrypted Messaging • Privacy Tools • Video Calls
              </Typography>
              <div className="flex justify-around">
                {[
                  { icon: Lock, label: "E2E Chat" },
                  { icon: Blocks, label: "Blockchain" },
                  { icon: Video, label: "Video Call" },
                ].map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1">
                    <div className="bg-violet-10 flex size-10 items-center justify-center rounded-xl">
                      <Icon className="text-violet-60 size-5" />
                    </div>
                    <span className="text-muted-foreground text-xs">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Feature cards grid */}
        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="border-border bg-background rounded-2xl border p-6 shadow-sm"
            >
              <div className="bg-violet-10 mb-4 flex size-10 items-center justify-center rounded-xl">
                <Icon className="text-violet-60 size-5" />
              </div>
              <Typography variant="h4" as="h3" className="mb-2">
                {title}
              </Typography>
              <Typography variant="body" className="text-muted-foreground">
                {description}
              </Typography>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
