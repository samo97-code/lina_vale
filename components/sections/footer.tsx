"use client";

import {
  FANVUE_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  LINKHUB_URL,
} from "@/lib/constants";

const LINKS = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "TikTok", href: TIKTOK_URL },
  { label: "Fanvue", href: FANVUE_URL },
  { label: "All Links", href: LINKHUB_URL },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="border-t border-[rgba(255,255,255,0.06)] px-6 py-10 md:px-12 lg:px-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 md:flex-row md:justify-between">
        <p className="text-xs text-cream/30">
          &copy; {currentYear} Lina Vale. All rights reserved.
        </p>
        <nav className="flex flex-wrap items-center justify-center gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cream/30 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
