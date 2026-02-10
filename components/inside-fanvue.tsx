"use client"

import { Camera, Film, MessageSquare } from "lucide-react"
import { SectionReveal, StaggerChild } from "./section-reveal"

const cards = [
  { icon: Camera, label: "Exclusive photos" },
  { icon: Film, label: "Private videos" },
  { icon: MessageSquare, label: "Direct chats" },
]

export function InsideFanvue() {
  return (
    <SectionReveal className="py-24 px-6 lg:py-32">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[#C9A35A]">
          What awaits
        </p>
        <h2 className="mt-3 font-serif text-3xl font-bold text-[#FFF3E8] lg:text-4xl">
          Inside Fanvue
        </h2>
        <p className="mt-4 text-sm text-[#A7A7B3] lg:text-base">
          Luxury atmosphere. Personal attention. Private access.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {cards.map((card, i) => (
            <StaggerChild key={card.label} index={i}>
              <div className="flex flex-col items-center gap-4 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[#111118]/80 px-6 py-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A35A]/20 bg-[#C9A35A]/10">
                  <card.icon className="h-4 w-4 text-[#C9A35A]" />
                </div>
                <p className="text-sm font-medium tracking-wide text-[#FFF3E8]">
                  {card.label}
                </p>
              </div>
            </StaggerChild>
          ))}
        </div>
      </div>
    </SectionReveal>
  )
}
