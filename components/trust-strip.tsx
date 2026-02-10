"use client"

import { Star, ShieldCheck, MessageCircle, Sparkles } from "lucide-react"
import { SectionReveal } from "./section-reveal"

const trustItems = [
  { icon: Star, label: "4.9 rating" },
  { icon: ShieldCheck, label: "Discreet & secure" },
  { icon: MessageCircle, label: "VIP replies" },
  { icon: Sparkles, label: "New drops weekly" },
]

export function TrustStrip() {
  return (
    <SectionReveal className="py-8 px-6 lg:py-10">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3">
        {trustItems.map((item, i) => (
          <div key={item.label} className="flex items-center gap-3">
            {i > 0 && (
              <div className="mr-5 hidden h-4 w-px bg-[rgba(255,255,255,0.08)] sm:block" />
            )}
            <item.icon className="h-3.5 w-3.5 text-[#C9A35A]/70" />
            <span className="text-xs tracking-wide text-[#A7A7B3]/70">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </SectionReveal>
  )
}
