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
                <svg className="size-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M9.56199 2.7807C10.1184 2.00462 10.3926 1.00711 10.3262 0C9.47607 0.103736 8.6908 0.57578 8.12685 1.32208C7.85112 1.68666 7.63993 2.11081 7.50537 2.57028C7.37082 3.02974 7.31552 3.51552 7.34265 3.99983C7.76786 4.00491 8.18851 3.89784 8.57294 3.68666C8.95737 3.47549 9.29554 3.16572 9.56199 2.7807Z"
                    fill="currentColor"
                  />
                  <path
                    d="M13.0291 8.59547C13.0376 7.9893 13.2128 7.39495 13.5384 6.86773C13.864 6.3405 14.3294 5.89754 14.8913 5.58004C14.5343 5.11149 14.0634 4.7259 13.5159 4.45388C12.9684 4.18186 12.3595 4.03091 11.7374 4.01302C10.4104 3.88502 9.12398 4.74278 8.44778 4.74278C7.7585 4.74278 6.71738 4.02573 5.59627 4.04693C4.8711 4.06846 4.16437 4.26227 3.54493 4.60946C2.9255 4.95665 2.41448 5.44538 2.06167 6.02805C0.533383 8.45984 1.67335 12.0338 3.13732 13.9994C3.86978 14.962 4.72581 16.0371 5.84591 15.999C6.94199 15.9572 7.35136 15.3567 8.67443 15.3567C9.98521 15.3567 10.3693 15.999 11.5121 15.9748C12.6883 15.9572 13.4293 15.008 14.1361 14.0363C14.6623 13.3505 15.0673 12.5925 15.3359 11.7904C14.6526 11.5248 14.0695 11.0802 13.6593 10.512C13.2491 9.94388 13.0299 9.27733 13.0291 8.59547V8.59547Z"
                    fill="currentColor"
                  />
                </svg>
                App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.extrasafe.chat.app&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-80"
              >
                <svg className="size-4" viewBox="0 0 16 17" fill="none">
                  <path
                    d="M0.382827 16.2118C0.127597 16.0852 0 15.7686 0 15.4519C0 15.3886 0 15.2619 0 15.1986C0 10.5125 0 5.8263 0 1.20347C0 0.950165 0.0637984 0.76021 0.127597 0.5069C0.191432 0.380226 0.319029 0.25359 0.446662 0.126953C3.19032 2.84997 5.87018 5.57299 8.55004 8.29604C5.80638 10.8291 3.12652 13.4888 0.382827 16.2118Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.2313 5.50939C10.4656 6.26932 9.63614 7.02921 8.87049 7.85246C6.31823 5.25608 3.70217 2.6597 1.1499 0.0633184C1.1499 0.0633184 1.1499 0 1.2137 0C4.53165 1.83645 7.84957 3.67294 11.2313 5.50939Z"
                    fill="currentColor"
                  />
                  <path
                    d="M1.1499 16.2115C3.70217 13.6784 6.31823 11.1454 8.87049 8.6123C9.57235 9.30888 10.338 10.0055 11.1675 10.7654C7.84957 12.6019 4.53165 14.4383 1.2137 16.2115H1.1499Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.6131 10.5122C10.7836 9.75226 10.018 8.99233 9.18848 8.23244C10.018 7.40919 10.8475 6.58594 11.6769 5.7627C11.9321 5.88933 12.1874 6.01601 12.4426 6.20596C13.0807 6.58594 13.7825 6.90257 14.4206 7.28252C14.612 7.34584 14.7396 7.47251 14.8672 7.66246C15.1225 7.97909 15.1225 8.29576 14.8672 8.61239C14.7396 8.73902 14.612 8.8657 14.4206 8.92901C13.5273 9.49895 12.5702 10.0056 11.6131 10.5122Z"
                    fill="currentColor"
                  />
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
