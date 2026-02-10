"use client"

import { SectionReveal } from "./section-reveal"
import { FANVUE_URL, INSTAGRAM_URL, TIKTOK_URL } from "@/lib/constants"
import { Check } from "lucide-react"

const bullets = [
  "Private feed (premium photos & videos)",
  "VIP replies & flirty check-ins",
  "Behind-the-scenes moments",
  "Surprise drops & special requests",
  "Personal replies & special requests",
]

export function AccessCard() {
  return (
    <SectionReveal id="access" className="py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-lg">
        <div
          className="rounded-3xl border border-[#C9A35A]/20 bg-[#111118] p-8 lg:p-12"
          style={{
            boxShadow:
              "0 0 60px rgba(201,163,90,0.06), 0 0 120px rgba(201,163,90,0.03)",
          }}
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#C9A35A]">
            Limited
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
            Exclusive Access
          </h2>

          <ul className="mt-8 space-y-4">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 text-sm text-[#A7A7B3]"
              >
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#C9A35A]" />
                {bullet}
              </li>
            ))}
          </ul>

          <a
            href={FANVUE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-10 flex w-full items-center justify-center rounded-2xl py-4 text-sm font-bold tracking-widest uppercase transition-transform active:scale-[0.98] hover:scale-[1.02]"
          >
            Join Now
          </a>

          <p className="mt-3 text-center text-xs text-[#A7A7B3]/60">
            Instant access. Discreet. Cancel anytime.
          </p>

          <div className="mt-6 h-px w-full bg-[rgba(255,255,255,0.06)]" />

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.1)] bg-transparent py-3.5 text-xs font-medium tracking-widest uppercase text-[#FFF3E8] transition-all hover:border-[#C9A35A]/30 hover:text-[#C9A35A]"
          >
            Follow on Instagram
          </a>

          <a
            href={TIKTOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block text-center text-xs text-[#A7A7B3]/50 underline decoration-[rgba(255,255,255,0.06)] underline-offset-4 transition-colors hover:text-[#C9A35A]"
          >
            TikTok
          </a>
        </div>
      </div>
    </SectionReveal>
  )
}
