"use client";

import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Logo } from "@/components/common/logo";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="border-border bg-background/80 fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Logo height={28} />
        </Link>

        <nav className="flex items-center gap-6">
          <Link
            href="#products"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Products
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="text-muted-foreground hover:text-foreground text-sm transition-colors"
          >
            Contact
          </Link>
          {mounted && (
            <button
              aria-label="Toggle theme"
              className="text-muted-foreground hover:text-foreground transition-colors"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
            </button>
          )}
        </nav>
      </div>
    </header>
  );
}
