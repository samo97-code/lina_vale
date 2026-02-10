"use client"

import { FANVUE_URL, INSTAGRAM_URL, TIKTOK_URL, LINKHUB_URL } from "@/lib/constants"

const footerLinks = [
  { label: "Instagram", href: INSTAGRAM_URL },
  { label: "TikTok", href: TIKTOK_URL },
  { label: "Fanvue", href: FANVUE_URL },
  { label: "All Links", href: LINKHUB_URL },
]

export function SiteFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="footer"
      className="border-t border-[rgba(255,255,255,0.06)] px-6 py-10 lg:px-12"
    >
      {/* Seen on strip */}
      <p className="mx-auto mb-8 text-center text-[11px] tracking-widest uppercase text-[#A7A7B3]/40">
        {"Seen on Instagram & TikTok — "}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#C9A35A]/50 transition-colors hover:text-[#C9A35A]"
        >
          @lina__vale__
        </a>
      </p>

      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xs text-[#A7A7B3]/50">
          {`\u00A9 ${currentYear} Lina Vale. All rights reserved.`}
        </p>
        <div className="flex items-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-wide text-[#A7A7B3]/50 transition-colors hover:text-[#C9A35A]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
